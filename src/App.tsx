import React, { useState, useEffect } from "react";

function App() {
    // Create the count state.
    const [count, setCount] = useState(0);
    // Update the count (+1 every second).
    useEffect(() => {
        const timer = setTimeout(() => setCount(count + 1), 1000);
        return () => clearTimeout(timer);
    }, [count, setCount]);
    // Return the App component.
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <p>
                    This page has been opened for <code>{count}</code> seconds.
                </p>
            </header>
        </div>
    );
}

export default App;
