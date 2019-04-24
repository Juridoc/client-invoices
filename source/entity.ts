/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from './types';
import * as Internals from './internals';

/**
 * Invoice entity class.
 */
@RestDB.Schema.Entity('invoices')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Invoice Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;
  
  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

  /**
   * Service Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public serviceId!: string;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Last update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Recurrence.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Recurrence))
  @Class.Public()
  public recurrence!: Types.Recurrence;

  /**
   * Total price.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public total!: number;

  /**
   * Payment details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Payment)
  @Class.Public()
  public payment!: Internals.Payment;

  /**
   * NFSe details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.NFSe)
  @Class.Public()
  public nfse!: Internals.NFSe;
}
