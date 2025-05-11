import React from "react";

type propTypes = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<propTypes> = ({open, onClose, children}) => {

    return (
    <div className={`z-20 fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible" : "invisible"}`}
    onClick={onClose}>
        <div className={`bg-[#ededed] w-full h-full rounded-lg shadow p-6 transition-all duration-700
        ${open ? "translate-y-0 ease-in-out overflow-auto" : "translate-y-full ease-in-out "}`}
        onClick={(e)=> e.stopPropagation()}>
            <button
            className="absolute top-2 right-2 py-2 px-4 border border-neutral-200 rounded-md text-[#73ff63] bg-[#2f2e41] hover:bg-[#504e6e]"
            onClick={onClose}>
                X
            </button>
            {children}
        </div>
    </div>
)
}

export default Modal;