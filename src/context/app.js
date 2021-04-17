import { createContext } from 'react'

const AppContext = createContext({
  auth: null,
  firebase: null,
  firestore: null,
  analytics: null,
})

export default AppContext
