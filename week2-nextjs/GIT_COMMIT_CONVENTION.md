# 📌 Git Commit Message Convention (มาตรฐานการเขียน Commit)

เอกสารฉบับนี้กำหนดมาตรฐานการเขียน Commit Message ตามหลัก **Conventional Commits** เพื่อให้ประวัติการแก้ไขโค้ดอ่านง่าย เป็นระเบียบ และทำงานร่วมกับทีมได้อย่างมีประสิทธิภาพ

---

## 🎯 โครงสร้างของ Commit Message

```text
<type>(<scope>): <description>
```

- **`type`** (บังคับ): ประเภทของการแก้ไข (เช่น `feat`, `fix`, `docs`)
- **`scope`** (ไม่บังคับ): ขอบเขตของโมดูลหรือไฟล์ที่แก้ไข (เช่น `user`, `auth`, `ui`)
- **`description`** (บังคับ): คำอธิบายสั้นๆ ภาษาอังกฤษหรือภาษาไทย เริ่มด้วยตัวพิมพ์เล็ก ไม่ต้องใส่จุด `.` ปิดท้าย

---

## 🏷️ ประเภทของ Commit (Type Definitions)

| Type           | ความหมาย                                                   | ตัวอย่างการใช้งาน                                 |
| :------------- | :--------------------------------------------------------- | :------------------------------------------------ |
| **`feat`**     | เพิ่มฟีเจอร์ใหม่ (New Feature)                             | `feat: add user registration form`                |
| **`fix`**      | แก้ไขบั๊กหรือข้อผิดพลาด (Bug Fix)                          | `fix: resolve null pointer crash in user service` |
| **`docs`**     | แก้ไขเอกสาร หรือ README (Documentation)                    | `docs: update setup guide in README.md`           |
| **`style`**    | ปรับแต่งรูปแบบโค้ด (เว้นวรรค, ย่อหน้า) ที่ไม่มีผลกับ Logic | `style: format code according to prettier rules`  |
| **`refactor`** | ปรับโครงสร้างโค้ดให้อ่านง่าย/กระชับ โดยไม่เปลี่ยนการทำงาน  | `refactor: simplify calculateDiscount function`   |
| **`test`**     | เพิ่มหรือแก้ไข Unit Test / Integration Test                | `test: add test cases for auth controller`        |
| **`chore`**    | ปรับแต่งไฟล์ตั้งค่า หรือ อัปเดตแพ็กเกจ (Config / Build)    | `chore: update package.json dependencies`         |
| **`perf`**     | ปรับปรุงประสิทธิภาพ (Performance Improvement)              | `perf: optimize database query execution time`    |

---

## 💡 ตัวอย่างการเขียนที่ดี (Good Examples)

```bash
# 1. การเพิ่มฟีเจอร์ใหม่
git commit -m "feat: add user login API with JWT"
git commit -m "feat(auth): implement Google OAuth login"

# 2. การแก้ไขบั๊ก
git commit -m "fix: resolve form submission error on mobile"
git commit -m "fix(payment): correct calculation of VAT tax"

# 3. การอัปเดตเอกสารหรือไฟล์ตั้งค่า
git commit -m "docs: add API spec to README.md"
git commit -m "chore: add .env.example file"
```

---

## ❌ ข้อควรระวัง (Bad Practices)

- ❌ `git commit -m "update"` _(กว้างเกินไป ไม่รู้ว่าทำอะไร)_
- ❌ `git commit -m "fix bug"` _(ไม่ระบุว่าแก้บั๊กจุดไหน)_
- ❌ `git commit -m "asdfghjk"` _(ไม่มีความหมาย)_
- ❌ รวมการแก้หลายๆ เรื่องที่ไม่เกี่ยวกันไว้ใน commit เดียว _(ควรแยก commit ทีละเรื่องสั้นๆ)_
