import { BillingRepository } from '@app/domain/chatbooster/repositories/billing.repository';
import { Billing } from '@app/domain/chatbooster/entities/billing.entity';
import { BillingNotFoundError } from '@app/domain/chatbooster/use-cases/errors/billing-not-found.error';

export class InMemoryBillingRepository implements BillingRepository {
  public billings: Billing[] = [];

  async findByDomain(domain: string): Promise<Billing | null> {
    const billing = this.billings.find((item) => item.domain === domain);

    if (!billing) {
      return null;
    }

    return billing;
  }

  async create(billing: Billing): Promise<void> {
    this.billings.push(billing);
  }

  async save(billing: Billing): Promise<void> {
    const billingIndex = this.billings.findIndex(
      (item) => item.domain === billing.domain,
    );

    if (billingIndex === -1) {
      throw new BillingNotFoundError();
    }

    this.billings[billingIndex] = billing;
  }
}
