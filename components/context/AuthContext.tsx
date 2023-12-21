'use client'
import { auth } from '@/firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

interface User {
  logged: boolean;
  email: string | null;
  uid: string | null;
}

interface AuthContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  registerUser: ({email, password, setUser} : { email: string; password: string; setUser: Dispatch<SetStateAction<User>> }) => Promise<void>;
  loginUser: ({email, password, setUser} : { email: string; password: string; setUser: Dispatch<SetStateAction<User>> }) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe ser utilizado dentro de un AuthProvider");
  }

  return context as AuthContextProps;
};

interface AuthProviderProps {
  children: ReactNode;
}

const registerUser = async ({email, password, setUser} : {email: string, password: string, setUser: Dispatch<SetStateAction<User>>}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    setUser({ 
      logged: true,
      email: user.email,
      uid: user.uid,
    })
  } catch (error) {
    console.error("Error al registrar usuario:", error);
  }
}

const loginUser = async ({email, password, setUser} : {email: string, password: string, setUser: Dispatch<SetStateAction<User>>}) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    setUser({
      logged: true,
      email: user.email,
      uid: user.uid,
    })
  } catch (error) {
    console.error("Error al registrar usuario:", error);
  }
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    logged: false,
    email: null,
    uid: null,
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        registerUser,
        loginUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};