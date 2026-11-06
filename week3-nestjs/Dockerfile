# 1. ดึงภาพต้นฉบับที่มี Node.js 20 แบบ Alpine (ขนาดเล็กเบา)
FROM node:22-alpine

# 2. กำหนดโฟลเดอร์ทำงานภายใน Container
WORKDIR /app

# 3. ก๊อปปี้ไฟล์รายการแพ็กเกจและ Prisma Schema เข้าไปก่อน
COPY package*.json ./
COPY prisma ./prisma/

# 4. ติดตั้ง dependencies และสร้าง Prisma Client
RUN npm install
RUN npx prisma generate

# 5. ก๊อปปี้ซอร์สโค้ดที่เหลือทั้งหมดในเครื่องเราเข้าไป
COPY . .

# 6. สั่ง Build โค้ด TypeScript ให้กลายเป็น JavaScript (สร้างโฟลเดอร์ dist)
RUN npm run build

# 7. ประกาศเปิดพอร์ต 3000
EXPOSE 3000

# 8. คำสั่งเริ่มทำงานเมื่อเปิด Container (รันโปรดักชันโค้ดจากโฟลเดอร์ dist)
CMD ["npm", "run", "start:prod"]
