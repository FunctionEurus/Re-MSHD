import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '现在来试试做个MSHD吧!';
  }
}
