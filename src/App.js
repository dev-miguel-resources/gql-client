import { useContext } from "react";
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
import { Route, Switch } from "react-router-dom";

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
      <Nav />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <PublicRoute exact path="/register" component={Register} />
        <PublicRoute exact path="/login" component={Login} />
        <Route exact path="/complete-registration" component={CompleteRegistration} />
        <Route exact path="/password/forgot" component={PasswordForgot} />
        <PrivateRoute exact path="/password/update" component={PasswordUpdate} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/post/create" component={Post} />
        <Route exact path="/user/:username" component={SingleUser} />
      </Switch>
    </ApolloProvider>
  );
};

export default App;
