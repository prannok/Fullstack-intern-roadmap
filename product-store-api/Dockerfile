# 1. เลือกระบบปฏิบัติการที่มี Node.js 22 ติดมาด้วย (รุ่น Alpine เล็กเบา)
FROM node:22-alpine

# 2. ตั้งโฟลเดอร์ทำงานหลักในกล่องจำลอง
WORKDIR /app

# 3. ก๊อปปี้รายการแพ็กเกจ และโฟลเดอร์ prisma เข้าไปก่อน
COPY package*.json ./
COPY prisma ./prisma/

# 4. ติดตั้งแพ็กเกจ และสร้าง Prisma Client ในกล่อง
RUN npm install
RUN npx prisma generate

# 5. ก๊อปปี้โค้ดทั้งหมดที่เหลือเข้าไป
COPY . .

# 6. สั่งแปลง TypeScript เป็น JavaScript (สร้างโฟลเดอร์ dist)
RUN npm run build

# 7. ประกาศเปิดช่องพอร์ต 3000
EXPOSE 3000

# 8. คำสั่งเมื่อเปิดเครื่องจำลอง ให้สั่งรันแอป
CMD ["npm", "run", "start:prod"]
