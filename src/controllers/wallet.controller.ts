import { Controller, Get, Param } from '@nestjs/common';
import { Web3Service } from '../services/web3.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Wallet API')
@Controller('api/v1/contract')
export class WalletController {
  constructor(private readonly web3: Web3Service) {}

  @Get('ballance/:id')
  async getBallance(@Param('id') address: string) {
    return this.web3.getBalance(address);
  }
}
