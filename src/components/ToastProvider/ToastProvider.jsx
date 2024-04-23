/* eslint-disable react/prop-types */
import React from "react"
import useEscapeKey from "../../hooks/useEscapeKey";

export const toastContext = React.createContext();

const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = React.useState([]);
    useEscapeKey(setToasts);

    const addToast = ({ message, variant }) => {
        console.log({ message, variant });
        setToasts(prevToasts => [...prevToasts, { message, variant, id: Math.random() }]);
    }
    const removeToast = (id) => {
        const newToasts = toasts.filter(toast => toast.id !== id)
        setToasts(newToasts);
    }
    const value = React.useMemo(() => ({ toasts, addToast, removeToast }), [toasts]);

    return (
        <toastContext.Provider
            value={value}
        >{children}</toastContext.Provider>
    )
}

export default ToastProvider