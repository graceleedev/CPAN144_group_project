import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main style={{ padding: '1rem' }}>{children}</main>
      <Footer />
    </>
  );
}