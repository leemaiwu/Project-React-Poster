import { MdPostAdd, MdMessage } from 'react-icons/md'

import styles from './MainHeader.module.css'

function MainHeader({onCreatePost}) {

    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.logo} >
                    <MdMessage />
                    React Poster
                </h1>
                <p>
                    <button className={styles.button} onClick={onCreatePost}>
                        <MdPostAdd size={19} />
                        New Post
                    </button>
                </p>
            </header>
        </div>
    )
}

export default MainHeader
