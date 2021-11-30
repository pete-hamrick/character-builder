import "./App.css";
import { useState } from "react";

function App() {
    const [head, setHead] = useState("");
    return (
        <div className="App">
            <header className="App-header">
                <h1>Character Designer</h1>
                <label>
                    Head:
                    <select value={head} onChange={() => {}}></select>
                </label>
            </header>
        </div>
    );
}

export default App;
