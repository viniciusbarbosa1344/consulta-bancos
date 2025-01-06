import { NotFoundException } from '@nestjs/common';
import { bancos } from '@prisma/client';
import { prismaService } from 'src/main';

export default class FindBancoByCodUseCase {
  public async execute(codCompensacao: number): Promise<bancos> {
    let banco: bancos;

    try {
      banco = await prismaService.bancos.findFirstOrThrow({
        where: {
          codigo_de_compensacao: codCompensacao,
        },
      });
    } catch {
      throw new NotFoundException('Banco com codigo fornecido não encontrado');
    }

    return banco;
  }
}
