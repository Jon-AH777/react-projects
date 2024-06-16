import PostList from './components/PostList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';
useState

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler(){
    setModalIsVisible(false);
}

function showModalHandler(){
  setModalIsVisible(true)
}
  return (
    <>
    <MainHeader onCreatePost={showModalHandler} />
    <main>
      <PostList isModalVisible={modalIsVisible} onStopPosting={hideModalHandler} />
    </main>
    </>
  );
}

export default App;