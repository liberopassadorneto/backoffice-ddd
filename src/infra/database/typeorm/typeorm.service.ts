import { EnvironmentVariables } from '@interfaces/envionment-variables';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { entitiesPaths } from '@infra/database/typeorm/entitiesPaths';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService<EnvironmentVariables>) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get('DB_HOST'),
      username: this.configService.get('DB_USERNAME'),
      password: this.configService.get('DB_PASSWORD'),
      autoLoadEntities: true,
      synchronize: !!this.configService.get('DEV'),
    } as TypeOrmModuleOptions;
  }

  createTypeOrmChatboosterOptions(): TypeOrmModuleOptions {
    const defaultOptions = this.createTypeOrmOptions();

    return {
      ...defaultOptions,
      name: 'chatboosterConnection',
      database: 'chatbooster',
      entities: [entitiesPaths.chatbooster],
    } as TypeOrmModuleOptions;
  }

  // createTypeOrmEsignatureOptions(): TypeOrmModuleOptions {
  //   const defaultOptions = this.createTypeOrmOptions();
  //
  //   return {
  //     ...defaultOptions,
  //     name: 'esignatureConnection',
  //     database: 'esignature',
  //     entities: [constants.esignature],
  //   } as TypeOrmModuleOptions;
  // }

  // createTypeOrmWhatsappOptions(): TypeOrmModuleOptions {
  //   const defaultOptions = this.createTypeOrmOptions();
  //
  //   return {
  //     ...defaultOptions,
  //     name: 'whatsappConnection',
  //     database: 'whatsapp',
  //     entities: [constants.whatsapp],
  //   } as TypeOrmModuleOptions;
  // }
}
