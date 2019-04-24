/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Invoices payment, entity class.
 */
@RestDB.Schema.Entity('invoices/payment')
@Class.Describe()
export class Payment extends Class.Null {
  /**
   * Payment type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Payment.Common))
  @Class.Public()
  public type!: Types.Payment.Common;

  /**
   * Payment status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Payment.Status))
  @Class.Public()
  public status!: Types.Payment.Status;

  /**
   * Payment card Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public cardId?: string;

  /**
   * Payment order Id.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public orderId?: string;

  /**
   * Payment transaction Id.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public transactionId?: string;

  /**
   * Payment link.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public link?: string;

  /**
   * Payment error.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public error?: string;
}
