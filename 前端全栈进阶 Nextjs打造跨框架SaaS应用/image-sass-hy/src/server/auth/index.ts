import { db } from "@/server/db/db";
import { AuthOptions, getServerSession as nextAuthGetServerSession } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import GitlabProvider from "next-auth/providers/gitlab";
import type { Adapter } from "next-auth/adapters";

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
  // Configure one or more authentication providers
  providers: [
    GitlabProvider({
      clientId: "e4795ccd22d2221f7a4e6bc96680bd1ff9f743a061536a77919ca2b918d918b6",
      clientSecret: "gloas-477471d7cbdbcfb63b4e49261536ce66b41c95498674a0aa5263d65bc56c1279",
    }),
  ],
};

export function getServerSession() {
  return nextAuthGetServerSession(authOptions);
}
