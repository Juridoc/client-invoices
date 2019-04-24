/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Invoice creation request.
 */
export declare class Create extends Class.Null {
    /**
     * Service Id.
     */
    serviceId: string;
    /**
     * Card Id.
     */
    cardId?: string;
    /**
     * Recurrence.
     */
    recurrence: Types.Recurrence;
}
