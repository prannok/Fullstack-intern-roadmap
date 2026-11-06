"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

// 💡 ดึง HeavyChart แบบ Dynamic Import (Lazy Loading) พร้อมใส่ Skeleton รอโหลด
const HeavyChart = dynamic(
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // หน่วงเวลา 2 วินาที
    return import("./components/HeavyChart");
  },
  {
    loading: () => (
      <Skeleton className="h-32 w-full bg-purple-100 animate-pulse rounded-lg" />
    ),
  },
);

export default function DashboardPage() {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        ระบบแดชบอร์ด (Dashboard) 📈
      </h1>
      <p className="text-gray-600">
        หน้านี้ใช้เทคนิค Lazy Loading ในการแอบโหลดชิ้นส่วนกราฟหนักๆ เบื้องหลัง
      </p>

      {/* เรียกใช้งาน HeavyChart ที่โหลดแบบ Dynamic */}
      <HeavyChart />
    </div>
  );
}
