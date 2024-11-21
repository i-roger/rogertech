import React from "react";

type propTypes = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<propTypes> = ({open, onClose, children}) => {

    return (
    <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible" : "invisible"}`}
    onClick={onClose}>
        <div className={`bg-white w-full h-full rounded-lg shadow p-6 transition-all max-w-md
        ${open ? "translate-y-0 ease-in-out overflow-y-" : "translate-y-full ease-in-out "}`}
        onClick={(e)=> e.stopPropagation()}>
            <button
            className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
            onClick={onClose}>
                X
            </button>
            {children}
        </div>
    </div>
)
}

export default Modal;