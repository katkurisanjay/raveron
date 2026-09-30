// ─────────────────────────────────────────────────────────────────────────────
// DATABASE CLIENT
// DB functionality is disabled for Vercel static deployment.
// To re-enable: set DATABASE_URL + DIRECT_URL env vars and uncomment below.
// ─────────────────────────────────────────────────────────────────────────────

/*
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}
*/

// Stub — returns safe defaults so pages render without a live DB connection.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const db: any = null;
