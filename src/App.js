import './App.css';
import './index.css'
import Footer from './components/Footer';
import Head from './components/Head';
import Menulist from './components/Menulist';
import Chop from './components/Chop';
import spinaci from '../src/pizzas/spinaci.jpg'
import funghi from '../src/pizzas/funghi.jpg'
import focaccia from '../src/pizzas/focaccia.jpg'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    
// const hour = new Date().getHours()
// // const minute = new Date().getMinutes()
// // const seconds = new Date().getSeconds()
// const openHour = 8;
// const closedHour = 20;
// if (hour >= openHour && hour < closedHour) alert("WELCOME,WE ARE OPENED TO SERVE YOU!!!");
// else alert("GOODBYE,WE ARE CLOSED")

function time(){
  const hour = new Date().getHours()
  const openHour = 8;
  const closedHour = 20;
  if (hour >= openHour && hour < closedHour) toast.success("WELCOME,WE ARE OPENED TO SERVE YOU!!!", {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })
  
else {
  toast.warn('Sorry,We are closed for today...Check back tomorrow!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce
    });
}
}




function App() {
  return (
   <>
       {time()}
       <Head />
       <Menulist />
       <Chop 
       ingredientName='Daily Spinaci Pizza'
       ingredientImage={spinaci}
       ingredientTitle='Our Moisturizing Food'
       />
       <Chop 
       ingredientName='Pizza Funghi'
       ingredientImage={funghi}
       ingredientTitle='Our Palatizing Food'
       />
       <Chop 
       ingredientName='Pizza Focaccia'
       ingredientImage={focaccia}
       ingredientTitle='Our BodyBuilding Food'
       />
       <Footer />
   </>
  );
}

export default App;


 // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>