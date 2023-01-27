import { useState } from "react";
import { classNames, titlecase } from "./utils";

export interface InputFieldProps {
    fieldName: string;
    defaultValue?: string;
    validator: (userInput: string, defaultValue?: string) => boolean;
    onChangeHandler: (
        fieldName: string,
        fieldValue: string,
        validatorFunction: (userInput: string, defaultValue?: string) => boolean,
        defaultValue?: string
    ) => void;
}

const InputField = ({ fieldName, validator, onChangeHandler, defaultValue }: InputFieldProps) => {
    const [value, setValue] = useState(defaultValue ? defaultValue : "");

    const handleChange: (inputValue: string) => void = (inputValue) => {
        setValue(inputValue);
        onChangeHandler(fieldName, inputValue, validator, defaultValue);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ margin: "0 0 5px 0" }}>{titlecase(fieldName)}</p>
            <input
                className={classNames([
                    value.length !== 0 && !validator(value, defaultValue) ? "invalid-input" : "input",
                ])}
                type="text"
                style={{
                    padding: "10px 5px 10px 5px",
                    font: "1.25rem",
                    borderRadius: "6px",
                }}
                spellCheck={false}
                onChange={(event) => handleChange(event.target.value)}
                defaultValue={defaultValue}
            />
        </div>
    );
};

export default InputField;
