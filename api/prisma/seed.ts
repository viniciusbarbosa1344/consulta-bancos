import { prismaService } from 'src/main';
import bancos from './seed-bancos.json';

async function seedScript() {
  console.log('Populando Banco...');

  const existingCount = await prismaService.bancos.count();
  if (existingCount === 0) {
    await prismaService.bancos.createMany({
      data: bancos.bancos,
      skipDuplicates: true,
    });
    console.log('Banco populado com sucesso.');
  } else {
    console.log('O Banco já contém dados, pulando a população.');
  }
}

seedScript()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaService.$disconnect();
  });
