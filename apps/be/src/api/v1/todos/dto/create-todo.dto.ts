import {
  IsOptional,
  IsNotEmpty,
  IsUUID,
  IsString,
  IsEnum,
} from "class-validator";
import { Transform } from "class-transformer";
import type { TodoType } from "@prisma/client";

import { TODO_TYPE } from "#be/constrants";

export class CreateTodoDto {
  @IsOptional()
  @IsUUID(undefined, {
    message: "할일 식별자는 UUID 형태만 입력이 가능합니다.",
  })
  id?: string;

  @IsNotEmpty({ message: "할일 이름은 필수값입니다." })
  @IsString({ message: "할일 이름은 문자열 형태만 가능합니다." })
  title: string;

  @IsOptional()
  @IsEnum(TODO_TYPE, { message: "유효하지 않은 할일 유형입니다." })
  @Transform(({ value }) => value.toUpperCase())
  type?: TodoType = "TODO";
}
