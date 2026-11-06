"use client"; // 👈 1. บรรทัดสำคัญ! บอก Next.js ว่า หน้านี้มีปุ่มกดโต้ตอบ (Client Component)

import { useState } from "react"; // 👈 2. ดึงตัวเก็บค่านับตัวเลขของ React เข้ามาใช้

export default function CounterPage() {
  // 👈 3. สร้างตัวแปรเก็บค่านับตัวเลข (เริ่มต้นเป็น 0)
  const [count, setCount] = useState(0);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-purple-600">
        ปุ่มนับตัวเลข (Counter) 🔢
      </h1>

      <p className="mt-4 text-xl">
        จำนวนที่กดไปแล้ว:{" "}
        <span className="font-bold text-red-500">{count}</span> ครั้ง
      </p>

      {/* 👈 4. ปุ่มกดบวกเพิ่มตัวเลข */}
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("Button Clicked!");
        }}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded text-white"
      >
        กดเพิ่มตัวเลข (+1)
      </button>
    </div>
  );
}
