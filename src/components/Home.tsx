import { loginState } from '@/atom';
import { useSetRecoilState } from 'recoil';
import ToDos from './ToDos';

function Home() {
  const setIsLoggedIn = useSetRecoilState(loginState);
  const onClick = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <div>
      <input type="button" onClick={onClick} value="Log Out" />
      <ToDos />
    </div>
  );
}

export default Home;
