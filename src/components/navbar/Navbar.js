import './Navbar.css';

import kharbich from '../../assets/images/kharbich.png';
import logo2     from '../../assets/images/logo 2.png';


function Navbar() {
    return (
      
<nav className="bg-white border-gray-200 px-2 sm:px-4  rounded dark:bg-white">
  <div className="container flex  flex-wrap justify-center items-center mx-auto">
    
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden   w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4  bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
        <li className='px-3'>
        <a> <img className='logo1 block mt-[-12px]  pb-[-20px] pr-14 pl-3' src={logo2} /></a> 
        </li>
        <li className='px-3 '>
          <a href="#" className="block pt-[10px] pb-[-20px] pr-14 pl-3  text-black   text-[22px] " aria-current="page">home</a>
        </li>
        <li >
          <a href="#" className="block pt-[10px] pb-[-20px] pr-14 pl-3 text-black  text-[22px]  ">about us</a>
        </li>
        <li>
          <a href="#" className="block pt-[10px] pb-[-20px] pr-14 pl-3 text-black  text-[22px] " >speakers</a>
        </li>
        <li>
          <a href="#" className="block pt-[10px] pb-[-20px] pr-14 pl-3 text-black   text-[22px] " >agenda</a>
        </li>
        <li>
          <a href="#" className="block pt-[10px] pb-[-20px] pr-14 pl-3 text-black text-[22px] " >sponsors</a>
        </li>
        
          
        <a> <img className='block  pt-[0px] pb-[-20px] pr-14 pl-3' src={kharbich} /></a>
        
           
      </ul>
      
    </div>
  </div>
</nav>

    );
  }
  
  export default Navbar;
  