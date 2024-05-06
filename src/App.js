import logo from './logo.svg';
import './App.css';
import './input.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUS from './components/AboutUs';
import ContactUs from './components/ContactUs';
// import Header from './components/Header';
import EmptyLayout from './Layouts/EmptyLayout';
import Footer from './components/Footer';
function App() {
  return (
    <>
      {/* <Header /> */}
      <EmptyLayout />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/about" exact={true} element={<AboutUS />} />
        <Route path="/:slug" exact={true} element={<ContactUs />} />
      </Routes>
      <Footer/>
     </>
  );
}

export default App;
