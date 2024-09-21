import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext); // never forget to use object {}

  if (!user) return <div>Please provide login information</div>;

  return <div>Welcome ${user.username} </div>;
}

export default Profile;
