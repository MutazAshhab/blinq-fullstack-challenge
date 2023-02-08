export interface IntegrationData {
    selectionConfig: SelectionConfig;
    modalConfig: ModalConfig;
    integrationStatus: boolean; // true for integrated else not yet integrated
}

export interface SelectionConfig {
    logo: string;
    altText: string;
    selectionName: string;
}

export interface ModalConfig {
    logo: string;
    altText: string;
    selectionName: string;
    selectionDescription?: string;
    prompts: IntegrationPrompt[];
    submitHandler: (inputArr: IntegrationPrompt[]) => boolean;
    containsFieldMappings?: boolean;
}

export interface IntegrationPrompt {
    fieldName: string;
    validatorFunction: (userInput: string) => boolean;
}

export enum IntegrationName {
    SALESFORCE = "SALESFORCE",
    HUBSPOT = "HUBSPOT",
    ZAPIER = "ZAPIER",
    NONE = "NONE",
}
