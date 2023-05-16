import styles from './Post.module.css'

function Post({name, body}) {

    return (
        <li className={styles.card}>
            <p className={styles.text}>{body}</p>
            <p className={styles.name}>{name}</p>
        </li>
    )
}

export default Post
