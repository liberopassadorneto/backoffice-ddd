import { Billing } from './billing.entity';

describe('BillingEntity', () => {
  it('should be able to create a new billing', () => {
    const billing = new Billing({
      domain: 'test@bitrix.com.br',
      amountOfDays: 14,
    });

    expect(billing).toBeTruthy();
  });
});
