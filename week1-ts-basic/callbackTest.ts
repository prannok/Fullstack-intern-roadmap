// 1. สร้างฟังก์ชันรับ callback
function doHomework(subject: string, callback: (msg: string) => void) {
  console.log(`กำลังทำการบ้านวิชา ${subject}...`);

  // จำลองว่าทำ 2 วินาทีเสร็จ แล้วค่อยเรียก callback
  setTimeout(() => {
    callback(`ทำการบ้านวิชา ${subject} เสร็จเรียบร้อยแล้ว! 🎉`);
  }, 2000);
}

// 2. ลองเรียกใช้งาน: ยื่นฟังก์ชัน callback () => { ... } เข้าไปเป็นพารามิเตอร์
doHomework("คณิตศาสตร์", (result) => {
  console.log(result);
});
