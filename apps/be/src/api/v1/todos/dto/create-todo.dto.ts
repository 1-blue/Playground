import {
  IsOptional,
  IsNotEmpty,
  IsUUID,
  IsString,
  IsBoolean,
} from "class-validator";

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
  @IsBoolean({ message: "할일 이름은 불리언 형태만 가능합니다." })
  gender?: boolean;
}
