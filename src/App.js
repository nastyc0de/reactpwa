import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet
} from "react-router-dom";
import {Provider} from 'react-redux';
import { store } from "./store";
import SignIn from "./users/SignIn";

const NoImplemented = () => {
  return(
    <>
    <h1>Sitio en construccion</h1>
    <hr/>
    <Link to='/videos'>Ir a videos</Link> 
    </>
  )
}
function App() {
  return (
   <Router>
     <Provider store={store}>
        <Routes>
            <Route path="/" element={<NoImplemented/>}/>

            <Route path="/users" element={<Outlet/>}>
                <Route path="register" element={<NoImplemented/>}/>
                <Route path="login" element={<SignIn/>}/>
                <Route path=":id" element={<NoImplemented/>}/>
                <Route path=":id/videos" element={<NoImplemented/>}/>
            </Route>

            <Route path="/videos">
                <Route path="/videos" element={<NoImplemented/>}/>
                <Route path="/videos/new" element={<NoImplemented/>}/>
                <Route path="/videos/:id" element={<NoImplemented/>}/>
            </Route>
        </Routes>
     </Provider>
   </Router>
  );
}

export default App;
