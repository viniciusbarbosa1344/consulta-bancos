import { bancos } from '@prisma/client';
import { prismaService } from 'src/main';

export default class FindAllBancosUseCase {
  public async execute(): Promise<bancos[]> {
    const getAllBancos = await prismaService.bancos.findMany();

    return getAllBancos;
  }
}
