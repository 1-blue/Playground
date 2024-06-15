import { Injectable } from "@nestjs/common";
import { initTRPC } from "@trpc/server";

@Injectable()
export class TrpcService {
  public trpc;
  public publicProcedure;
  public router;

  public loggedProcedure;

  constructor() {
    this.trpc = initTRPC.create();
    this.publicProcedure = this.trpc.procedure;
    this.router = this.trpc.router;

    this.loggedProcedure = this.publicProcedure.use(async (opts) => {
      const start = Date.now();

      const [input, result] = await Promise.all([
        opts.getRawInput(),
        opts.next(),
      ]);

      const durationMs = Date.now() - start;
      const meta = { path: opts.path, type: opts.type, input, durationMs };

      if (result.ok) console.log("✅ Success", meta);
      else console.error("🚫 Error", meta);

      return result;
    });
  }
}
