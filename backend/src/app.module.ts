import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ClientModule } from './modules/client/client.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [SharedModule, ClientModule],
  controllers: [AppController],
})
export class AppModule {}
