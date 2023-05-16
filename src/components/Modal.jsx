import { useNavigate } from 'react-router-dom'
import styles from './Modal.module.css'

function Modal({children}) {

    const navigate = useNavigate()

    const closeHandler = () => {
        navigate('..')
    }

    return (
        <div>
            <div className={styles.backdrop} onClick={closeHandler} />
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </div>
    )
}

export default Modal
