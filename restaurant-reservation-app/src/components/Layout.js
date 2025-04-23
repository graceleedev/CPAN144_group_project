// Importing the NavBar and Footer components to be used in the layout
import NavBar from './NavBar';
import Footer from './Footer';

// The Layout component acts as a wrapper for the page structure
// It receives `children` as props, which represents the main content of the page

export default function Layout({ children }) {
  return (
    <>
      {/* Renders the navigation bar at the top */}
      <NavBar />

      {/* Main content of the page will be displayed here */}
      <header>{children}</header>

      {/* Renders the footer at the bottom */}
      <Footer />
    </>
  );
}