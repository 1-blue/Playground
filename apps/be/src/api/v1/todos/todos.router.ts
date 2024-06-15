import { Injectable } from "@nestjs/common";
import { z } from "zod";

import { TrpcService } from "#be/api/v0/trpc/trpc.service";
import { TodosService } from "#be/api/v1/todos/todos.service";
import { TODO_TYPE } from "#be/constrants";

@Injectable()
export class TodosRouter {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly todosService: TodosService,
  ) {}

  router = this.trpcService.router({
    /** 할일 생성 */
    create: this.trpcService.loggedProcedure
      .input(
        z.object({
          id: z.string().optional(),
          title: z.string(),
          type: z.enum(TODO_TYPE).optional(),
        }),
      )
      .mutation(async ({ input }) => await this.todosService.create(input)),
    /** 모든 할일 가져오기 */
    getAll: this.trpcService.loggedProcedure.query(
      async () => await this.todosService.findAll(),
    ),
    /** 단일 할일 수정하기 */
    updateOne: this.trpcService.loggedProcedure
      .input(
        z.object({
          /** 할 일 식별자 */
          id: z.string(),
          /** 할 일 내용 */
          title: z.string().optional(),
          /**
           * + `TODO`: 할일
           * + `DOING`: 진행중
           * + `DONE`: 완료
           */
          type: z.enum(TODO_TYPE).optional(),
        }),
      )
      .mutation(
        async ({ input }) =>
          await this.todosService.update({ id: input.id }, input),
      ),
    /** 단일 할일 삭제하기 */
    deleteOne: this.trpcService.loggedProcedure
      .input(
        z.object({
          id: z.string(),
        }),
      )
      .mutation(
        async ({ input }) => await this.todosService.delete({ id: input.id }),
      ),
  });
}
