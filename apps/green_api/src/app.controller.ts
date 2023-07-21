import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
  @Inject('M2_SERVICE') private rabbitM2Service: ClientProxy) {}

  @Get()
  async parsingFilms() {
    return await this.rabbitM2Service.send({
      cmd: 'M2-SERVICE',
    },
    {});

  }
}
