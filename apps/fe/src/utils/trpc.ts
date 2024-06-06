import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "#be/api/v0/trpc/trpc.router";

export const trpc = createTRPCReact<AppRouter>();
