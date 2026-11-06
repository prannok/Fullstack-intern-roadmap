# 🚀 NestJS Tasks Management REST API

> RESTful API สำหรับระบบจัดการ Tasks พัฒนาด้วย NestJS, Prisma ORM, PostgreSQL และจัดสภาพแวดล้อมการรันด้วย Docker Compose

---

## 🛠️ Tech Stack

- **Framework:** NestJS (TypeScript)
- **Database:** PostgreSQL 15
- **ORM:** Prisma ORM 6
- **Validation:** Class Validator + ValidationPipe
- **Containerization:** Docker & Docker Compose

---

## ⚡ Quick Start & Docker Commands (วิธีรันและคำสั่ง Docker)

ไม่ต้องติดตั้ง PostgreSQL หรือ Node.js ในเครื่องล่วงหน้า สามารถจัดการทั้งระบบด้วย Docker Compose ได้ตามขั้นตอนดังนี้:

### 1. เปิดระบบ (Start System)
```bash
docker compose up --build -d
```
> เซิร์ฟเวอร์จะเปิดทำงานที่: **`http://localhost:3000`**

### 2. ซิงก์ตารางใน Database (ทำเฉพาะรันครั้งแรก)
```bash
docker exec -it week3_nestjs_api npx prisma db push
```

### 3. ดู Log การทำงานเวลาโปรแกรมมีปัญหา (View Logs)
```bash
docker compose logs -f
```

### 4. ปิดระบบเมื่อใช้งานเสร็จ (Stop System)
```bash
docker compose down
```

---

## 📖 API Endpoints Specification

Base URL: `http://localhost:3000`

| HTTP Method | Endpoint        | Description (รายละเอียด)    | Request Body / Query Param                                    | Status Code                |
| :---------- | :-------------- | :-------------------------- | :------------------------------------------------------------ | :------------------------- |
| **POST**    | `/tasks`        | สร้าง Task ใหม่             | `Body (JSON):` `{"title": "string", "description": "string"}` | `201 Created`              |
| **GET**     | `/tasks`        | ดึงรายการ Task ทั้งหมด      | -                                                             | `200 OK`                   |
| **GET**     | `/tasks/search` | ค้นหา Task ตามสถานะ         | `Query:` `?completed=true` หรือ `?completed=false`            | `200 OK`                   |
| **GET**     | `/tasks/:id`    | ดึงข้อมูล Task รายตัวตาม ID | `Path Param:` `:id` (เช่น `/tasks/1`)                         | `200 OK` / `404 Not Found` |
| **PATCH**   | `/tasks/:id`    | อัปเดตข้อมูล Task ตาม ID    | `Body (JSON):` `{"completed": true}`                          | `200 OK` / `404 Not Found` |
| **DELETE**  | `/tasks/:id`    | ลบข้อมูล Task ตาม ID        | `Path Param:` `:id` (เช่น `/tasks/1`)                         | `200 OK` / `404 Not Found` |

---

## 🧪 ตัวอย่างการทดสอบยิง API (Example Request)

### 1. สร้าง Task ใหม่ (POST `/tasks`)

```json
{
  "title": "เรียนรู้ Docker Compose",
  "description": "ทดสอบยิง API ผ่าน Container"
}
```

### 2. ค้นหา Task ที่เสร็จแล้ว (GET `/tasks/search?completed=true`)

```http
GET http://localhost:3000/tasks/search?completed=true
```

---

## 📁 Project Structure

```text
week3-nestjs/
├── prisma/
│   └── schema.prisma        # นิยามตาราง Database และ Model
├── src/
│   ├── tasks/               # Tasks Module (Controller, Service, DTO)
│   ├── prisma.service.ts    # Service เชื่อมต่อ Prisma Client
│   └── main.ts              # Entry point ของแอปพลิเคชัน (ValidationPipe)
├── Dockerfile               # คู่มือประกอบ Container ของ NestJS
└── docker-compose.yml       # ตัวควบคุมการรัน NestJS + PostgreSQL พร้อมกัน
```
