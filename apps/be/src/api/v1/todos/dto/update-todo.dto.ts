import { PartialType } from "@nestjs/mapped-types";

import { CreateTodoDto } from "#be/api/v1/todos/dto/create-todo.dto";

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
