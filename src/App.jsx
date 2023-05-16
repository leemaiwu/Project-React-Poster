
import { useState } from "react"
import PostList from "./components/PostList"
import MainHeader from "./components/MainHeader"

function App({}) {

  const [displayModal, setDisplayModal] = useState(false)

  const showModal = () => {
    setDisplayModal(true)
  }

  const hideModal = () => {
    setDisplayModal(false)
  }

  return (
    <>
      <MainHeader onCreatePost={showModal}/>
      <main>
          <PostList 
            isPosting={displayModal} 
            onFinishPost={hideModal} 
          />
      </main>
    </>
  )
}

export default App
