/**
 * ManageSpace Auth API
 * ManageSpace Auth API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ERoles } from './eRoles';


export interface CreateAdminRequest { 
    /**
     * User first name
     */
    firstName: string;
    /**
     * User last name
     */
    lastName: string;
    /**
     * Middle initial
     */
    middleInitial?: string;
    /**
     * User email
     */
    email: string;
    /**
     * User mobile phone number, including country code
     */
    mobileNumber?: string;
    /**
     * Password
     */
    password: string;
    /**
     * Role codenames associated with user.
     */
    roles: Array<ERoles>;
    /**
     * Optional array of site ids for the specific organization.
     */
    sites?: Array<string>;
}

