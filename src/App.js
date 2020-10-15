import React from "react"
import ReactDom from 'react-dom';
import "./index.css"

function App() {
    return (
        <div>
            <div className="hello-word">
                <h1>Helle world:</h1>
                <p>This is a paragraph</p>
            </div>
            <div className="list-wrapper">
                <ul>
                    <ul>
                        <li>Hello</li>
                        <li>World</li>
                        <li>hi</li>
                        <li>THis is Rect</li>
                    </ul>
                </ul>
            </div>
        </div>

    )
}

export default App;