/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Invoices NFSe, entity class.
 */
export declare class NFSe extends Class.Null {
    /**
     * Status.
     */
    status: Types.NFSe.Status;
    /**
     * NFSe Id.
     */
    id?: string;
    /**
     * NFSe error.
     */
    error?: string;
}
