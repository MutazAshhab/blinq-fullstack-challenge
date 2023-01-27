import Image from "next/image";
import { SelectionConfig } from "../integrations/integrationTypes";

export interface SelectionProps {
    selection: SelectionConfig;
    integrationStatus: boolean;
    onButtonClick: () => void;
}

const Selection = ({ selection, integrationStatus, onButtonClick }: SelectionProps) => {
    return (
        <button onClick={onButtonClick} className="selection-button">
            <div
                style={{
                    height: "120px",
                    width: "120px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Image
                    src={selection.logo}
                    alt={selection.altText}
                    height={"70px"}
                    width={"70px"}
                    objectFit="contain"
                    style={{ paddingTop: "5px" }}
                ></Image>
                <p style={{ margin: "0px" }}>{selection.selectionName}</p>
                {integrationStatus && (
                    <p style={{ color: "green", fontWeight: "bold" }}>Already Integrated</p>
                )}
            </div>
        </button>
    );
};

export default Selection;
