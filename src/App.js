import { Routes, Route, BrowserRouter } from "react-router-dom";
import openRoutes from "./routes/openRoutes"
import protectedRoutes from "./routes/protectedRoutes"
import { useDispatch, useSelector } from 'react-redux'
import { NotFound } from '../src/pages'
import RouteProtection from "./routes/routeProtection";
import { useEffect } from "react";
import { getUserList } from "./redux/thunks/user-thunk";
import axios from "axios";




function App() {
  const userProfile = useSelector((state) => state.userDetails.userData)

  let  dispatch = useDispatch()

  useEffect(() => {
    // !userProfile && dispatch(getUserList(axios))
     dispatch(getUserList(axios))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {openRoutes.map(({ path, component }, index) => <Route key={index} path={path} element={component}></Route>)} 
        {protectedRoutes.map(({ path, component }, index) => <Route key={index} path={path} element={
          <RouteProtection>
            {component}
          </RouteProtection>
        }></Route>)}

        <Route path={"*"} element={<NotFound/>}></Route>

      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
