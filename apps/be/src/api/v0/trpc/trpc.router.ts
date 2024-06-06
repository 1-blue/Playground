import { INestApplication, Injectable } from "@nestjs/common";
import * as trpcExpress from "@trpc/server/adapters/express";

import { TrpcService } from "#be/api/v0/trpc/trpc.service";
import { CatsRouter } from "#be/api/v1/cats/cats.router";
import { TodosRouter } from "#be/api/v1/todos/todos.router";

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly catsRouter: CatsRouter,
    private readonly todosRouter: TodosRouter,
  ) {}

  appRouter = this.trpc.router({
    cats: this.catsRouter.router,
    todos: this.todosRouter.router,
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/api/v0/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      }),
    );
  }
}

export type AppRouter = TrpcRouter[`appRouter`];
