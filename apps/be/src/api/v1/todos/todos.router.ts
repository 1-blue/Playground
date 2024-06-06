import { Injectable } from "@nestjs/common";
import { z } from "zod";

import { TrpcService } from "#be/api/v0/trpc/trpc.service";
import { TodosService } from "#be/api/v1/todos/todos.service";

@Injectable()
export class TodosRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly todosService: TodosService,
  ) {}

  router = this.trpc.router({
    /** 할일 생성 */
    create: this.trpc.procedure
      .input(
        z.object({
          id: z.string().optional(),
          title: z.string(),
          completed: z.boolean().optional(),
        }),
      )
      .mutation(async ({ input }) => await this.todosService.create(input)),
    /** 모든 할일 가져오기 */
    getAll: this.trpc.procedure.query(
      async () => await this.todosService.findAll(),
    ),
    /** 단일 할일 수정하기 */
    updateOne: this.trpc.procedure
      .input(
        z.object({
          id: z.string(),
          title: z.string().optional(),
          completed: z.boolean().optional(),
        }),
      )
      .mutation(
        async ({ input }) =>
          await this.todosService.update({ id: input.id }, input),
      ),
    /** 단일 할일 삭제하기 */
    deleteOne: this.trpc.procedure
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
