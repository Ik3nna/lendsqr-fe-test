import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();
const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export const AppProvider = ({ children })=>{
    const [loading, setLoading] = useState(false);
    const [dashboardData, setDashboardData] = useState([]);

    const fetchData = ()=> {
        setLoading(true);
        
        fetch(url)
        .then(response => {
          if(response.ok) {
            return response;
          }
          else {
            let error = new Error("Error " + response.status + ": " + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
          let errmess = new Error(error.message);
          throw errmess;
        })
        .then(response => response.json())
        .then(data => {
          setDashboardData(data)
          setLoading(false)
        })
        .catch(error => {
          setLoading(false)
          console.log(error.message)
        })
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <AppContext.Provider value={{
            loading, setLoading, dashboardData, setDashboardData
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
