"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// 1. กำหนดสเปกข้อมูลผู้ใช้ที่ได้รับจาก API
interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

export default function UsersPage() {
  // 2. สร้าง State สำหรับเก็บข้อมูล และสถานะต่าง ๆ
  const [users, setUsers] = useState<User[]>([]); // กล่องเก็บรายชื่อผู้ใช้
  const [isLoading, setIsLoading] = useState<boolean>(true); // สถานะกำลังโหลดไหม
  const [error, setError] = useState<string | null>(null); // สถานะเก็บข้อผิดพลาด

  async function fetchUsers() {
    try {
      setIsLoading(true);
      setError(null);

      // ยิงไปดึงข้อมูลจาก Mock API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      console.log("Response : ", response);
      if (!response.ok) {
        throw new Error("ไม่สามารถดึงข้อมูลผู้ใช้ได้");
      }

      const data: User[] = await response.json();
      setUsers(data); // นำข้อมูลมาเก็บใน State users
    } catch (err: any) {
      setError(err.message || "เกิดข้อผิดพลาดในการดึงข้อมูล");
    } finally {
      setIsLoading(false); // โหลดเสร็จสิ้น
    }
  }

  // 3. useEffect สั่งยิง API ตอนเปิดหน้าเว็บครั้งแรก
  useEffect(() => {
    fetchUsers();
  }, []);

  // 4. แสดงผลแยกตามสถานะ (Loading / Error / Success)
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((n) => (
          <Card key={n}>
            <CardHeader>
              <Skeleton className="h-6 w-1/2 bg-gray-200" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-3/4 bg-gray-200" />
              <Skeleton className="h-4 w-1/3 bg-gray-200" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="p-10 text-xl font-bold text-red-500">ไม่พบข้อมูล</div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-xl font-bold text-red-500">
        ❌ เกิดข้อผิดพลาด: {error}
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        รายชื่อผู้ใช้งาน (Users List) 👥
      </h1>

      {/* วนลูปแสดงผลการ์ดรายชื่อผู้ใช้ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">📧 {user.email}</p>
              <p className="text-blue-500 mt-1">🌐 {user.website}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 💡 ปุ่ม Refresh ข้อมูลของ shadcn/ui */}
      <Button onClick={fetchUsers} variant="outline">
        🔄 รีเฟรชข้อมูล
      </Button>
    </div>
  );
}
