import React from 'react';
import styles from './ToastPlayground.module.css';
import imgSrc from '../../assets/toast.png';
import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';
import { toastContext } from '../ToastProvider/ToastProvider';


const VARIANT_OPTIONS = [
    'notice',
    'success',
    'warning',
    'error',
]
const ToastPlayground = () => {
    const [message, setMessage] = React.useState('');
    const [variant, setVariant] = React.useState('notice');
    const { addToast } = React.useContext(toastContext);
    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src={imgSrc} />
                <h1>Toast Playground</h1>
            </header>
            <ToastShelf />

            <div className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: 'baseline' }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id="message"
                            className={styles.messageInput}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    {VARIANT_OPTIONS.map((item) => {
                        return (
                            <>
                                <div
                                    className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                                    key={item}
                                >
                                    <label htmlFor={`variant-${item}`}>
                                        <input
                                            id={`variant-${item}`}
                                            type="radio"
                                            name="variant"
                                            value={item}
                                            checked={item === variant}
                                            onChange={(e) => setVariant(e.target.value)}
                                        />
                                        {item}
                                    </label>
                                </div >
                            </>
                        )
                    })}

                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button
                            onClick={() => addToast({ message, variant })}
                        >Pop Toast!</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToastPlayground