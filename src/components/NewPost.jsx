import styles from './NewPost.module.css'
import { useState } from "react"

function NewPost({onCancel, onNewPost}) {

    const [body, setBody] = useState('')
    const [name, setName] = useState('')

    const changeBody = (event) => {
        setBody(event.target.value)
    }

    const changeName = (event) => {
        setName((event.target.value).length > 0 ? `- ${event.target.value}` : '')
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const postData = {
            body: body,
            name: name
        }
        onNewPost(postData)
        onCancel()
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows={3} onChange={changeBody} />
            </p>
            <p>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' required onChange={changeName} />
            </p>
            <div className={styles.actions}>
                <button type='button' onClick={onCancel} >Cancel</button>
                <button type='submit' >Submit</button>
            </div>
        </form>
    )
}

export default NewPost
