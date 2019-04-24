/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Invoices NFSe, entity class.
 */
@RestDB.Schema.Entity('invoices/nfse')
@Class.Describe()
export class NFSe extends Class.Null {
  /**
   * Status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.NFSe.Status))
  @Class.Public()
  public status!: Types.NFSe.Status;

  /**
   * NFSe Id.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public id?: string;

  /**
   * NFSe error.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public error?: string;
}
