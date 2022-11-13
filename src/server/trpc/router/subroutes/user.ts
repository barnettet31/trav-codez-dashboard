import { protectedProcedure, router } from "../../trpc";

export const userRouter = router({
  me: protectedProcedure.query(async ({ ctx }) => {
    const userResponse = await ctx.prisma.user.findFirst({
      where: { id: ctx.session.user.id },
      select: { role: true },
    });

    return userResponse?.role;
  }),
});
