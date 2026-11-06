class Calculator {
  private value: number = 0;
  add(num: number) {
    this.value += num;
  }
  // 💡 ฟังก์ชันส่งค่าตัวเลขผลลัพธ์กลับไป (ไม่ได้ส่ง this)
  getResult(): number {
    return this.value;
  }
}
const calc = new Calculator();
calc.add(40);
// ✅ เอาตัวแปร finalTotal มารับค่า 50 เพื่อเอาไปปริ้นท์ หรือส่งเข้าแดชบอร์ด
const finalTotal = calc.getResult();
if (finalTotal >= 50) {
  console.log("คะแนนผ่านเกณฑ์!");
} else {
  console.log("คะแนนไม่ผ่านเกณฑ์!");
}
