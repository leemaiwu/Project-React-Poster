import { useState } from "react"
import { Link } from "react-router-dom"

import styles from './NewPost.module.css'
import Modal from '../components/Modal'

function NewPost({onNewPost}) {

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
        <Modal>
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
                    <Link to='..' type='button' >Cancel</Link>
                    <button type='submit' >Submit</button>
                </div>
            </form>
        </Modal>
    )
}

export default NewPost
