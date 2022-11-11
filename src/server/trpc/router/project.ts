import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

export const projectRouter = router({
    postMessage: protectedProcedure
        .input(z.object({
            name: z.string(),
            description: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            try {
                await ctx.prisma.project.create({
                    data: {
                        name: input .name,
                        description: input.description
                    }
                })
            } catch (e) {
                console.log(e);
            }
        }),
    getAll: protectedProcedure.query(async ({ctx})=>{
        try {
            return await ctx.prisma.project.findMany({
                select:{
                    name:true,
                    description:true
                },
                orderBy:{
                    createdAt:"desc"
                }
            })
        } catch (error) {
            console.log(error);
        }
    })

})