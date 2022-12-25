import { BillingRepository } from '@app/domain/chatbooster/repositories/billing.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmBillingRepository implements BillingRepository {
  constructor(private typeOrmService: Type) {}
}
