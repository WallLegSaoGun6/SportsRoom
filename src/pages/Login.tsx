import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await loginUser({ username, password });
            if (res.data.success) {
                alert("登录成功！");
                navigate("/activities"); // 登录后跳转到活动列表
            }
        } catch (err: any) {
            setError(err.response?.data?.message || "登录失败");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">登录</h1>
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
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                >
                    登录
                </button>
            </form>
        </div>
    );
}
