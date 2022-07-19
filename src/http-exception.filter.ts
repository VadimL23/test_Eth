import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { CommonResponse } from './interfaces/common.interface';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status = exception.getStatus();
    const jsonResponse: CommonResponse<string | object> = {
      success: false,
      message: exception.message,
      data: exception.getResponse(),
      timestamp: new Date().toISOString(),
    };
    response.status(status).json(jsonResponse);
  }
}
