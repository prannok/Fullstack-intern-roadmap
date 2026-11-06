# 🚀 Fullstack Intern Roadmap & Learning Tracker

> **Prompt Context for AI Agent:**
> เอกสารนี้เป็น Roadmap ฝึกงาน Fullstack Developer ระยะเวลา 4 สัปดาห์ (TypeScript, Next.js, NestJS, PostgreSQL, Docker) พร้อม Checkbox สถานะการเรียนรู้ ใช้สำหรับระบุความคืบหน้า (Progress Tracking), ปรึกษาข้อสงสัย, ขอตัวอย่างโค้ด, หรือให้ AI ช่วย Code Review ในแต่ละหัวข้อและ Assignment

---

## 📊 Overall Progress Summary

- [x] **Week 1:** TypeScript + Git & GitHub Basics `(100%)`
- [ ] **Week 2:** Next.js Fundamentals + Data Handling (Frontend Only) `(0%)`
- [ ] **Week 3:** NestJS + PostgreSQL (API CRUD) `(0%)`
- [ ] **Week 4:** Docker + System Integration `(0%)`

---

## 📅 Week 1: TypeScript + Git & GitHub Basics

### 🎯 เป้าหมายสัปดาห์นี้

- [x] มีพื้นฐานภาษา TypeScript (Types, Variables, Functions, Interfaces, Classes)
- [x] เข้าใจการทำงาน Asynchronous (Promise, async/await)
- [x] ใช้คำสั่ง Git พื้นฐานได้อย่างถูกต้อง
- [x] เข้าใจ Git Branching Strategy และ GitHub Workflow (Pull Request)

### 📚 สิ่งที่ต้องเรียนรู้ (Learning Checklist)

- [x] **TypeScript Fundamentals**
  - [x] Variables & Primitive Types (`string`, `number`, `boolean`, `any`, `unknown`)
  - [x] Functions, Parameters, and Return Types
  - [x] Interfaces & Type Aliases (Optional `?`, Readonly properties)
  - [x] Classes & OOP Basics
  - [x] Asynchronous JavaScript/TypeScript (`Promise`, `async/await`, `try/catch`)
- [x] **Git & GitHub Essentials**
  - [x] Git Commands: `git init`, `git clone`, `git status`, `git add`, `git commit`, `git push`, `git pull`
  - [x] Branching: `git branch`, `git checkout -b`, `git merge`
  - [x] GitHub Workflow: Forking, Remote tracking, Open Pull Request (PR), Code Review

### 🧪 Assignment Week 1

- [x] **TypeScript Console App**
  - [x] รับ input: ชื่อ + อายุ
  - [x] พิมพ์ Output: `"สวัสดี [ชื่อ] อายุ [อายุ] ปี"`
  - [x] กำหนดโครงสร้างข้อมูลด้วย `interface`
- [x] **GitHub Repository Setup**
  - [x] สร้าง repo ชื่อ `ts-basic`
  - [x] สร้าง branch `dev` พัฒนาโค้ดและ push ขึ้น remote
  - [x] สร้าง Pull Request (PR) จาก branch `dev` ไปยัง `main`

---

## 📅 Week 2: Next.js Fundamentals + Data Handling (Frontend Only)

### 🎯 เป้าหมายสัปดาห์นี้

- [ ] เข้าใจสถาปัตยกรรม Next.js (App Router)
- [ ] แยกแยะและเลือกใช้ Server Component / Client Component ได้เหมาะสม
- [ ] จัดการ Client State และ Lifecycle ได้แม่นยำ
- [ ] จัดการ Data Fetching States ครบถ้วน (Loading, Skeleton, Empty, Error, Success)
- [ ] ใช้งาน shadcn/ui Component Library ได้
- [ ] ทำ Lazy Loading (Code Splitting) และ Pagination / Infinite Load ได้

### 📚 สิ่งที่ต้องเรียนรู้ (Learning Checklist)

- [x] **Next.js App Router Structure**
  - [x] โครงสร้างไดเรกทอรี `/app` (`layout.tsx`, `page.tsx`)
  - [x] File-based Routing & Nested Routes (e.g. `/about`, `/counter`, `/users`, `/post`)
  - [x] Server Components (Default) vs Client Components (`"use client"`)
- [x] **React State & Data Lifecycle**
  - [x] React Hooks: `useState`, `useEffect`
  - [ ] Global State Management: `Zustand` (ทางเลือกเสริม)
  - [x] Data States: `loading` → `success` / `error`
- [x] **UI & UX with shadcn/ui**
  - [x] ติดตั้งและตั้งค่า shadcn/ui ในโปรเจกต์
  - [x] ใช้งาน Components: `Button`, `Card`, `Skeleton` (Table, Badge เรียนในสเต็ปถัดไป)
- [x] **Performance & Optimization**
  - [x] Component Lazy Loading ด้วย `next/dynamic` พร้อม fallback Skeleton
  - [x] Pagination & Infinite Scroll / Load More Pattern (เรียนรู้แล้วจาก /tasks)

### 🧪 Assignments Week 2

- [x] **Assignment 1: Users Page (`/users`)**
  - [x] Fetch ข้อมูลจาก Mock API (เช่น `https://jsonplaceholder.typicode.com/users`)
  - [x] รองรับ Loading State
  - [x] รองรับ Error State
  - [x] รองรับ Empty State
  - [x] รองรับ Success State แสดงรายชื่อผู้ใช้
- [x] **Assignment 2: Dashboard UI with shadcn/ui**
  - [x] ปรับปรุงหน้า `/users` ด้วย Card Layout และ Table ของ shadcn/ui
  - [x] มีปุ่ม Refresh ข้อมูล
  - [x] แทนที่ข้อความ Loading ด้วย Skeleton Loading UI
- [x] **Assignment 3: Tasks Page with Pagination (`/tasks`)**
  - [x] โหลดรายการ 10 รายการแรก
  - [x] มีปุ่ม "Load More" หรือ Scroll pagination
  - [x] แสดง Skeleton append ตอนดึงข้อมูลเพิ่ม
- [x] **Assignment 4: Dashboard Page with Lazy Loading (`/dashboard`)**
  - [x] มี Heavy Component (เช่น กราฟ Chart)
  - [x] โหลดแบบ Dynamic Import (`next/dynamic`) พร้อม Skeleton Fallback
- [x] **Final Assignment Week 2: Mini Dashboard Integration**
  - [x] รวมหน้า `/users`, `/tasks`, `/dashboard` เข้าด้วยกันอย่างสมบูรณ์

---

## 📅 Week 3: NestJS + PostgreSQL (Backend REST API CRUD)

### 🎯 เป้าหมายสัปดาห์นี้

- [ ] เข้าใจสถาปัตยกรรม NestJS (Modules, Controllers, Services, Dependency Injection)
- [ ] ออกแบบและสร้าง RESTful API ครบ CRUD
- [ ] เชื่อมต่อฐานข้อมูล PostgreSQL ผ่าน ORM (TypeORM หรือ Prisma)
- [ ] เข้าใจ Schema Design, Entity Modeling, และ Database Migrations

### 📚 สิ่งที่ต้องเรียนรู้ (Learning Checklist)

- [ ] **NestJS Core Concepts**
  - [ ] Modules (`@Module`)
  - [ ] Controllers (`@Controller`, HTTP Methods: `@Get`, `@Post`, `@Put`, `@Patch`, `@Delete`)
  - [ ] Services & Providers (`@Injectable`)
  - [ ] DTO (Data Transfer Object) & Validation (`class-validator`, `class-transformer`)
- [ ] **Database & ORM**
  - [ ] PostgreSQL Database connection & Configuration (`@nestjs/config`, `.env`)
  - [ ] TypeORM หรือ Prisma: Entities, Schema, Relations
  - [ ] Migrations & Database Seeding

### 🧪 Assignment Week 3

- [ ] **NestJS Tasks CRUD API (`nestjs-tasks`)**
  - [ ] สร้าง NestJS Project ใหม่
  - [ ] เชื่อมต่อฐานข้อมูล PostgreSQL จริง (Local DB หรือ Docker container)
  - [ ] พัฒนา API Endpoints:
    - [ ] `GET /tasks` → ดึงรายการ Tasks ทั้งหมด
    - [ ] `POST /tasks` → เพิ่ม Task ใหม่
    - [ ] `PUT /tasks/:id` (หรือ `PATCH`) → แก้ไขข้อมูล Task
    - [ ] `DELETE /tasks/:id` → ลบ Task
  - [ ] เขียนเอกสาร `README.md` อธิบาย API Specification และขั้นตอนการรันโปรเจกต์

---

## 📅 Week 4: Docker + System Integration

### 🎯 เป้าหมายสัปดาห์นี้

- [ ] เข้าใจหลักการ Containerization (Images, Containers, Volumes, Networks)
- [ ] เขียน `Dockerfile` เพื่อ containerize NestJS Backend Application
- [ ] ใช้ `docker-compose.yml` รวม NestJS + PostgreSQL ให้รันพร้อมกันได้ด้วยคำสั่งเดียว
- [ ] จัดการ Environment Variables (`.env`) ปลอดภัยตาม Best Practices

### 📚 สิ่งที่ต้องเรียนรู้ (Learning Checklist)

- [ ] **Docker Core Concepts**
  - [ ] Image vs Container, Docker Hub
  - [ ] Docker CLI: `docker build`, `docker run`, `docker ps`, `docker logs`, `docker exec`
  - [ ] Docker Volumes (Data Persistence) & Docker Networks
- [ ] **Dockerizing Backend**
  - [ ] Multi-stage Dockerfile สำหรับ Node.js / NestJS (Build vs Production run)
  - [ ] `.dockerignore` setup
- [ ] **Docker Compose Orchestration**
  - [ ] สร้าง `docker-compose.yml`
  - [ ] กำหนด Service dependencies, ports mapping, environment variables, healthchecks

### 🧪 Assignment Week 4

- [ ] **Containerization & Integration**
  - [ ] เขียน `Dockerfile` สำหรับ `nestjs-tasks`
  - [ ] เขียน `docker-compose.yml` ผูก NestJS Service เข้ากับ PostgreSQL Service
  - [ ] ทดสอบรันด้วยคำสั่ง `docker compose up --build` แล้วทดสอบ API ที่ `http://localhost:<PORT>`
  - [ ] จัดการ `.env.example` และ `.env` สำหรับ Production/Development
  - [ ] อัปเดต `README.md` สรุปคำสั่งและขั้นตอนการรันระบบทั้งหมดด้วย Docker

---

## 🎓 Final Evaluation Checklist (เกณฑ์สำเร็จหลักสูตร 4 สัปดาห์)

| ทักษะ / ขอบเขตงาน           | สถานะ | หมายเหตุ                                                                    |
| :-------------------------- | :---: | :-------------------------------------------------------------------------- |
| **Git & GitHub Workflow**   |  [ ]  | สร้าง branch, PR, merge ได้อย่างถูกต้อง                                     |
| **TypeScript Proficiency**  |  [ ]  | ใช้งาน Types, Interfaces, Async/Await คล่องแคล่ว                            |
| **Next.js (App Router)**    |  [ ]  | แยก Server/Client component, จัดการ Loading/Skeleton/Error state ได้สมบูรณ์ |
| **NestJS REST API**         |  [ ]  | สร้าง CRUD API ที่มี Validation และ Architecture ถูกต้อง                    |
| **PostgreSQL & ORM**        |  [ ]  | ออกแบบ Entity, เชื่อมต่อ DB, Query และ Migration ได้                        |
| **Docker & Docker Compose** |  [ ]  | รันทั้งระบบ (Backend + DB) ขึ้นพร้อมกันได้ด้วยคำสั่งเดียว                   |

---

> 💡 **คำแนะนำในการคุยกับ AI:**
> เมื่อต้องการให้ AI ช่วยเหลือ ให้ก๊อปปี้หัวข้อหรือทำเครื่องหมาย `[x]` ที่เรียนจบแล้ว แล้วบอก AI เช่น:
> _"ตอนนี้ฉันกำลังทำ Week 2 ในส่วน Assignment 2 (shadcn/ui Skeleton) ช่วยตรวจโค้ดส่วนนี้ให้หน่อย..."_
