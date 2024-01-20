import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Crawling from './Component/Crawling';
import Slider from './Component/Slider';



function App() {
  return (
    <>
      <Header />
       <Slider /> 
      
      <div> <Crawling/></div>
     
      <Outlet />
      <Footer />
      
    </>



  );
}

export default App;
