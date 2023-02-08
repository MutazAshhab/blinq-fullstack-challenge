import { useState } from "react";
import { FieldMappingEntry } from "./utils";

export interface FieldMappingsProps {}

const FieldMappings = () => {
    const [fieldMappings, setFeildMappings] = useState<FieldMappingEntry[]>([]);

    const handleAdd: () => void = () => {
        setFeildMappings((prevArr) => [...prevArr, {} as FieldMappingEntry]);
    };

    return (
        <>
            <button onClick={handleAdd}>+</button>
            {fieldMappings.map((value, index) => {
                return (
                    <>
                        <p>Enter you field mapping</p>
                        <div key={index} style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
                            <input type="text" style={{ width: "100%" }} />
                            <input type="text" style={{ width: "100%" }} />
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default FieldMappings;
