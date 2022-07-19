import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy';

export default () => ({
  web3: {
    rpcUrl: process.env.WEB3_RPC_ENDPOINT,
    contractAddress: process.env.CONTRACT_ADDRESS,
    contractAbi: process.env.CONTRACT_ABI,
  },
  server: {
    port: parseInt(process.env.TEST_SERVER_PORT),
    host: process.env.TEST_SERVER_HOST,
  },
  database: {
    type: 'mysql',
    host: process.env.TEST_MYSQL_HOST,
    port: parseInt(process.env.TEST_MYSQL_PORT),
    username: process.env.TEST_MYSQL_USERNAME,
    password: process.env.TEST_MYSQL_PASSWORD,
    database: process.env.TEST_MYSQL_DATABASE,
    autoLoadEntities: true,
    namingStrategy: new SnakeNamingStrategy(),
  },
});
