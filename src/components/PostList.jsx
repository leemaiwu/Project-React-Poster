import Post from './Post'
import styles from './PostList.module.css'
import { useLoaderData } from 'react-router-dom'

function PostList() {

    const posts = useLoaderData()

    return (
        <div>
            {posts.length > 0 &&
                <ul className={styles.container}>
                    {posts.map((item) => 
                        <Post body={item.body} id={item.id} name={item.name} key={item.id} />
                    )}
                </ul>
            }
            {posts.length == 0 &&
                <div style={{marginTop: '50px', textAlign: 'center', color: 'white'}}>
                    <h2>There are No Posts Yet</h2>
                    <p>Start adding some!</p>
                </div>
            }
        </div>
    )
}

export default PostList
