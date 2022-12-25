import { NotFoundException } from '@nestjs/common';

export class BillingNotFoundError extends NotFoundException {
  constructor() {
    super('Billing not found');
  }
}
