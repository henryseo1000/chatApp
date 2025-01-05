import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const authentication = mutation({
    args: {
      userId: v.string(),
      userPw: v.string(),
    },
    handler: async (ctx, args) => {
      await ctx.db.insert("users", {
        userId: args.userId,
        userPw: args.userPw,
      });
    },
});

