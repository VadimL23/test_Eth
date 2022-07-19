import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { ContractController } from './controllers/contract.controller';
import { WalletController } from './controllers/wallet.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { Web3Service } from './services/web3.service';
import { ContractService } from './services/contract.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ContractEntity } from './entities/contract.entity';
// import { OrderEntity } from './entities/order.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    // TypeOrmModule.forFeature([ContractEntity, OrderEntity]),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => {
    //     configService.get('database');
    //     console.log(configuration());
    //   },
    // }),
  ],
  controllers: [AppController, ContractController, WalletController],
  providers: [Web3Service, ContractService],
})
export class AppModule {}
