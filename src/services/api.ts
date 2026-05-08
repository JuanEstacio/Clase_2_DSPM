import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createPost = async (data: any) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const updatePost = async (id: number, data: any) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};

export const deletePost = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};