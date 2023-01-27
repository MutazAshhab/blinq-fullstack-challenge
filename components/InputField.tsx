import { useState } from "react";
import { classNames, titlecase } from "./utils";

export interface InputFieldProps {
    fieldName: string;
    validator: (userInput: string) => boolean;
    onChangeHandler: (
        fieldName: string,
        fieldValue: string,
        validatorFunction: (userInput: string, defaultValue?: string) => boolean
    ) => void;
}

const InputField = ({ fieldName, validator, onChangeHandler }: InputFieldProps) => {
    const [value, setValue] = useState("");

    const handleChange: (inputValue: string) => void = (inputValue) => {
        setValue(inputValue);
        onChangeHandler(fieldName, inputValue, validator);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ margin: "0 0 5px 0" }}>{titlecase(fieldName)}</p>
            <input
                className={classNames([value.length !== 0 && !validator(value) ? "invalid-input" : "input"])}
                type="text"
                style={{
                    padding: "10px 5px 10px 5px",
                    font: "1.25rem",
                    borderRadius: "6px",
                }}
                spellCheck={false}
                onChange={(event) => handleChange(event.target.value)}
            />
        </div>
    );
};

export default InputField;
