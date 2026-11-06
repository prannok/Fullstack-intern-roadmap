// 🛒 ระบบคำนวณราคาสินค้าพร้อมส่วนลด (ตัวอย่างการใช้งาน Callback ในชีวิตจริง)

function calculateFinalPrice(price: number, applyDiscount: (p: number) => number) {
  console.log(`ราคาสินค้าตั้งต้น: ${price} บาท`);

  // 💡 เรียกใช้ Callback ที่ส่งเข้ามา เพื่อคำนวณส่วนลดตามสูตรของลูกค้านั้นๆ
  const finalPrice = applyDiscount(price);

  console.log(`👉 ราคาสุทธิที่ต้องจ่าย: ${finalPrice} บาท\n`);
}

// -------------------------------------------------------------

// 👤 ลูกค้าคนที่ 1: ใช้คูปองส่วนลด 10%
calculateFinalPrice(1000, (price) => {
  return price * 0.9; // ลด 10%
});

// 👤 ลูกค้าคนที่ 2: ใช้โปรโมชันลดราคาตรงๆ 200 บาท
calculateFinalPrice(1000, (price) => {
  return price - 200; // ลด 200 บาท
});

// 👤 ลูกค้าคนที่ 3: ลูกค้า VIP (ลดราคา 50%)
calculateFinalPrice(1000, (price) => {
  return price * 0.5; // ลด 50%
});
