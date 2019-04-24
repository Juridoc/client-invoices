/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Invoice creation request.
 */
@RestDB.Schema.Entity('invoices')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Service Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public serviceId!: string;

  /**
   * Card Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public cardId?: string;

  /**
   * Recurrence.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Recurrence))
  @Class.Public()
  public recurrence!: Types.Recurrence;
}
