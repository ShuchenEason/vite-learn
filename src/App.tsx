import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Index from './pages/index'
import Chat from './pages/chat'
import EgPdf from './pages/eg-pdf'
import PagePdf from './pages/page-pdf'
import PDF from './pages/pdf'
import Resource from './pages/resource'
import List from './pages/list'
import { Content, Header } from 'antd/es/layout/layout'
import { Button, Layout, Menu } from 'antd'
import './App.css'

function App(): JSX.Element {
    return (
        <div>
            <HashRouter>
                <Layout className="layout">
                    <Header
                        style={{
                            background: '#1E90FF',
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}
                    >
                        <div
                            style={{
                                color: 'white',
                                fontSize: '24px',
                                fontWeight: 'bold'
                            }}
                        >
                            CODECON
                        </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ background: '#1E90FF' }}
                        >
                            <Menu.Item key="1">
                                <Link to="/">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/pdf">资源</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/chat">论坛</Link>
                            </Menu.Item>
                            <Menu.Item key="4">定制服务</Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/list">list</Link>
                            </Menu.Item>
                            <Menu.Item key="5">关于我们</Menu.Item>
                        </Menu>
                        <div>
                            <Button type="link" style={{ color: 'white' }}>
                                Log In
                            </Button>
                            <Button type="primary">Sign Up</Button>
                        </div>
                    </Header>
                    <Layout>
                        <Content
                            style={{
                                padding: '50px',
                                background: '#87CEFA',
                                display: 'flex',
                                justifyContent: 'center',
                                alignContent: 'center'
                            }}
                        >
                            <Routes>
                                <Route path="/">
                                    <Route index element={<Index />}></Route>
                                    <Route
                                        path="chat"
                                        element={<Chat />}
                                    ></Route>
                                    <Route
                                        path="eg-pdf"
                                        element={<EgPdf />}
                                    ></Route>
                                    <Route
                                        path="page-pdf"
                                        element={<PagePdf />}
                                    ></Route>
                                    <Route path="pdf" element={<PDF />}></Route>
                                    <Route
                                        path="src"
                                        element={<Resource />}
                                    ></Route>
                                     <Route
                                        path="list"
                                        element={<List />}
                                    ></Route>
                                </Route>
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </HashRouter>
        </div>
    )
}

export default App
