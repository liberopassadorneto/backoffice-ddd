import { InMemoryBillingRepository } from '@test/repositories/in-memory-billing.repository';
import { ChangeDomainUseCase } from './change-domain';
import { makeBilling } from '@test/factories/billing.factory';
import { BillingNotFoundError } from '@app/domain/chatbooster/use-cases/errors/billing-not-found.error';

describe('Change Domain', () => {
  it('should be able to change a domain', async () => {
    const inMemoryBillingRepository = new InMemoryBillingRepository();

    const changeDomainUseCase = new ChangeDomainUseCase(
      inMemoryBillingRepository,
    );

    const billing = makeBilling();

    await inMemoryBillingRepository.create(billing);

    await changeDomainUseCase.execute({
      currentDomain: billing.domain,
      newDomain: 'new-domain@bitrix24.com',
    });

    expect(inMemoryBillingRepository.billings).toHaveLength(1);
    expect(inMemoryBillingRepository.billings[0].domain).toEqual(
      'new-domain@bitrix24.com',
    );
  });

  it('should not be able to change a domain if billing not found', async () => {
    const inMemoryBillingRepository = new InMemoryBillingRepository();

    const changeDomainUseCase = new ChangeDomainUseCase(
      inMemoryBillingRepository,
    );

    await expect(
      changeDomainUseCase.execute({
        currentDomain: 'fake-domain@bitrix24.com.br',
        newDomain: 'new-domain@bitrix24.com',
      }),
    ).rejects.toThrow(BillingNotFoundError);
  });
});
