import { IntegrationPrompt } from "./integrationTypes";

/**
 * SALESFORCE
 */

export const salesforceClientIdValidator: (userInput: string) => boolean = (userInput: string) => {
    return userInput === "valid";
};

export const salesforceClientSecretValidator: (userInput: string) => boolean = (userInput: string) => {
    return userInput === "valid";
};

export const salesforceSubmitHandler: (inputArr: IntegrationPrompt[]) => boolean = (
    inputArr: IntegrationPrompt[]
) => {
    let valid = true;

    inputArr.forEach((prompt: IntegrationPrompt, _index: number) => {
        const val = prompt.fieldName;
        const validator = prompt.validatorFunction;
        valid = valid && validator(val);
    });

    return valid;
};

/**
 * ZAPIER
 */

export const zapierApiKeyValidator: (userInput: string) => boolean = (userInput: string) => {
    return userInput === "valid";
};

export const zapierSubmitHandler: (inputArr: IntegrationPrompt[]) => boolean = (
    inputArr: IntegrationPrompt[]
) => {
    let valid = true;

    inputArr.forEach((prompt: IntegrationPrompt, _index: number) => {
        const val = prompt.fieldName;
        const validator = prompt.validatorFunction;
        valid = valid && validator(val);
    });

    return valid;
};

/**
 * HUBSPOT
 */

export const hubspotTenantDomainValidator: (userInput: string) => boolean = (userInput: string) => {
    return userInput === "valid";
};
export const hubspotClientIdValidator: (userInput: string) => boolean = (userInput: string) => {
    return userInput === "valid";
};
export const hubspotClientSecretValidator: (userInput: string) => boolean = (userInput: string) => {
    return userInput === "valid";
};
export const hubspotFieldMappingsValidator: (userInput: string) => boolean = (userInput: string) => {
    return userInput === "valid";
};

export const hubspotSubmitHandler: (inputArr: IntegrationPrompt[]) => boolean = (
    inputArr: IntegrationPrompt[]
) => {
    let valid = true;

    inputArr.forEach((prompt: IntegrationPrompt, _index: number) => {
        const val = prompt.fieldName;
        const validator = prompt.validatorFunction;
        valid = valid && validator(val);
    });

    return valid;
};
