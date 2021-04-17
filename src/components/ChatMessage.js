import { useContext } from 'react'
import AppContext from '../context/app'
import PropTypes from 'proptypes'

function ChatMessage(props) {
  const { auth } = useContext(AppContext)
  const { text, uid, photoURL } = props.message

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}

ChatMessage.propTypes = {
  message: PropTypes.object,
}

export default ChatMessage
