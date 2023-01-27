import { IntegrationName, IntegrationData } from "./integrationTypes";

// salesforce validator function
import {
    salesforceClientIdValidator,
    salesforceClientSecretValidator,
    salesforceSubmitHandler,
} from "./validatorFunctions";

// hubspot validator function
import {
    hubspotTenantDomainValidator,
    hubspotClientIdValidator,
    hubspotClientSecretValidator,
    hubspotFieldMappingsValidator,
    hubspotSubmitHandler,
} from "./validatorFunctions";

// zapier validator function
import { zapierApiKeyValidator, zapierSubmitHandler } from "./validatorFunctions";

export type Integration = {
    id: IntegrationName;
    data: IntegrationData;
};

export const integrations = [
    {
        id: IntegrationName.SALESFORCE,
        data: {
            selectionConfig: {
                logo: "/salesforce-logo.png",
                altText: "Salesforce logo",
                selectionName: "Salesforce",
            },
            modalConfig: {
                logo: "/salesforce-logo.png",
                altText: "Salesforce logo",
                selectionName: "Salesforce",
                selectionDescription: "Description for the salesforce integration",
                prompts: [
                    {
                        fieldName: "client_id",
                        validatorFunction: salesforceClientIdValidator,
                    },
                    {
                        fieldName: "client_secret",
                        validatorFunction: salesforceClientSecretValidator,
                    },
                ],
                submitHandler: salesforceSubmitHandler,
            },
            integrationStatus: false,
        } as IntegrationData,
    },
    {
        id: IntegrationName.HUBSPOT,
        data: {
            selectionConfig: {
                logo: "/hubspot-logo.png",
                altText: "HubSpot logo",
                selectionName: "HubSpot",
            },
            modalConfig: {
                logo: "/hubspot-logo.png",
                altText: "HubSpot logo",
                selectionName: "HubSpot",
                selectionDescription: "Description for the Hubspot integration",
                prompts: [
                    {
                        fieldName: "tenant_domain",
                        validatorFunction: hubspotTenantDomainValidator,
                    },
                    {
                        fieldName: "client_id",
                        validatorFunction: hubspotClientIdValidator,
                    },
                    {
                        fieldName: "client_secret",
                        validatorFunction: hubspotClientSecretValidator,
                    },
                    {
                        fieldName: "field_mappings",
                        defaultValue: "hello world",
                        validatorFunction: hubspotFieldMappingsValidator,
                    },
                ],
                submitHandler: hubspotSubmitHandler,
            },
            integrationStatus: false,
        } as IntegrationData,
    },
    {
        id: IntegrationName.ZAPIER,
        data: {
            selectionConfig: {
                logo: "/zapier-logo.png",
                altText: "Zapier logo",
                selectionName: "Zapier",
            },
            modalConfig: {
                logo: "/zapier-logo.png",
                altText: "Zapier logo",
                selectionName: "Zapier",
                selectionDescription: "Description for the Zapier integration",
                prompts: [{ fieldName: "api_key", validatorFunction: zapierApiKeyValidator }],
                submitHandler: zapierSubmitHandler,
            },
            integrationStatus: true,
        } as IntegrationData,
    },
];
