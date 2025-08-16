import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getActivityById, getActivities, getComments, registerActivity, addComment } from "../api";

interface Activity {
    id: number;
    title: string;
    description: string;
}

interface Comment {
    id: number;
    username: string;
    content: string;
    created_at: string;
}

export default function ActivityDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [activity, setActivity] = useState<Activity | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState("");
    const [userId] = useState(1); // 临时写死用户ID

    // 获取活动
    useEffect(() => {
        if (id) {
            getActivityById(id)
                .then((res) => setActivity(res.data))
                .catch((err) => console.error(err));
            fetchComments();
        }
    }, [id]);

    // 获取评论
    const fetchComments = () => {
        if (!id) return;
        getComments(id)
            .then((res) => setComments(res.data))
            .catch((err) => console.error(err));
    };

    // 报名
    const handleRegister = () => {
        if (!id) return;
        registerActivity(id, { user_id: userId })
            .then(() => alert("报名成功"))
            .catch(() => alert("报名失败或已报名"));
    };

    // 提交评论
    const handleAddComment = () => {
        if (!id || !newComment) return;
        addComment(id, { user_id: userId, content: newComment })
            .then(() => {
                setNewComment("");
                fetchComments();
            })
            .catch(() => alert("评论失败"));
    };

    if (!activity) return <div className="text-center p-4">加载中...</div>;

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-2">{activity.title}</h1>
            <p className="text-gray-700 mb-4">{activity.description}</p>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
                onClick={handleRegister}
            >
                报名活动
            </button>

            <h2 className="text-xl font-semibold mt-6 mb-2">评论</h2>
            <div className="mb-4">
                {comments.map((c) => (
                    <div key={c.id} className="border-b py-2">
                        <span className="font-bold">{c.username}</span>: {c.content}
                        <div className="text-gray-400 text-sm">{c.created_at}</div>
                    </div>
                ))}
            </div>

            <textarea
                className="w-full border rounded p-2 mb-2"
                placeholder="写评论..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleAddComment}
            >
                提交评论
            </button>

            <div className="mt-6">
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    onClick={() => navigate("/activities")}
                >
                    返回活动列表
                </button>
            </div>
        </div>
    );
}
