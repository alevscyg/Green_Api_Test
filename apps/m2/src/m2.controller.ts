import { Controller, Get } from '@nestjs/common';
import { M2Service } from './m2.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
@Controller()
export class M2Controller {
  constructor(private readonly m2Service: M2Service) {}

  @MessagePattern({ cmd: 'M2-SERVICE'})
  async getPersons(@Ctx() context: RmqContext){
    const channel = context.getChannelRef();
    const message = context.getMessage();
    channel.ack(message);

    return await this.m2Service.getHello()
  }
}
