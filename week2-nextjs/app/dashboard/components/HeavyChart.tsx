"use client";

export default function HeavyChart() {
  return (
    <div className="border p-6 rounded-lg bg-purple-50 text-center">
      <h2 className="text-xl font-bold text-purple-700 mb-2">
        📊 กราฟสรุปสถิติผู้ใช้งาน (Heavy Component)
      </h2>
      <p className="text-purple-600">
        ชิ้นส่วนนี้จำลองว่าเป็นโค้ดขนาดใหญ่ที่ใช้เวลาโหลดนาน
      </p>
    </div>
  );
}
