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
import Home2 from "./pages/Home2";

const App = () => {
  const { state } = useContext(AuthContext);
  const { user } = state;

  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  });

  return (
    <ApolloProvider client={client}>
      <Home2 />
    </ApolloProvider>
  );
};

export default App;
