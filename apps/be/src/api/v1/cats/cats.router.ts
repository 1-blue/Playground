import { Injectable } from "@nestjs/common";
import { z } from "zod";

import { TrpcService } from "#be/api/v0/trpc/trpc.service";
import { CatsService } from "#be/api/v1/cats/cats.service";

@Injectable()
export class CatsRouter {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly catsService: CatsService,
  ) {}

  router = this.trpcService.router({
    /** 고양이 생성 */
    create: this.trpcService.publicProcedure
      .input(
        z.object({
          id: z.string().optional(),
          name: z.string(),
          age: z.number(),
          gender: z.boolean().optional(),
        }),
      )
      .mutation(async ({ input }) => await this.catsService.create(input)),
    /** 단일 고양이 가져오기 */
    getOne: this.trpcService.publicProcedure
      .input(
        z.object({
          id: z.string(),
        }),
      )
      .query(async ({ input }) => await this.catsService.findOne(input)),
    /** 모든 고양이 가져오기 */
    getAll: this.trpcService.publicProcedure.query(
      async () => await this.catsService.findAll(),
    ),
    /** 단일 고양이 수정하기 */
    updateOne: this.trpcService.publicProcedure
      .input(
        z.object({
          id: z.string(),
          name: z.string().optional(),
          age: z.number().optional(),
          gender: z.boolean().optional(),
        }),
      )
      .mutation(
        async ({ input }) =>
          await this.catsService.update({ id: input.id }, input),
      ),
    /** 단일 고양이 삭제하기 */
    deleteOne: this.trpcService.publicProcedure
      .input(
        z.object({
          id: z.string(),
        }),
      )
      .mutation(
        async ({ input }) => await this.catsService.delete({ id: input.id }),
      ),
  });
}
