"use client";

import { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        setError(false);

        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.massage || "โหลดข้อมูลไม่สำเร็จ");
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, []);

  if (isLoading) {
    return <div>กำลังโหลด</div>;
  }

  if (isError) {
    return <div>เกิดข้อผิดพลาด</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">รายการโพสต์ 📝</h1>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 mb-3 rounded">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
