import { Injectable } from '@nestjs/common';

@Injectable()
export class M2Service {
  getHello(): string {
    return 'Green_Api';
  }
}
