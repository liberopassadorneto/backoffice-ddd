import { Billing } from '../entities/billing.entity';

export abstract class BillingRepository {
  abstract create(billing: Billing): Promise<void>;
  abstract findByDomain(domain: string): Promise<Billing | null>;
  abstract save(billing: Billing): Promise<void>;
}
