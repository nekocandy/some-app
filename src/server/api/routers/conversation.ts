import { Wit } from "node-wit";
import { z } from "zod";

import { env } from "~/env.mjs";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const witClient = new Wit({
  accessToken: env.WIT_ACCESS_TOKEN,
});

export const conversationRouter = createTRPCRouter({
  message: publicProcedure
    .input(z.object({ message: z.string() }))
    .mutation(async ({ input }) => {
      const reply = await witClient.message(input.message, {});

      if (
        reply.intents.length > 0 &&
        reply.intents[0]?.name === "book_appointment"
      ) {
        return {
          intent: "book_appointment",
          values: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            time: reply.entities["wit$datetime:datetime"][0].value,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            location: reply.entities["wit$location:location"][0].value,
          },
        };
      }
    }),
});
