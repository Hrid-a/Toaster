/* eslint-disable react/prop-types */
import styles from './VisuallyHidden.module.css';
const VisuallyHidden = ({ children, ...delegated }) => {
    return (
        <div className={styles.wrapper} {...delegated}>
            {children}
        </div>
    )
}

export default VisuallyHidden