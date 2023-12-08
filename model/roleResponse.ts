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


export interface RoleResponse { 
    /**
     * Role ID
     */
    roleId: number;
    codeName: ERoles;
    /**
     * Display name
     */
    displayName: string;
    /**
     * Description of the org admin role.
     */
    description: string;
}
export namespace RoleResponse {
}


