import { IntegrationPrompt } from "./integrationTypes";

/**
 * SALESFORCE
 */

export const salesforceClientIdValidator: (userInput: string, defaultValue?: string) => boolean = (
    userInput: string,
    defaultValue?: string
) => {
    return userInput === "valid" || userInput === defaultValue;
};

export const salesforceClientSecretValidator: (userInput: string, defaultValue?: string) => boolean = (
    userInput: string,
    defaultValue?: string
) => {
    return userInput === "valid" || userInput === defaultValue;
};

export const salesforceSubmitHandler: (inputArr: IntegrationPrompt[]) => boolean = (
    inputArr: IntegrationPrompt[]
) => {
    let valid = true;

    inputArr.forEach((prompt: IntegrationPrompt, _index: number) => {
        const val = prompt.fieldName;
        const validator = prompt.validatorFunction;
        valid = valid && validator(val, prompt.defaultValue);
    });

    return valid;
};

/**
 * ZAPIER
 */

export const zapierApiKeyValidator: (userInput: string, defaultValue?: string) => boolean = (
    userInput: string,
    defaultValue?: string
) => {
    return userInput === "valid" || userInput === defaultValue;
};

export const zapierSubmitHandler: (inputArr: IntegrationPrompt[]) => boolean = (
    inputArr: IntegrationPrompt[]
) => {
    let valid = true;

    inputArr.forEach((prompt: IntegrationPrompt, _index: number) => {
        const val = prompt.fieldName;
        const validator = prompt.validatorFunction;
        valid = valid && validator(val, prompt.defaultValue);
    });

    return valid;
};

/**
 * HUBSPOT
 */

export const hubspotTenantDomainValidator: (userInput: string, defaultValue?: string) => boolean = (
    userInput: string,
    defaultValue?: string
) => {
    return userInput === "valid" || userInput === defaultValue;
};
export const hubspotClientIdValidator: (userInput: string, defaultValue?: string) => boolean = (
    userInput: string,
    defaultValue?: string
) => {
    return userInput === "valid" || userInput === defaultValue;
};
export const hubspotClientSecretValidator: (userInput: string, defaultValue?: string) => boolean = (
    userInput: string,
    defaultValue?: string
) => {
    return userInput === "valid" || userInput === defaultValue;
};
export const hubspotFieldMappingsValidator: (userInput: string, defaultValue?: string) => boolean = (
    userInput: string,
    defaultValue?: string
) => {
    return userInput === "valid" || userInput === defaultValue;
};

export const hubspotSubmitHandler: (inputArr: IntegrationPrompt[]) => boolean = (
    inputArr: IntegrationPrompt[]
) => {
    let valid = true;

    inputArr.forEach((prompt: IntegrationPrompt, _index: number) => {
        const val = prompt.fieldName;
        const validator = prompt.validatorFunction;
        valid = valid && validator(val, prompt.defaultValue);
    });

    return valid;
};
