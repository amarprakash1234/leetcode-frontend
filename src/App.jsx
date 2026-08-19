import './App.css'
import { Routes, Route, Navigate } from "react-router";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import {checkAuth} from "./authSlice"
import { useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import Admin from './pages/Admin';
import ProblemPage from './pages/ProblemPage';
import AdminPanel from './components/AdminPanel';
import AdminDelete from './components/AdminDelete';
import AdminVideo from './components/AdminVideo';
import AdminUpload from "./components/AdminUpload";
import AdminUpdate from './components/AdminUpdate';
import UpdateProblem from './components/UpdateProblem';

function App() {
  const {isAuthenticated, user, loading} =  useSelector((state)=>state.auth);
  const dispatch = useDispatch()
  
  // check initial authentication
  useEffect(()=>{
    dispatch(checkAuth());
  },[dispatch]); // yha empty v de skte hai array me but es se acha ek aise value patak diya jo bar bar change n ho.

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  return (
    <>
      <Routes>
        <Route path='/' element={isAuthenticated ?<Home></Home>:<Navigate to="/signup" />}></Route>
        <Route path='/signup' element={isAuthenticated?<Navigate to="/" />:<Signup></Signup>}></Route>
        <Route path='/login' element={isAuthenticated?<Navigate to="/" />:<Login></Login>}></Route>
        <Route path='/problem/:problemId' element={isAuthenticated ? <ProblemPage /> : <Navigate to="/signup" />}></Route>
        <Route path="/admin" element={isAuthenticated && user?.role === 'admin' ? <Admin /> : <Navigate to="/" />}></Route>
        <Route path='/admin/create' element={isAuthenticated && user?.role === 'admin' ? <AdminPanel /> : <Navigate to="/" />}></Route>
        <Route path='/admin/delete' element={isAuthenticated && user?.role === 'admin' ? <AdminDelete /> : <Navigate to="/" />}></Route>
        <Route path='/admin/update' element={isAuthenticated && user?.role === 'admin' ? <AdminUpdate /> : <Navigate to="/" />}></Route>
        <Route path='/admin/update/:problemId' element={isAuthenticated && user?.role === 'admin' ? <UpdateProblem /> : <Navigate to="/" />}></Route>
        <Route path='/admin/video' element={isAuthenticated && user?.role === 'admin' ? <AdminVideo /> : <Navigate to="/" />}></Route>
        <Route path='/admin/upload/:problemId' element={isAuthenticated && user?.role === 'admin' ? <AdminUpload /> : <Navigate to="/" />}></Route>
      </Routes>
    </>
  )
}

export default App;


