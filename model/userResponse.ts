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


export interface UserResponse { 
    /**
     * User Id
     */
    userId: string;
    /**
     * First name
     */
    firstName: string;
    /**
     * Middle name
     */
    middleName: string | null;
    /**
     * Last name
     */
    lastName: string;
    /**
     * User email
     */
    email: string;
    /**
     * User mobile phone number, including country code
     */
    mobileNumber: string;
    /**
     * Org Id
     */
    orgId: string;
    /**
     * Created by
     */
    createdBy: string;
    /**
     * Updated by
     */
    updatedBy: string | null;
    /**
     * Created at.
     */
    createdAt: string;
    /**
     * Updated at.
     */
    updatedAt: string | null;
    /**
     * Role codenames associated with user.
     */
    roles: Array<UserResponse.RolesEnum>;
    /**
     * A list of sites associated with this user.
     */
    assignedSites: Array<string>;
}
export namespace UserResponse {
    export type RolesEnum = 'GA' | 'OA' | 'SA' | 'M' | 'O' | 'W' | 'SM';
    export const RolesEnum = {
        Ga: 'GA' as RolesEnum,
        Oa: 'OA' as RolesEnum,
        Sa: 'SA' as RolesEnum,
        M: 'M' as RolesEnum,
        O: 'O' as RolesEnum,
        W: 'W' as RolesEnum,
        Sm: 'SM' as RolesEnum
    };
}


