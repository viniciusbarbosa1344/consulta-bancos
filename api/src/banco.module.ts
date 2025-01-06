import { Module } from '@nestjs/common';
import { BancosController } from './banco.controller';
import { BancosService } from './banco.service';
import FindAllBancosUseCase from './use-cases/find-all-bancos.usecase';
import FindBancoByCodUseCase from './use-cases/find-banco-by-cod.usecase';

@Module({
  imports: [],
  controllers: [BancosController],
  providers: [BancosService, FindAllBancosUseCase, FindBancoByCodUseCase],
})
export class BancosModule {}
