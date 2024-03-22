import { useCallback, useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import './page-pdf.less'

import { Input, Spin, Tooltip } from 'antd'
import {
    LeftOutlined,
    RightOutlined,
    PlusCircleOutlined,
    MinusCircleOutlined,
    FullscreenExitOutlined,
    FullscreenOutlined
} from '@ant-design/icons'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function Sample() {
    const file =
        'https://brand-refactor-material.s3.cn-north-1.jdcloud-oss.com/material/material_65fd312ee4b08d1543480398.pdf'
    const [numPages, setNumPages] = useState<number>()
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [pageNumberInput, setPageNumberInput] = useState(1)
    const [pageNumberFocus, setPageNumberFocus] = useState(false)
    const [pageWidth, setPageWidth] = useState(600)
    const [fullscreen, setFullscreen] = useState(false)
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages)
    }
    const lastPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1)
            setPageNumberInput(pageNumber - 1)
        }
    }
    const nextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1)
            setPageNumberInput(pageNumber + 1)
        }
    }

    const onPageNumberFocus = () => {
        setPageNumberFocus(true)
    }
    const onPageNumberBlur = () => {
        setPageNumberFocus(false)
        setPageNumberInput(pageNumber)
    }

    const onPageNumberChange = (e) => {
        let value = e.target.value
        value = value <= 0 ? 1 : value
        value = value >= numPages ? numPages : value
        setPageNumberInput(value)
    }

    const toPage = (e) => {
        setPageNumber(Number(e.target.value))
    }
    const pageZoomOut = () => {
        if (pageWidth > 600) {
            setPageWidth(pageWidth * 0.8)
        }
    }

    const pageZoomIn = () => {
        setPageWidth(pageWidth * 1.2)
    }

    const pageFullscreen = () => {
        if (fullscreen) {
            setFullscreen(false)
            setPageWidth(600)
        } else {
            setFullscreen(true)
            setPageWidth(window.screen.width - 40)
        }
    }

    return (
        <div className="view">
            <div className="pageContainer">
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<Spin size="large" />}
                >
                    <Page
                        pageNumber={pageNumber}
                        width={pageWidth}
                        loading={<Spin size="large" />}
                    />
                </Document>
            </div>

            <div className="pageTool">
                <Tooltip title={pageNumber == 1 ? '已是第一页' : '上一页'}>
                    <LeftOutlined onClick={lastPage} />
                </Tooltip>
                <Input
                    style={{
                        display: 'inline-block',
                        width: '50px',
                        textAlign: 'center'
                    }}
                    value={pageNumberFocus ? pageNumberInput : pageNumber}
                    onFocus={onPageNumberFocus}
                    onBlur={onPageNumberBlur}
                    onChange={onPageNumberChange}
                    onPressEnter={toPage}
                    type="number"
                />
                / {numPages}
                <Tooltip
                    title={pageNumber == numPages ? '已是最后一页' : '下一页'}
                >
                    <RightOutlined onClick={nextPage} />
                </Tooltip>
                <Tooltip title="放大">
                    <PlusCircleOutlined onClick={pageZoomIn} />
                </Tooltip>
                <Tooltip title="缩小">
                    <MinusCircleOutlined onClick={pageZoomOut} />
                </Tooltip>
                <Tooltip title={fullscreen ? '恢复默认' : '适合窗口'}>
                    {fullscreen ? (
                        <FullscreenExitOutlined onClick={pageFullscreen} />
                    ) : (
                        <FullscreenOutlined onClick={pageFullscreen} />
                    )}
                </Tooltip>
            </div>
        </div>
    )
}
