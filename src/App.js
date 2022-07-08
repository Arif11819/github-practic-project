import './App.css';
import Card from './components/Card/Card';
import ClientsSay from './components/Clients/Clients';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import HowDOIt from './components/Product/HowDOIt';


function App() {
  return (
    <>
      <Header />
      <Card />
      <ClientsSay />
      <HowDOIt />
      <Footer></Footer>
    </>
  );
}

export default App;
