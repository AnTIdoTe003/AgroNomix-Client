/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext, createContext } from "react";
import axiosInstance from "../helpers/axiosInstance";
import { useQuery } from "react-query";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: {},
        token: "",
        totalPrice:0
    });
    // useEffect(() => {
    //     const getDetails = async ()=>{
    //         try{
    //             const {data}= await axiosInstance.get('/auth/get-user-details')
    //             setAuth({...auth, user:data.data, token:data.token, totalPrice:data.totalPrice});
    //         }catch(error){
    //             console.log(error)
    //         }
    //     }
    //     getDetails()
    // },[]);

    const { data: authData } = useQuery(
        "authDetails", 
        async () => {
          try {
            const { data } = await axiosInstance.get("/auth/get-user-details");
            setAuth({...auth, user:data.data, token:data.token, totalPrice:data.totalPrice});
            return data;
          } catch (error) {
            throw error;
          }
        },
        {
          refetchOnWindowFocus: false, 
        }
      );
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

// custom hook

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };