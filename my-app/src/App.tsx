import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { ControlledInput } from "./components/InputControlled";
import { UncontrolledInput } from "./components/InputUncontrolled";
import type { User } from "./components/interfaces/User";
import { UserCard } from "./components/Card/UserCard";

function App() {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data: User[]) => {
                setLoading(false);

                if (!search) {
                    setUsers(data);
                    return;
                }
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const filteredData = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>

            <ControlledInput value={search} onChange={setSearch} />
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            <div className="users-container">
                {filteredData.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>

            <br />
            <UncontrolledInput />

            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
