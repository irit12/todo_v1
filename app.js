import { RootCmp } from './RootCmp.jsx'

// const elContainer = document.getElementById('root')
// ReactDOM.render(<RootCmp />, elContainer)

const elContainer = document.getElementById('root')
const root = ReactDOM.createRoot(elContainer)
root.render(<RootCmp />)
