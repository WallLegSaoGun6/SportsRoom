// src/pages/ActivityList.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getActivities } from "../api";

interface Activity {
    id: number;
    title: string;
    description: string;
}

export default function ActivityList() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getActivities()
            .then((res) => setActivities(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">活动列表</h1>
            {activities.map((activity) => (
                <div
                    key={activity.id}
                    className="border p-4 mb-3 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate(`/activities/${activity.id}`)}
                >
                    <h2 className="text-xl font-semibold">{activity.title}</h2>
                    <p className="text-gray-700">{activity.description}</p>
                </div>
            ))}
        </div>
    );
}
