import React from "react";

const useEscapeKey = (setToasts) => {
    React.useEffect(() => {
        const handleEcsape = (e) => {
            if (e.key !== 'Escape') return;
            setToasts([]);
        }
        window.addEventListener('keydown', handleEcsape);
        return () => {
            window.removeEventListener('keydown', handleEcsape);
        }
    }, [setToasts])
}

export default useEscapeKey