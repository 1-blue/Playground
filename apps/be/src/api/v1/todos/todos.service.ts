import { Injectable } from "@nestjs/common";

import { FindByIdDto } from "#be/dtos/find-by-id.dto";
import { PrismaService } from "#be/api/v0/prisma/prisma.service";
import { CreateTodoDto } from "#be/api/v1/todos/dto/create-todo.dto";
import { UpdateTodoDto } from "#be/api/v1/todos/dto/update-todo.dto";

@Injectable()
export class TodosService {
  constructor(private prismaService: PrismaService) {}

  async create({ ...todo }: CreateTodoDto) {
    return await this.prismaService.todo.create({
      data: todo,
    });
  }

  async findAll() {
    return await this.prismaService.todo.findMany();
  }

  async update({ id }: FindByIdDto, { ...todo }: UpdateTodoDto) {
    return await this.prismaService.todo.update({
      where: { id },
      data: todo,
    });
  }

  async delete({ id }: FindByIdDto) {
    return await this.prismaService.todo.delete({
      where: { id },
    });
  }
}
