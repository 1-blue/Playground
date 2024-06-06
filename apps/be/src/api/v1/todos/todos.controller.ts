import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from "@nestjs/common";

import { TodosService } from "#be/api/v1/todos/todos.service";
import { CreateTodoDto } from "#be/api/v1/todos/dto/create-todo.dto";
import { UpdateTodoDto } from "#be/api/v1/todos/dto/update-todo.dto";
import { FindByIdDto } from "#be/dtos/find-by-id.dto";

@Controller("/api/v1/todos")
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Patch(":id")
  update(
    @Param("id") { id }: FindByIdDto,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.update({ id }, updateTodoDto);
  }

  @Delete(":id")
  remove(@Param("id") { id }: FindByIdDto) {
    return this.todosService.delete({ id });
  }
}
