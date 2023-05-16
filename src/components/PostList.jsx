import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'
import styles from './PostList.module.css'
import { useState, useEffect } from 'react'

function PostList({onFinishPost, isPosting}) {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true)
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json()
            setPosts(resData.posts)
            setLoading(false)
        }

        fetchPosts()
    }, [])

    const addPostHandler = (postData) => {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setPosts((existingPost) => [postData, ...existingPost])
    }

    return (
        <div>
            {isPosting && 
                <Modal onClose={onFinishPost}>
                    <NewPost 
                        onCancel={onFinishPost}
                        onNewPost={addPostHandler} 
                    />
                </Modal>
            }
            {!loading && posts.length > 0 &&
                <ul className={styles.container}>
                    {posts.map((item, index) => 
                        <Post body={item.body} name={item.name} key={index} />
                    )}
                </ul>
            }
            {!loading && posts.length == 0 &&
                <div style={{marginTop: '50px', textAlign: 'center', color: 'white'}}>
                    <h2>There are No Posts Yet</h2>
                    <p>Start adding some!</p>
                </div>
            }
            {loading && 
                <div style={{marginTop: '50px', textAlign: 'center', color: 'white'}}>
                <p>Loading posts...</p>
                </div>
            }
        </div>
    )
}

export default PostList
