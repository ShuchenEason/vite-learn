import { useCallback, useState } from 'react'
import { useResizeObserver } from '@wojtekmaj/react-hooks'
import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import './eg-pdf.less'

import { Pagination } from 'antd'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/'
}

const resizeObserverOptions = {}

const maxWidth = 800

type PDFFile = string | File | null

export default function EgPdf(props) {
    const file = props.file
    // const [file, setFile] = useState<PDFFile>(
    //     'https://brand-refactor-material.s3.cn-north-1.jdcloud-oss.com/material/material_65fd312ee4b08d1543480398.pdf'
    // )
    const [numPages, setNumPages] = useState<number>()
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
    const [containerWidth, setContainerWidth] = useState<number>()

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries

        if (entry) {
            setContainerWidth(entry.contentRect.width)
        }
    }, [])

    useResizeObserver(containerRef, resizeObserverOptions, onResize)

    function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { files } = event.target

        if (files && files[0]) {
            setFile(files[0] || null)
        }
    }
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages)
    }

    return (
        <div className="Example">
            <div className="Example__container">
                {/* <div className="Example__container__load">
                    <label htmlFor="file">Load from file:</label>
                    <input onChange={onFileChange} type="file" />
                </div> */}
                <div
                    className="Example__container__document"
                    ref={setContainerRef}
                >
                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        options={options}
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={
                                    containerWidth
                                        ? Math.min(containerWidth, maxWidth)
                                        : maxWidth
                                }
                            />
                        ))}
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
                {/* <Pagination
                    style={{ position: 'absolute', marginTop: 20 }}
                    total={numPages}
                    showTotal={(total) => `共 ${total} 页`}
                    current={pageNumber}
                    pageSize={1}
                    size="small"
                    onChange={(page) => setPageNumber(page)}
                /> */}
            </div>
        </div>
    )
}
