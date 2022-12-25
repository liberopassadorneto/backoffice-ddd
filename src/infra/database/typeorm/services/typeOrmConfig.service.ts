import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import {
  DefaultOptionsProps,
  DefaultOptionsService,
} from '@infra/database/typeorm/typeorm.service';
import { constants } from '../entitiesPaths';

type ChatboosterOptionsProps = DefaultOptionsProps;

@Injectable()
export class ChatboosterOptionsService implements TypeOrmOptionsFactory {
  constructor(private configService:  ) {}


}
