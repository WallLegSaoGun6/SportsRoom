import axios from 'axios';

// 后端 API 基础地址
const API_BASE = 'http://localhost:5000/api';

// 用户注册
export const registerUser = (data: { username: string; password: string }) =>
    axios.post(`${API_BASE}/register`, data);

// 用户登录
export const loginUser = (data: { username: string; password: string }) =>
    axios.post(`${API_BASE}/login`, data);

// 获取所有活动
export const getActivities = () => axios.get(`${API_BASE}/activities`);

// 根据 ID 获取单个活动
export const getActivityById = (id: string) => axios.get(`${API_BASE}/activities/${id}`);

// 报名活动
export const registerActivity = (id: string, data: { user_id: number }) =>
    axios.post(`${API_BASE}/activities/${id}/register`, data);

// 获取评论
export const getComments = (id: string) =>
    axios.get(`${API_BASE}/activities/${id}/comments`);

// 添加评论
export const addComment = (id: string, data: { user_id: number; content: string }) =>
    axios.post(`${API_BASE}/activities/${id}/comment`, data);
