import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';


const ChatLog =(props) => {
  const messageComponents = props.entries.map((message) => {
    return (
      <li key={message.id}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onLikedToggle={props.onLikedToggle}
          likesCount={props.likesCount}
          setLikesCount={props.setLikesCount}
          calculateLikes={props.calculateLikes}/>
      </li>
    );
  });
  return (
    <ul>
      {messageComponents}
    </ul>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    liked: PropTypes.bool.isRequired,
  })),
  onLikedToggle: PropTypes.func.isRequired,
  likesCount: PropTypes.number,
  setLikesCount: PropTypes.func,
  calculateLikes: PropTypes.func,
};



export default ChatLog;