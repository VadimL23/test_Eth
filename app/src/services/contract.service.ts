import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Web3Service } from './web3.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { ContractEntity } from '../entities/contract.entity';

@Injectable()
export class ContractService {
  private eth: any;
  private contract: any;
  private stringHolder: any;
  private address = this.configService.get('web3')['contractAddress'];
  private abi: any;
  constructor(
    @InjectRepository(ContractEntity)
    private readonly contractRepository: Repository<ContractEntity>,
    private configService: ConfigService,
    private readonly web3: Web3Service, //  private connection: Connection,
  ) {
    // this.web3Instance.eth.getAccounts(console.log);
    try {
      this.abi = JSON.parse(this.configService.get('web3')['contractAbi']);
    } catch (e) {
      console.log(e);
    }
    this.contract = new this.web3.web3Instance.eth.Contract(
      this.abi,
      this.address,
    );
    // this.stringHolder = this.contract.at(this.address);
  }

  async getOwner() {
    return await this.contract.methods.owner().call();
  }

  async getOrderId(id: number) {
    return await this.contract.methods.getOrderId(id).call();
  }

  async getOrderIdLength() {
    return await this.contract.methods.getOrderIdLength().call();
  }

  async getOrderInfo(id: string) {
    const result = await this.contract.methods.getOrderInfo(id).call();
    return JSON.parse(result);
  }

  async getUserOrderIds(from: number, length: number) {
    //   const length = await this.getOrderIdLength();
    //   let orderRaw: Promise<any>[] = [];
    //   for (let i = 1; i < length - 1; i++) {
    //     orderRaw.push(this.getOrderId(i));
    //   }
    //   let ids = Promise.all(orderRaw).then((res) => {
    //     console.log(res);
    //     return res;
    //   });
    //   return this.getOrderId(1);
    // }

    const result = await this.contract.methods.getUserOrderIds(from, length);
    console.log(result);
    return result;
  }

  findAll(): Promise<ContractEntity[]> {
    return this.contractRepository.find();
  }

  findOne(id: string): Promise<ContractEntity> {
    return this.contractRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.contractRepository.delete(id);
  }
}
