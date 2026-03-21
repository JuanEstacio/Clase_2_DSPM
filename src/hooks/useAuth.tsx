import { useState } from "react";
import { auth } from "../firebase/config";
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
    } catch (err: any) {
      setError("Error al iniciar sesión");
      console.log(err);
    }

    setLoading(false);
  };

  const register = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError("Error al registrarse");
      console.log(err);
    }

    setLoading(false);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return {
    login,
    register,
    logout,
    loading,
    error
  };
};

export default useAuth;