import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// 배포 단계에서는 new PrismaClient()만 있어도 되지만,
// 개발 단계에서는 Hot Reload 할 때마다 Client가 생성된다.
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
