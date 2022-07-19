/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Application')
@Controller()
export class AppController {
  @Get('healthz')
  @HttpCode(200)
  healthz(): void {}
}
