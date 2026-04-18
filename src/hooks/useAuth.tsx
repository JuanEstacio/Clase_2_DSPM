import { useState } from "react";
import { auth } from "../services/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";

const useAuth = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return true;
    } catch (err: any) {
      console.log(err);
      setError(err.message);
      setLoading(false);
      return false;
    }
  };

  const register = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return true;
    } catch (err: any) {
      console.log(err);
      setError(err.message);
      setLoading(false);
      return false;
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return { login, register, logout, loading, error };
};

export default useAuth;