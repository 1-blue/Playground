import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from "@nestjs/common";

import { FindByIdDto } from "#be/dtos/find-by-id.dto";
import { CatsService } from "#be/api/v1/cats/cats.service";
import { CreateCatDto } from "#be/api/v1/cats/dto/create-cat.dto";
import { UpdateCatDto } from "#be/api/v1/cats/dto/update-cat.dto";

@Controller("api/v1/cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(":id")
  findOne(@Param() findByIdDto: FindByIdDto) {
    return this.catsService.findOne(findByIdDto);
  }

  @Patch(":id")
  update(
    @Param() findByIdDto: FindByIdDto,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    return this.catsService.update(findByIdDto, updateCatDto);
  }

  @Delete(":id")
  delete(@Param() findByIdDto: FindByIdDto) {
    return this.catsService.delete(findByIdDto);
  }
}
