import { Replace } from '@helpers/Replace';
import { randomUUID } from 'node:crypto';

export interface BillingProps {
  domain: string;
  amountOfDays: number;
  updatedAt?: Date | null;
  createdAt: Date;
}

export class Billing {
  private _id: string;
  private props: BillingProps;

  constructor(
    props: Replace<BillingProps, { amountOfDays?: number; createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();

    this.props = {
      ...props,
      amountOfDays: props.amountOfDays ?? 14,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get domain(): string {
    return this.props.domain;
  }

  public set domain(domain: string) {
    this.props.domain = domain;
  }

  public get amountOfDays(): number {
    return this.props.amountOfDays;
  }

  public set amountOfDays(amountOfDays: number) {
    this.props.amountOfDays = amountOfDays;
  }

  public get createdAt(): Date | null | undefined {
    return this.props.createdAt;
  }

  public get updatedAt(): Date | null | undefined {
    return this.props.updatedAt;
  }

  public updateDate() {
    this.props.updatedAt = new Date();
  }
}
