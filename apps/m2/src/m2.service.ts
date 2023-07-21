import { Injectable } from '@nestjs/common';

@Injectable()
export class M2Service {
  async getHello() {
    return await 'Green_Api';
  }
}
