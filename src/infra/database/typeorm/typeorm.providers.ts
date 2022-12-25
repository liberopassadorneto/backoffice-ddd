import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from '@infra/database/typeorm/typeorm.service';

export const typeormProviders = [
  TypeOrmModule.forRootAsync({
    name: 'chatboosterConnection',
    useFactory: (typeOrmService: TypeOrmService) => ({
      ...typeOrmService.createTypeOrmChatboosterOptions(),
    }),
    inject: [TypeOrmService],
  }),
];
