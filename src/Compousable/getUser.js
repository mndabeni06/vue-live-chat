import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";

// const error = ref(null);

const user = ref(projectAuth.currentUser);
projectAuth.onAuthStateChanged((_user) => {
  console.log("User state change. Current user is: ", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;