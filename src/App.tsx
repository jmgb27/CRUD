import React, { useState, useEffect } from "react";

function App() {
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(name);

        fetch("http://localhost:1337/api/create", {
            method: "POST",
            body: JSON.stringify({ name: name }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    return (
        <div className="App">
            CRUD Homepage
            <form onSubmit={handleSubmit}>
                <label>
                    Input
                    <input
                        className="border-2"
                        type="text"
                        name={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default App;
