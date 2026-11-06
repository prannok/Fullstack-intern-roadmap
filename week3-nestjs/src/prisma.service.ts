import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect(); // 🔌 เชื่อมต่อฐานข้อมูลเมื่อแอปเริ่มรัน
  }

  async onModuleDestroy() {
    await this.$disconnect(); // 🔌 ปิดการเชื่อมต่อเมื่อแอปดับ
  }
}
