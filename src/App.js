import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './mainapp/Home';
import About from './mainapp/About';
import Registration from './mainapp/Registration';
import Login from './mainapp/Login';
import Adlogin from './mainapp/Adlogin';
import UserDash from './userapp/UserDash';
import Addquery from './userapp/Addquery';
import ViewPenQuery from './userapp/ViewPenQuery';
import ViewProcessingQuery from './userapp/ViewProcessingQuery';
import ViewCompleteQuery from './userapp/ViewCompleteQuery';
import EditPendingQuery from './userapp/EditPendingQuery';
import Adddash from './adminapp/Adddash';
import ViewallUser from './adminapp/ViewallUser';
import ViewAllPendingQuery from './adminapp/ViewAllPendingQuery';
import Viewallproquery from './adminapp/Viewallproquery';
import ViewAllComQuery from './adminapp/ViewAllComQuery';
import Editdash from './userapp/Editdash';
import Contact from './component/Contact';

function App() {
  return (
   <>
   <div className='container-fluid'>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/login" element={<Login />} />
    <Route path="/adlogin" element={<Adlogin />} />
    <Route path="/userdash/:id" element={<UserDash />} />
    <Route path="/editdash/:id" element={<Editdash />} />
    <Route path="/addquery/:id" element={<Addquery />} />
    <Route path="/viewpenquery/:id" element={<ViewPenQuery />} />
    <Route path="/viewprocessingquery/:id" element={<ViewProcessingQuery />} />
    <Route path="/viewcompletegquery/:id" element={<ViewCompleteQuery />} />
    <Route path="/editpendingquery/:id/:qid" element={<EditPendingQuery />} />
    <Route path="/admindash" element={<Adddash />} />
    <Route path="/viewalluser" element={<ViewallUser />} />
    <Route path="/viewallpendingquery" element={<ViewAllPendingQuery />} />
    <Route path="/viewallproquery" element={<Viewallproquery />} />
    <Route path="/viewallcomquery" element={<ViewAllComQuery />} />
    <Route path="/contact" element={<Contact />} />
    
   </Routes>
   </BrowserRouter>
   </div>
   </>
  );
}

export default App;

