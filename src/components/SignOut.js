import { useContext } from 'react'
import AppContext from '../context/app'

function SignOut() {
  const { auth } = useContext(AppContext)

  return auth.currentUser && (
    <button className='sign-out' onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default SignOut
