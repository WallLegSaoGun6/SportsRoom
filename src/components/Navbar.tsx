import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">

            <div className="flex space-x-4">
                <Link to="/">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition">
                        首页
                    </button>
                </Link>
                <Link to="/activities">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition">
                        活动列表
                    </button>
                </Link>
                <Link to="/login">
                    <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-4 py-2 rounded transition">
                        登录
                    </button>
                </Link>
                <Link to="/register">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded transition">
                        注册
                    </button>
                </Link>
            </div>
        </nav>
    );
}
