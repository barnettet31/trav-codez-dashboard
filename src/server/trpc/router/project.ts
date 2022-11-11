import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

export const projectRouter = router({
  postProject: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session?.user?.id;
      try {
        await ctx.prisma.project.create({
          data: {
            creator: {
              connect: {
                id: userId,
              },
            },
            name: input.name,
            description: input.description,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }),
  getAll: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.project.findMany({
        select: {
          name: true,
          description: true,
          bugs: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
});
