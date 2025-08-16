// src/pages/ActivityList.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Activity {
    id: number;
    title: string;
    description: string;
}

export default function ActivityList() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/activities");
                setActivities(res.data);
            } catch (err) {
                console.error("获取活动失败", err);
            }
        };
        fetchActivities();
    }, []);

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">活动列表</h1>
            {activities.length === 0 && <p>暂无活动</p>}
            <ul>
                {activities.map(activity => (
                    <li key={activity.id} className="mb-4 border p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{activity.title}</h2>
                        <p className="text-gray-700">{activity.description}</p>
                        <Link
                            to={`/activities/${activity.id}`}
                            className="text-blue-600 hover:underline"
                        >
                            查看详情
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
