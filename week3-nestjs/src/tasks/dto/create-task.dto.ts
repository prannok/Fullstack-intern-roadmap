import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string; // 👈 ต้องเป็นข้อความ และห้ามปล่อยว่าง!
  @IsString()
  @IsOptional()
  description?: string; // 👈 เป็นข้อความ และใส่หรือไม่ใส่ก็ได้ (Optional)
}
