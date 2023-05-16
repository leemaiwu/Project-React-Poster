import styles from './Modal.module.css'

function Modal({children}) {

    return (
        <div>
            <div className={styles.backdrop} />
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </div>
    )
}

export default Modal
