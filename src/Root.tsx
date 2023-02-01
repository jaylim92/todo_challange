import Auth from './components/Auth';
import Home from './components/Home';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loginState, tokenAtom } from './atom';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [token, setToken] = useRecoilState(tokenAtom);

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8080/users/login',
          {}
        );
        console.log(response.data);
        setIsLoggedIn((prev) => !prev);
      } catch (error) {
        console.log(error);
      }
    };
    if (getToken === null) {
      return setIsLoggedIn((prev) => !prev);
    }
    console.log(token);
  }, []);

  return <div>{isLoggedIn ? <Home /> : <Auth />}</div>;
}

export default App;
