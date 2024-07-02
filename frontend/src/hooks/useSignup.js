import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    email,
    password,
    profilePicture,
  }) => {
    const success = handleInput({
      fullName,
      username,
      email,
      password,
      profilePicture,
    });
    if (!success) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePicture", profilePicture);

    try {
      const response = await axios.post("/api/user/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Signup successful!");
    } catch (error) {
      toast.error(error.response?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInput({ fullName, username, email, password, profilePicture }) {
  if (!fullName || !username || !email || !password || !profilePicture) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
