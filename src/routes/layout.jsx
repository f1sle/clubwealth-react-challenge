import { Outlet } from 'react-router-dom';
import Logo from '../components/logo/Logo';

export default function Main() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
