import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(completed?: string): Promise<Task[]> {
    const query: { completed?: boolean } = {};
    if (completed !== undefined) {
      query.completed = completed === 'true';
    }
    return this.taskRepository.find({
      where: query,
      order: { id: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  async create(task: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  async update(id: number, task: Partial<Task>): Promise<Task> {
    await this.taskRepository.update(id, task);
    const updatedTask = await this.findOne(id);
    return updatedTask;
  }

  async remove(id: number): Promise<void> {
    const task = await this.findOne(id);
    await this.taskRepository.delete(id);
  }
}
