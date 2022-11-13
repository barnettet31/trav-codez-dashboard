import { router } from "../trpc";
import { authRouter } from "./auth";
import { projectRouter } from "./project";
import { userRouter } from "./subroutes/user";

export const appRouter = router({
  projects: projectRouter,
  auth: authRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
