import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { PrismaService } from '../prisma.service.js';

export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  async create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: createTaskDto.title,
        description: createTaskDto.description,
        completed: false,
      },
    });
  }

  async findAll() {
    return this.prisma.task.findMany();
  }

  async findByCompleted(completed: boolean) {
    return this.prisma.task.findMany({ where: { completed } });
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });
    if (!task) {
      throw new NotFoundException(`ไม่พบงานที่มี ID: ${id}`);
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async remove(id: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) {
      throw new NotFoundException(`ไม่พบงานที่มี ID: ${id}`);
    }
    await this.prisma.task.delete({ where: { id } });
    return { message: `ลบงาน ID: ${id} สำเร็จ` };
  }
}
