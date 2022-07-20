/* eslint-disable no-process-env */
import * as dotenv from 'dotenv';
import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy';

dotenv.config();
dotenv.config({ path: '.env' });

(() => console.log('adas'))();

export default {
  type: 'mysql',
  host: process.env.TEST_MYSQL_HOST,
  port: parseInt(process.env.TEST_MYSQL_PORT),
  username: process.env.TEST_MYSQL_USERNAME,
  password: process.env.TEST_MYSQL_PASSWORD,
  database: process.env.TEST_MYSQL_DATABASE,
  synchronize: true,
  dropSchema: true,
  entities: ['./dist/entities/**/*.js'],
  cli: {
    entitiesPath: 'src/entities',
  },
  namingStrategy: new SnakeNamingStrategy(),
};
