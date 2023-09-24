import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ClientAddressModule } from './modules/client-address/client-address.module';
import { ClientModule } from './modules/client/client.module';
import { CupcakeModule } from './modules/cupcake/cupcake.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [SharedModule, ClientModule, ClientAddressModule, CupcakeModule],
  controllers: [AppController],
})
export class AppModule {}
