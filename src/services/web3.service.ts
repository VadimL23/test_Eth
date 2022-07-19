import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Web3 from 'web3';

@Injectable()
export class Web3Service {
  _web3Instance: Web3;
  private contract: any;
  private stringHolder: any;
  constructor(private configService: ConfigService) {
    this._web3Instance = new Web3(
      new Web3.providers.HttpProvider(this.configService.get('web3')['rpcUrl']),
    );
  }

  get web3Instance() {
    return this._web3Instance;
  }

  async getBlockNumber(): Promise<number> {
    return await this.web3Instance.eth.getBlockNumber();
  }

  async getBlock(id: number) {
    return await this.web3Instance.eth.getBlock(id);
  }

  async getBalance(address: string): Promise<string> {
    return this.web3Instance.utils.fromWei(
      await this.web3Instance.eth.getBalance(address),
    );
  }

  async getTransaction(transactionHash: string) {
    return await this.web3Instance.eth.getTransaction(transactionHash);
  }

  static isValidAddress(address: string): boolean {
    return Web3.utils.isAddress(address);
  }

  // async
}
