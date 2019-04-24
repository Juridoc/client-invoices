/*!
 * Copyright (C) 2018-2019 Juridoc
 */

/**
 * Payment status types.
 */
export enum Status {
  Waiting = 'waiting',
  Cancelled = 'canceled',
  Authorized = 'authorized',
  Captured = 'captured',
  Refused = 'refused',
  Error = 'error'
}
