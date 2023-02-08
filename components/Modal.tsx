import { ReactNode } from "react";

export interface ModalProps {
    open: boolean;
    children?: ReactNode;
}

const Modal = ({ open, children }: ModalProps) => {
    if (!open) {
        return <></>;
    }

    const classNamesArr = ["modal"];
    classNamesArr.push(open ? "modal-open" : "modal-closed");

    const modalClassName = classNamesArr.join(" ");

    return (
        <div className={modalClassName} style={{ overflowY: "scroll" }}>
            <div className="modal-content">{children}</div>
        </div>
    );
};

export default Modal;
