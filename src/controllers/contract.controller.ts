import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Web3Service } from '../services/web3.service';
import { ContractService } from '../services/contract.service';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('Contract API')
@Controller('api/v1/contract')
export class ContractController {
  constructor(
    private readonly web3: Web3Service,
    private readonly contract: ContractService,
  ) {}

  @Get('ballance/:id')
  async getBallance(@Param('id') address: string) {
    return this.web3.getBalance(address);
  }

  @Get('/owner')
  async getOwner() {
    return this.contract.getOwner();
  }

  @Get('/OrderId/:id')
  async getOrderId(@Param('id') orderId: number) {
    return this.contract.getOrderId(orderId);
  }

  @Get('/OrderIdLength')
  async getOrderIdLength() {
    return this.contract.getOrderIdLength();
  }

  @Get('/getOrderInfo/:orderId')
  async getOrderInfo(@Param('orderId') orderId: string) {
    return this.contract.getOrderInfo(orderId);
  }

  @Post('/order/store/:orderId')
  async setOrderToDB(@Param('orderId') orderId: number) {
    return;
  }

  @Get('/getAllOrderIds')
  async getOrderAllOrderIds(
    @Query('from') from: number,
    @Query('length') length: number,
  ) {
    return this.contract.getUserOrderIds(from, length);
  }
}
