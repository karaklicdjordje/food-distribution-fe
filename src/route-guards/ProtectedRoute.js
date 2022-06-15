import { Navigate, Route } from "react-router-dom";

export const ProtectedRoute = ({ component , adminRoute=false, exact= false}) => {
  
  const isLoggedIn = localStorage.getItem('token');

  if (isLoggedIn) {

    //TODO: admin check

    return <Route exact component={component} />
  }
  else {
      return <Navigate to={'/'} />
  }
};
