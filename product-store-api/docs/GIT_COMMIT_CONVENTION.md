# 📝 Git Commit Message Convention

เอกสารนี้คือกฎมาตรฐานการเขียน Git Commit Message (Conventional Commits) สำหรับใช้ในโปรเจกต์ เพื่อความเรียบร้อย อ่านง่าย และติดตามประวัติการแก้ไขโค้ดได้อย่างมีประสิทธิภาพ

---

## 📌 รูปแบบโครงสร้าง (Commit Format)

```text
<type>(<scope>): <short description>
```

- **type:** ชนิดของการเปลี่ยนแปลง (บังคับระบุ)
- **scope:** ขอบเขตของโมดูลหรือไฟล์ที่แก้ไข (ใส่หรือไม่ใส่ก็ได้)
- **short description:** คำอธิบายสั้นๆ ภาษาอังกฤษหรือไทย (อธิบายว่าทำอะไรไป)

---

## 🏷️ ประเภทของ Commit Types

| Prefix Type | ความหมาย / วัตถุประสงค์ | ตัวอย่างการใช้งาน |
| :--- | :--- | :--- |
| **`feat`** | เพิ่มฟีเจอร์ใหม่ (New Feature) | `feat(product): add create product endpoint` |
| **`fix`** | แก้ไขบั๊ก (Bug Fix) | `fix(auth): fix token expiration issue` |
| **`docs`** | แก้ไขหรือเพิ่มเอกสาร (Documentation) | `docs: add git commit convention guide` |
| **`style`** | ปรับแต่งรูปแบบโค้ด (Formatting, Space, Semi-colon) | `style: format code with prettier` |
| **`refactor`** | ปรับปรุงโครงสร้างโค้ดโดยไม่เปลี่ยนการทำงาน | `refactor(product): simplify prisma query logic` |
| **`test`** | เพิ่มหรือแก้ไข Unit Test / E2E Test | `test(product): add test cases for product service` |
| **`chore`** | งานตั้งค่าระบบ, Build Config, ติดตั้ง Package | `chore: setup docker compose and prisma ORM` |

---

## ✅ ตัวอย่างการเขียน Commit Message ที่ถูกต้อง

### 1. การเพิ่มฟีเจอร์ใหม่ (feat)
```bash
git commit -m "feat(product): implement create product CRUD API"
```

### 2. การตั้งค่าเครื่องมือโปรเจกต์ (chore)
```bash
git commit -m "chore: setup nestjs project with docker and prisma"
```

### 3. การแก้ไขบั๊ก (fix)
```bash
git commit -m "fix(validation): fix validation pipe error for price field"
```

### 4. การอัปเดตเอกสาร (docs)
```bash
git commit -m "docs: update README with API specification"
```

---

## 💡 ข้อแนะนำเพิ่มเติม
- เขียนสรุปสั้นๆ กระชับ ได้ใจความ
- ใช้คำกริยาแสดงการกระทำ (เช่น `add`, `fix`, `update`, `implement`, `remove`)
- พยายามแยก Commit เป็นก้อนเล็กๆ ตามแต่ละฟีเจอร์ ไม่ควรดองโค้ดไว้เยอะๆ แล้ว Commit ทีเดียว
