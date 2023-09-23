import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ClientModule } from './modules/client/client.module';
import { SharedModule } from './modules/shared/shared.module';
import { ClientAddressModule } from './modules/client-address/client-address.module';

@Module({
  imports: [SharedModule, ClientModule, ClientAddressModule],
  controllers: [AppController],
})
export class AppModule {}
