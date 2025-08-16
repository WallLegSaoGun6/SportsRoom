// src/pages/ActivityDetail.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Activity {
    id: number;
    title: string;
    description: string;
}

export default function ActivityDetail() {
    const { id } = useParams();
    const [activity, setActivity] = useState<Activity | null>(null);

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/activities`);
                const found = res.data.find((a: Activity) => a.id.toString() === id);
                setActivity(found);
            } catch (err) {
                console.error("获取活动详情失败", err);
            }
        };
        fetchActivity();
    }, [id]);

    if (!activity) return <p className="text-center mt-8">加载中...</p>;

    return (
        <div className="max-w-3xl mx-auto mt-8 p-4 border rounded shadow">
            <h1 className="text-2xl font-bold mb-2">{activity.title}</h1>
            <p className="text-gray-700">{activity.description}</p>
        </div>
    );
}
