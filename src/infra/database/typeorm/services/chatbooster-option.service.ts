import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

@Injectable()
export class DefaultOptions {
  constructor(private configService: ConfigService) {}

  getDatabaseProviders() {
    return [
      {
        provide: 'CHATBOOSTER_CONNECTION',
        useFactory: async () => {
          const dataSource = new DataSource({
            name: 'CHATBOOSTER_CONNECTION',
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
          });

          return dataSource.initialize();
        },
      },
    ];
  }
}
