import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-600">
        สวัสดีครับ! นี่คือหน้าแรกของ Next.js 🎉
      </h1>
      <p className="mt-2 text-gray-600">
        ยินดีต้อนรับสู่การเรียนรู้ Next.js App Router
      </p>

      {/*  ใส่ปุ่มกดวาร์ปไปหน้า /about */}
      <div className="mt-5">
        <Link
          href="/about"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ไปยังหน้าเกี่ยวกับเรา ➔
        </Link>
      </div>
    </div>
  );
}
