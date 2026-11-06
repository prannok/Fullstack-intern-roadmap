# 🛒 Product Store REST API

> ระบบ RESTful API สำหรับจัดการข้อมูลคลังสินค้า (Products Catalog) พัฒนาด้วย **NestJS**, **Prisma ORM**, **PostgreSQL** และบริหารจัดการสภาพแวดล้อมด้วย **Docker Compose**

---

## 🛠️ Tech Stack & Architecture

- **Backend Framework:** [NestJS](https://nestjs.com/) (TypeScript)
- **Database:** [PostgreSQL 15](https://www.postgresql.org/) (Alpine Linux Container)
- **ORM:** [Prisma ORM 6](https://www.prisma.io/)
- **Data Validation:** `class-validator` + `class-transformer` (Global ValidationPipe)
- **Containerization:** Docker & Docker Compose

---

## 📦 โครงสร้างข้อมูลตาราง (Database Schema)

ตาราง **`Product`** ถูกนิยามไว้ใน `prisma/schema.prisma`:

| Field Name  | Data Type  | Key / Attribute                 | รายละเอียด                            |
| :---------- | :--------- | :------------------------------ | :------------------------------------ |
| `id`        | `Int`      | `@id @default(autoincrement())` | รหัสสินค้า (Primary Key รันอัตโนมัติ) |
| `name`      | `String`   | -                               | ชื่อสินค้า (ห้ามเว้นว่าง)             |
| `price`     | `Float`    | -                               | ราคาสินค้า (ตัวเลขทศนิยม)             |
| `stock`     | `Int`      | `@default(0)`                   | จำนวนสต็อกสินค้า (เริ่มต้น 0)         |
| `category`  | `String`   | -                               | หมวดหมู่สินค้า                        |
| `createdAt` | `DateTime` | `@default(now())`               | วันเวลาที่บันทึกข้อมูล                |
| `updatedAt` | `DateTime` | `@updatedAt`                    | วันเวลาที่แก้ไขข้อมูลล่าสุด           |

---

## ⚡ วิธีการเปิดใช้งานระบบ (Getting Started)

### 📌 วิธีที่ 1: รันทั้งระบบด้วย Docker (แนะนำสำหรับตรวจงาน / ใช้งานจริง)

ไม่ต้องติดตั้ง Node.js หรือ PostgreSQL ในเครื่อง แค่เปิดโปรแกรม **Docker Desktop** แล้วรันตามขั้นตอนดังนี้:

#### 1. Clone โปรเจกต์ & เข้าโฟลเดอร์

```bash
git clone <your-repository-url>
cd product-store-api
```

#### 2. สั่งรันทั้งระบบ (NestJS API + PostgreSQL)

```bash
docker compose up --build -d
```

> เซิร์ฟเวอร์ API จะเปิดทำงานที่: **`http://localhost:3000`**  
> ฐานข้อมูล PostgreSQL จะเปิดทำงานที่พอร์ต: **`5432`**

#### 3. ซิงก์ตารางใน Database (ทำเฉพาะตอนรันครั้งแรก)

```bash
docker exec -it product_store_api npx prisma db push
```

#### 4. คำสั่งควบคุม Docker ที่มีประโยชน์

```bash
# ดูสถานะของ Container ทั้งหมด
docker compose ps

# ดู Log การทำงานแบบ Real-time (กด Ctrl+C เพื่อออก)
docker compose logs -f

# สั่งหยุดและปิดระบบทั้งหมด
docker compose down
```

---

### 📌 วิธีที่ 2: รันสำหรับพัฒนาโค้ด (Local Development)

สำหรับโปรแกรมเมอร์ที่ต้องการพัฒนาโค้ดและต้องการให้หน้าจอรีโหลดแบบ Real-time (`Hot-Reload`):

```bash
# 1. สั่งเปิดเฉพาะ Database ใน Docker
docker compose up -d postgres

# 2. ติดตั้ง Dependencies (ถ้ายังไม่ได้ลง)
npm install

# 3. รัน NestJS บนเครื่องตัวเองในโหมด Watch
npm run start:dev
```

---

## 📖 API Endpoints Specification

Base URL: `http://localhost:3000`

| HTTP Method | Endpoint        | Description              | Request Body (JSON)                                          | Status Code                |
| :---------- | :-------------- | :----------------------- | :----------------------------------------------------------- | :------------------------- |
| **POST**    | `/products`     | เพิ่มสินค้าใหม่เข้าระบบ  | `{"name": "...", "price": 0, "stock": 0, "category": "..."}` | `201 Created`              |
| **GET**     | `/products`     | ดึงรายการสินค้าทั้งหมด   | _(ไม่มี)_                                                    | `200 OK`                   |
| **GET**     | `/products/:id` | ค้นหาสินค้าตาม ID        | _(ไม่มี)_ Path Param: `:id`                                  | `200 OK` / `404 Not Found` |
| **PATCH**   | `/products/:id` | แก้ไขข้อมูลสินค้าบางส่วน | `{"price": 1500, "stock": 10}`                               | `200 OK` / `404 Not Found` |
| **DELETE**  | `/products/:id` | ลบสินค้าตาม ID           | _(ไม่มี)_ Path Param: `:id`                                  | `200 OK` / `404 Not Found` |

---

## 🧪 ตัวอย่างการทดสอบ API (Request & Response)

### 1. เพิ่มสินค้าใหม่ (`POST /products`)

**Request Body:**

```json
{
  "name": "Mechanical Keyboard RGB",
  "price": 2490,
  "stock": 25,
  "category": "Gaming Gear"
}
```

**Response (`201 Created`):**

```json
{
  "id": 1,
  "name": "Mechanical Keyboard RGB",
  "price": 2490,
  "stock": 25,
  "category": "Gaming Gear",
  "createdAt": "2026-10-21T07:20:00.000Z",
  "updatedAt": "2026-10-21T07:20:00.000Z"
}
```

### 2. ทดสอบ Data Validation (ส่งข้อมูลไม่ครบ)

ถ้าส่ง `POST /products` โดยไม่ใส่ `name` หรือส่ง `price` เป็นตัวหนังสือ:
**Response (`400 Bad Request`):**

```json
{
  "message": [
    "name should not be empty",
    "price must be a number conforming to the specified constraints"
  ],
  "error": "Bad Request",
  "statusCode": 400
}
```

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
product-store-api/
├── docs/                    # เอกสารมาตรฐาน Git Commit Convention
├── prisma/
│   └── schema.prisma        # นิยามตาราง Database (Product Model)
├── src/
│   ├── products/            # Products Module (Controller, Service, DTOs)
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts
│   │   │   └── update-product.dto.ts
│   │   ├── products.controller.ts
│   │   ├── products.module.ts
│   │   └── products.service.ts
│   ├── prisma.service.ts    # Service จัดการการเชื่อมต่อ Prisma Client
│   ├── app.module.ts        # Root Module หลักของแอปพลิเคชัน
│   └── main.ts              # Entry point ของระบบ (Global ValidationPipe)
├── .dockerignore            # กำหนดไฟล์ที่ไม่ต้องก๊อปปี้เข้า Docker
├── Dockerfile               # คู่มือการประกอบ Container สำหรับ NestJS
└── docker-compose.yml       # ควบคุมการทำงานของ NestJS + PostgreSQL
```
