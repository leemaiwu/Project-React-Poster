import styles from './Post.module.css'
import { Link } from 'react-router-dom'

function Post({id, name, body}) {

    return (
        <li className={styles.card}>
            <Link to={id}>
                <p className={styles.text}>{body}</p>
                <p className={styles.name}>{name}</p>
            </Link>
        </li>
    )
}

export default Post
