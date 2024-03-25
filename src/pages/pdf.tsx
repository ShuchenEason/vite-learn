import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Typography, Button } from 'antd'
import { Link } from 'react-router-dom'
import EgPdf from './eg-pdf'
import PagePdf from './page-pdf'
const { Sider, Content } = Layout
const { Text } = Typography

interface MenuItem {
    key: string
    title: string
    content: string // 文案内容
    fileUrl?: string // 文件地址
    jupyterUrl?: string // jupyter地址
}

const menuItems: MenuItem[] = [
    { key: '1', title: '目录一', content: '这是目录一的内容' },
    {
        key: '2',
        title: '目录二',
        content: '这是目录二的内容',
        fileUrl:
            'https://brand-refactor-material.s3.cn-north-1.jdcloud-oss.com/material/material_65fd312ee4b08d1543480398.pdf',
        jupyterUrl:
            'http://127.0.0.1:8888/notebooks/sentiment_analysis.ipynb'
    }
    // 更多目录项...
]

function SidebarAndContent() {
    const [selectedKey, setSelectedKey] = React.useState(menuItems[0].key)
    const [isPdf, setIsPdf] = useState(true)

    const onMenuClick = (e: any) => {
        setSelectedKey(e.key)
    }

    const handlePdfButtonClick = () => {
        setIsPdf(!isPdf)
    }

    return (
        <Layout>
            <Sider width={200}>
                <Menu
                    selectedKeys={[selectedKey]}
                    mode="inline"
                    onClick={onMenuClick}
                >
                    {menuItems.map((item) => (
                        <Menu.Item key={item.key}>
                            <Link to={`#${item.key}`}>{item.title}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    {/* 根据选中的菜单项生成面包屑导航 */}
                    <Breadcrumb.Item>
                        {
                            menuItems.find((item) => item.key === selectedKey)
                                ?.title
                        }
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                        padding: '24px',
                        background: '#fff',
                        minHeight: 280
                    }}
                >
                    <Button onClick={handlePdfButtonClick}>
                        PDF or Jupyter
                    </Button>
                    <Text>
                        {
                            menuItems.find((item) => item.key === selectedKey)
                                ?.content
                        }
                    </Text>
                    {isPdf ? (
                        <div
                            style={{
                                marginTop: 16,
                                padding: '0 20px',
                                height: '800px',
                                width: '100%',
                                overflow: 'scroll'
                            }}
                        >
                            <EgPdf
                                file={
                                    menuItems.find(
                                        (item) => item.key === selectedKey
                                    )?.fileUrl
                                }
                            />
                        </div>
                    ) : (
                        <div>
                            <iframe
                                src={
                                    menuItems.find(
                                        (item) => item.key === selectedKey
                                    )?.jupyterUrl
                                }
                                width="100%"
                                height="800px"
                            ></iframe>
                        </div>
                    )}
                </Content>
            </Layout>
        </Layout>
    )
}

export default SidebarAndContent
