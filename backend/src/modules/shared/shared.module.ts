import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { redisStore } from 'cache-manager-redis-store';
import type { RedisClientOptions } from 'redis';

import { AppEnvironment } from './enums/app-environment';
import { PrismaGateway } from './gateways/prisma.gateway';
import { SecretsProviders } from './providers/secrets.provider';
import { DispatchEventService } from './services/dispatch-event/dispatch-event.service';
import { SecretService } from './services/secret/secret.service';

const SharedProviders = [
  ...SecretsProviders,
  PrismaGateway,
  DispatchEventService,
];

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.registerAsync<RedisClientOptions>({
      isGlobal: true,
      inject: [
        AppEnvironment.redisHost,
        AppEnvironment.redisPort,
        AppEnvironment.redisPassword,
      ],
      useFactory: async (redisHost, redisPort, redisPassword) => {
        const store = await redisStore({
          socket: {
            host: redisHost,
            port: +redisPort,
          },
          password: redisPassword,
        });

        return {
          store: {
            create: () => store as unknown as CacheStore,
          },
        };
      },
    }),
  ],
  providers: [...SharedProviders, SecretService],
  exports: [...SharedProviders],
})
export class SharedModule {}
