/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Invoices payment, entity class.
 */
export declare class Payment extends Class.Null {
    /**
     * Payment type.
     */
    type: Types.Payment.Common;
    /**
     * Payment status.
     */
    status: Types.Payment.Status;
    /**
     * Payment card Id.
     */
    cardId?: string;
    /**
     * Payment order Id.
     */
    orderId?: string;
    /**
     * Payment transaction Id.
     */
    transactionId?: string;
    /**
     * Payment link.
     */
    link?: string;
    /**
     * Payment error.
     */
    error?: string;
}
