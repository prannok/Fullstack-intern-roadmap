// 1. สร้าง Interface (พิมพ์เขียวแบบฟอร์มสินค้า)
interface Product {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean; // มีสินค้าพร้อมส่งไหม
}

// 2. สร้าง Object โดยระบุ Type เป็น : Product
const item1: Product = {
  id: 1,
  name: "คีย์บอร์ดไร้สาย",
  price: 1500,
  isAvailable: true,
};

// 3. ฟังก์ชันรับข้อมูลสินค้าเข้ามาแสดงผล
function printProduct(product: Product) {
  console.log(`สินค้า: ${product.name} ราคา: ${product.price} บาท`);
}

printProduct(item1);
