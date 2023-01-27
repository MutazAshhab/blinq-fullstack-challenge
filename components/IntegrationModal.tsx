import { IntegrationPrompt, ModalConfig } from "../integrations/integrationTypes";
import InputField from "./InputField";
import Modal from "./Modal";
import Image from "next/image";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IntegrationModalProps {
    open: boolean;
    config: ModalConfig;
    integrationStatus: boolean;
    closeModal: () => void;
}

const IntegrationModal = ({ open, config, integrationStatus, closeModal }: IntegrationModalProps) => {
    let fields: Map<string, IntegrationPrompt> = new Map();

    const returnValueToParent: (
        fieldName: string,
        fieldValue: string,
        validatorFunction: (userInput: string, defaultValue?: string) => boolean
    ) => void = (fieldName, fieldValue, validatorFunction) => {
        fields.set(fieldName, { fieldName: fieldValue, validatorFunction });
    };

    const onCloseClick: () => void = () => {
        closeModal();
    };

    const onSubmitClick: () => void = () => {
        let arr = Array.from(fields, ([_k, v]) => {
            return v;
        });

        let success = config.submitHandler(arr) && arr.length === config.prompts.length;

        console.log("result of validation (success variable): ", success);

        if (success) {
            console.log("inside success condiitional");

            toast.success(`Successfully synced with ${config.selectionName}`, {
                position: toast.POSITION.TOP_RIGHT,
            });

            closeModal();
        }
    };

    const removeIntegration: () => void = () => {
        console.log("user chose to remove integration");
        return;
    };

    return (
        <Modal open={open}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "15px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Image src={config.logo} alt={config.altText} height={"50px"} width={"50px"}></Image>
                    <span className="modal-close" onClick={onCloseClick}>
                        &times;
                    </span>
                </div>

                {config.selectionDescription && <p>{config.selectionDescription}</p>}

                {!integrationStatus && (
                    <>
                        {config.prompts.map((data, index) => {
                            return (
                                <div key={index}>
                                    <InputField
                                        fieldName={data.fieldName}
                                        validator={data.validatorFunction}
                                        onChangeHandler={returnValueToParent}
                                    />
                                </div>
                            );
                        })}

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "10px",
                            }}
                        >
                            <button className={"standard-button danger"} onClick={onCloseClick}>
                                Close
                            </button>
                            <button className={"standard-button primary"} onClick={onSubmitClick}>
                                Submit
                            </button>
                        </div>
                    </>
                )}

                {integrationStatus && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "10px",
                        }}
                    >
                        <button className={"standard-button primary"} onClick={onCloseClick}>
                            Close
                        </button>
                        <button className={"standard-button danger"} onClick={removeIntegration}>
                            Remove Integration
                        </button>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default IntegrationModal;
