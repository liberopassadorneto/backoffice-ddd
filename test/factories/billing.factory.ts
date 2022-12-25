import {
  Billing,
  BillingProps,
} from '@app/domain/chatbooster/entities/billing.entity';

type OverrideProps = Partial<BillingProps>;

export function makeBilling(override: OverrideProps = {}): Billing {
  return new Billing({
    domain: 'example@bitrix24.com.br',
    ...override,
  });
}
