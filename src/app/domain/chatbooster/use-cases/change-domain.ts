import { Inject, Injectable } from '@nestjs/common';
import { BillingRepository } from '@app/domain/chatbooster/repositories/billing.repository';
import { BillingNotFoundError } from '@app/domain/chatbooster/use-cases/errors/billing-not-found.error';

interface ChangeDomainRequest {
  currentDomain: string;
  newDomain: string;
}

type ChangeDomainResponse = void;

@Injectable()
export class ChangeDomainUseCase {
  constructor(
    @Inject('BillingRepository') private billingRepository: BillingRepository,
  ) {}

  async execute({
    currentDomain,
    newDomain,
  }: ChangeDomainRequest): Promise<ChangeDomainResponse> {
    const billing = await this.billingRepository.findByDomain(currentDomain);

    if (!billing) {
      throw new BillingNotFoundError();
    }

    billing.domain = newDomain;
    billing.updateDate();

    await this.billingRepository.save(billing);
  }
}
