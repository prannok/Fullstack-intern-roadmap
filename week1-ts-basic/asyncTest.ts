// ฟังก์ชันจำลองการดึงข้อมูลจาก Server (ใช้เวลา 2 วินาที)
function fetchUserData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ข้อมูลผู้ใช้: ธีรพัฒน์ (ดึงข้อมูลสำเร็จ!)");
    }, 2000); // จำลองรอ 2000ms (2 วินาที)
  });
}

// ฟังก์ชันหลักที่ต้องรอข้อมูล
async function main() {
  console.log("1. เริ่มต้นค้นหาข้อมูล...");

  // 💡 await สั่งให้หยุดรอ 2 วินาทีตรงนี้ จนกว่าจะได้ข้อมูลมาเก็บในตัวแปร user!
  const user = await fetchUserData();

  console.log("2.", user);
  console.log("3. ทำงานเสร็จสิ้น!");
}

main();
