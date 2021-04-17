import firebase from './lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import AppContext from './context/app'
import SignOut from './components/SignOut'
import ChatRoom from './components/ChatRoom'
import SignIn from './components/SignIn'

const auth = firebase.auth()
const firestore = firebase.firestore()
const analytics = firebase.analytics()

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className='App'>
      <AppContext.Provider value={{ auth, firebase, firestore, analytics }}>
        <header>
          <h1>App</h1>
          <SignOut />
        </header>

        <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
      </AppContext.Provider>
    </div>
  )
}

export default App
