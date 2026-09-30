import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@raverontech.com';
  const password = 'password123';
  
  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email },
  });

  if (existingAdmin) {
    console.log(`Admin user already exists with email: ${email}`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  
  const admin = await prisma.adminUser.create({
    data: {
      name: 'Raveron Admin',
      email: email,
      passwordHash: passwordHash,
      role: 'superadmin',
    },
  });

  console.log('✅ Admin user created successfully:');
  console.log(`   Email: ${admin.email}`);
  console.log(`   Password: ${password}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
