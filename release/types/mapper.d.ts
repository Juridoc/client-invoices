/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import { Entity } from './entity';
/**
 * Invoices mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load the invoice that corresponds to the specified invoice Id.
     * @param id Invoice Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the invoice entity.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * List all invoices that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the invoice list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all invoices that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of invoices.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
}
