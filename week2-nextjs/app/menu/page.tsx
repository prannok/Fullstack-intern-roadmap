interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

export default function MenuPage() {
  // ข้อมูลเมนูอาหาร 3 จาน
  const menuList: MenuItem[] = [
    { id: 1, name: "ข้าวมันไก่", price: 50, category: "อาหารจานเดียว" },
    { id: 2, name: "ต้มยำกุ้ง", price: 150, category: "ต้ม/แกง" },
    { id: 3, name: "ผัดไทยกุ้งสด", price: 80, category: "ผัด" },
    { id: 4, name: "ผัดไทยหมู", price: 80, category: "ผัด" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">
        เมนูอาหารแนะนำวันนี้ 🍽️
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 🛑 โจทย์ของคุณอยู่ตรงนี้ครับ!
            ให้ลองพิมพ์คำสั่ง menuList.map(...) วนลูปวาดการ์ดเมนูอาหาร 3 จานออกหน้าจอด้วยตัวเอง
        */}
        {menuList.map((item) => (
          <div key={item.id} className="border border-gray-300 p-4 rounded-md">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>ราคา: {item.price} บาท</p>
            <p>หมวดหมู่: {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
