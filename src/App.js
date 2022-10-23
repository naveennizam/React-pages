//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
//import Hook from './Hook';

function App() {
  return (
    <>
       <Routes>
         <Route path='/' element={<Layout />}>
           <Route path='blogs' element={<Blogs />} />
           <Route index element={<Home />} />
           <Route path="contact" element={<Contact />} />
           <Route path="nopage" element={<NoPage />} />
<<<<<<< HEAD
          
=======
           
>>>>>>> 75adfdc8963e828cc8fb3842278253309705ee13
         </Route>
       </Routes>
     
       </>
  );
}

export default App;
