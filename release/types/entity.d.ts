/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from './types';
import * as Internals from './internals';
/**
 * Invoice entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Invoice Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Service Id.
     */
    serviceId: string;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Last update date.
     */
    updatedAt?: Date;
    /**
     * Recurrence.
     */
    recurrence: Types.Recurrence;
    /**
     * Total price.
     */
    total: number;
    /**
     * Payment details.
     */
    payment: Internals.Payment;
    /**
     * NFSe details.
     */
    nfse: Internals.NFSe;
}
