import { HashRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Chat from './pages/chat'
import EgPdf from './pages/eg-pdf'
import PagePdf from './pages/page-pdf'
import PDF from './pages/pdf'

function App(): JSX.Element {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Index />}></Route>
                        <Route path="chat" element={<Chat />}></Route>
                        <Route path="eg-pdf" element={<EgPdf />}></Route>
                        <Route path="page-pdf" element={<PagePdf />}></Route>
                        <Route path="pdf" element={<PDF />}></Route>
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App
