import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BancosService } from './banco.service';
import { bancos } from '@prisma/client';

@Controller('bancos/')
export class BancosController {
  constructor(private readonly bancosService: BancosService) { }

  @Get()
  public async getBancos(): Promise<bancos[]> {
    return await this.bancosService.getBancos();
  }

  @Get(':id/')
  public async getBancosByCodCompensacao(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<bancos> {
    return await this.bancosService.getBancoByCodCompensacao(id);
  }
}
