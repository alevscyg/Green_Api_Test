import { Module } from '@nestjs/common';
import { M2Controller } from './m2.controller';
import { M2Service } from './m2.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./apps/m2/.${process.env.NODE_ENV}.env`,
      isGlobal:true
    }),
  ],
  controllers: [M2Controller],
  providers: [M2Service],
})
export class M2Module {}
