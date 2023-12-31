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
import { AttributeResponse } from './attributeResponse';


export interface RefreshTokenResponse { 
    /**
     * User ID
     */
    userId: string;
    /**
     * Array of attributes.
     */
    userAttributes: Array<AttributeResponse>;
    /**
     * ID Token
     */
    idToken: string;
    /**
     * Access Token
     */
    accessToken: string;
}

