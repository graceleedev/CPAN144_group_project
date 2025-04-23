import NavBar from './NavBar';
import Footer from './Footer';
import Main from './Main';


export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <header>{children}</header>
      <Main />
      <Footer />
    </>
  );
}