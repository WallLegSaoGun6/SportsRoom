// src/pages/Register.tsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/register", { username, password });
            if (res.data.success) {
                alert("注册成功！");
                navigate("/login");
            }
        } catch (err: any) {
            setError(err.response?.data?.message || "注册失败");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">注册</h1>
            <input
                type="text"
                placeholder="用户名"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full p-2 border rounded mb-2"
            />
            <input
                type="password"
                placeholder="密码"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full p-2 border rounded mb-2"
            />
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <button
                onClick={handleRegister}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
                注册
            </button>
        </div>
    );
}
