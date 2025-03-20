import reactdom from "react-dom/client"
import "./style.css"
import App from "./App"


const root = reactdom.createRoot(document.getElementById("root"))


root.render(<div><App></App></div>)