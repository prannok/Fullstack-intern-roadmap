"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// 1. กำหนดสเปกข้อมูล Task
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function TasksPage() {
  // 1. สร้าง State เก็บรายการงาน, เลขหน้าปัจจุบัน, และสถานะกำลังโหลด
  const [tasks, setTasks] = useState<Task[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchTasks(currentPage: number) {
    try {
      setIsLoading(true);
      // ยิง API โดยส่งเลขหน้า และจำกัดดึงทีละ 10 ชิ้น
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=10`,
      );
      const newTasks: Task[] = await res.json();

      if (currentPage === 1) {
        setTasks(newTasks);
      } else {
        // 💡 เอาข้อมูลใหม่มาต่อท้ายข้อมูลเดิม (...prev + ...newTasks)
        setTasks((prevTasks) => [...prevTasks, ...newTasks]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }
  // 3. สั่งดึงหน้า 1 ตอนเปิดหน้าเว็บครั้งแรก
  useEffect(() => {
    fetchTasks(1);
  }, []);

  function handleLoadMore() {
    const nextPage = page + 1; // 1. บวกเลขหน้าขึ้นอีก 1
    setPage(nextPage); // 2. อัปเดต State เลขหน้า
    fetchTasks(nextPage); // 3. ยิง API ดึงข้อมูลหน้าถัดไปมาต่อท้าย
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">
        รายการงานทั้งหมด (Tasks) 📋
      </h1>
      {/* วนลูปแสดงผลรายการ Tasks */}
      <div className="space-y-3 mb-6">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardContent className="p-4 flex justify-between items-center">
              <span className="font-medium">
                {task.id}. {task.title}
              </span>
              <span
                className={
                  task.completed
                    ? "text-green-600 font-bold"
                    : "text-amber-500 font-bold"
                }
              >
                {task.completed ? "✅ เสร็จแล้ว" : "⏳ กำลังทำ"}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* 💡 ปุ่มกดโหลดเพิ่ม (Load More) */}
      <div className="text-center">
        <Button
          onClick={handleLoadMore}
          disabled={isLoading}
          className="bg-purple-600 text-white hover:bg-purple-700"
        >
          {isLoading ? "⏳ กำลังโหลดเพิ่ม..." : "➕ โหลดเพิ่ม (Load More)"}
        </Button>
      </div>
    </div>
  );
}
