// src/pages/Login.tsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/login", { username, password });
            if (res.data.success) {
                alert("登录成功！");
                navigate("/activities"); // 登录成功跳转到活动列表
            }
        } catch (err: any) {
            setError(err.response?.data?.message || "登录失败");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">登录</h1>
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
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                登录
            </button>
        </div>
    );
}
