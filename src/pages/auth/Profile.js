import React, { useState } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "@apollo/client";
import { PROFILE } from "../../graphql/queries";
import { USER_UPDATE } from "../../graphql/mutations";
import UserProfile from "../../components/forms/UserProfile";
import FileUpload from "../../components/FileUpload";

const Profile = () => {
  const [values, setValues] = useState({
    username: "",
    name: "",
    email: "",
    about: "",
    images: [],
  });

  const [loading, setLoading] = useState(false);

  /*const { data } = useQuery(PROFILE);

  const [userUpdate] = useMutation(USER_UPDATE, {
    update: ({ data }) => {
      console.log("USER UPDATE MUTATION IN PROFILE", data);
      toast.success("Profile updated");
    },
  });

  const handleSubmit = (e) => {
  
  }

  const handleChange = (e) => {

  }*/

  return <div>Hello am Profile</div>;
};

export default Profile;
