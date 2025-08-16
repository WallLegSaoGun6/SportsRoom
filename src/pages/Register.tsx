import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await registerUser({ username, password });
            if (res.data.success) {
                alert("注册成功！");
                navigate("/login"); // 注册后跳转到登录页
            }
        } catch (err: any) {
            setError(err.response?.data?.message || "注册失败");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">注册</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="用户名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                {error && <p className="text-red-500">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
                >
                    注册
                </button>
            </form>
        </div>
    );
}
