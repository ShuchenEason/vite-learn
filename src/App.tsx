import { HashRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Chat from './pages/chat'
import PDF from './pages/pdf'
import ReactPdf from './pages/react-pdf'

function App(): JSX.Element {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Index />}></Route>
                        <Route path="chat" element={<Chat />}></Route>
                        <Route path="pdf" element={<PDF />}></Route>
                        <Route path="react-pdf" element={<ReactPdf />}></Route>
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App
