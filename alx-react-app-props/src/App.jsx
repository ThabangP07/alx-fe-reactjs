
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'
import UserContext from './components/UserContext.jsx';
import ProfilePage from './components/ProfilePage';


function App() {

  return ( 
    <UserContext>
      <ProfilePage />
    </UserContext>
  );
}

export default App
