import { Route, Routes } from "react-router-dom";
import { Fragment, useContext } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { AuthContext } from "./context/authContext";
import { ToastContainer } from "react-toastify";
import Nav from "./components/Nav";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import PasswordUpdate from "./pages/auth/PasswordUpdate";
import PasswordForgot from "./pages/auth/PasswordForgot";
import Profile from "./pages/auth/Profile";
import Login from "./pages/auth/Login";
import CompleteRegistration from "./pages/auth/CompleteRegistration";
import Post from "./pages/post/Post";
import SingleUser from "./pages/post/SingleUser";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";

const App = () => {
  const { state } = useContext(AuthContext);
  const { user } = state;

  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    request: (operation) => {
      operation.setContext({
        headers: {
          authtoken: user ? user.token : "",
        },
      });
    },
  });

  return (
    <ApolloProvider client={client}>
      <Fragment>
        <Nav />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/register" element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/complete-registration" element={<CompleteRegistration />} />
          <Route path="/password/forgot" element={<PasswordForgot />} />

          <Route path="/password/update" element={<PrivateRoute />}>
            <Route path="/password/update" element={<PasswordUpdate />} />
          </Route>

          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/post/create" element={<PrivateRoute />}>
            <Route path="/post/create" element={<Post />} />
          </Route>

          <Route path="/user/:username" element={<SingleUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Fragment>
    </ApolloProvider>
  );
};

export default App;
