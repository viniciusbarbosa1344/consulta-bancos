import { Injectable } from '@nestjs/common';
import FindAllBancosUseCase from './use-cases/find-all-bancos.usecase';
import FindBancoByCodUseCase from './use-cases/find-banco-by-cod.usecase';

@Injectable()
export class BancosService {
  constructor(
    private readonly findAllBancoUseCase: FindAllBancosUseCase,
    private readonly findBancoByCodUseCase: FindBancoByCodUseCase,
  ) {}

  public async getBancos() {
    return await this.findAllBancoUseCase.execute();
  }

  public async getBancoByCodCompensacao(codCompensacao: number) {
    return await this.findBancoByCodUseCase.execute(codCompensacao);
  }
}
