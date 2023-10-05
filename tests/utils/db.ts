import prisma from '$prisma/client';

export const reset = async () => {
  if (process.env.NODE_ENV !== 'test') throw new Error('resetDb() should only be used in test environment');
  const dbUrl = process.env.DATABASE_URL!;
  const isTest = dbUrl.includes('localhost')
    || dbUrl.includes('supabase.co');
  if (!isTest) throw new Error('resetDb() should only be used with a local database');
  // const modelKeys = Object.keys(prisma).filter(key => !key.startsWith('$'));
  // const models = modelKeys.map(key => prisma[key]);
  const tablenames = await prisma.$queryRaw<Array<{ tablename: string }>>`SELECT tablename FROM pg_tables WHERE schemaname='public'`;
  const tables = tablenames
    .map(({ tablename }) => tablename)
    .filter(name => !name.startsWith('_'))
    .map((name) => `"public"."${name}"`)
    .join(', ');
  await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tables} CASCADE;`);
};
