/* eslint-disable react/prop-types */

import React from 'react';
import Toast from '../Toast';
import { toastContext } from '../ToastProvider/ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
    const { toasts, removeToast } = React.useContext(toastContext);
    if (!toasts.length) return;
    return (
        (<ol className={styles.wrapper}
            role='region'
            aria-live='polite'
            aria-label='notifications'
        >
            {toasts.map(({ variant, message, id }) => (<li key={id} className={styles.toastWrapper}>
                <Toast variant={variant} onClick={() => removeToast(id)}>{message}</Toast>
            </li>))}
        </ol>)

    );
}

export default React.memo(ToastShelf);