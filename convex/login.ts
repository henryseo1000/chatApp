import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const authentication = mutation({
  args: {
    userId: v.string(),
    userPw: v.string()
  },
  handler: async (ctx, args) => {
    const verifyId = await ctx.db.query("users")
    .filter((q) => 
      q.eq(q.field("user_id"), args.userId)
    )
    .filter((q) => 
      q.eq(q.field("user_pw"), args.userPw)
    )
    .collect();

    return verifyId.length >= 1 ? true : false;
  },
});

export const signUp = mutation({
    args: {
      userId: v.string(),
      userPw: v.string()
    },
    handler: async (ctx, args) => {
      await ctx.db.insert("users", {
        user_id: args.userId,
        user_pw: args.userPw,
      });
    },
});

export const isValidId = mutation({
  args: {
    userId: v.string()
  },
  handler: async (ctx, args) => {
    const verifyId = await ctx.db.query("users")
    .filter((q) => 
      q.eq(q.field("user_id"), args.userId)
    )
    .collect();

    return verifyId.length >= 1 ? false : true;
  },
})