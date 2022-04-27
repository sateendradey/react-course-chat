import './App.css';
import { ChatEngine } from "react-chat-engine";
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';
function App() {

  if (!localStorage.getItem('username'))
    return <LoginForm/>
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="4bf54413-160b-4600-8e78-4889a7a1db7d"
        userName='bhai'
			  userSecret='qwerty'
        renderChatFeed = {(chartAppProps) => <ChatFeed {...chartAppProps}/>}
        onNewMessage = { () => new Audio('https://chat-engine-assets/s3/amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
