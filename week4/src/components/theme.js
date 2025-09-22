import React, { createContext, useContext, useState } from "react";

const themeContext=createContext()

function ThemeProvider({children}){
    const [theme,setTheme]=useState('light');
    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==='light'?'dark':'light'))
    };
    return(
        <themeContext.Provider value={{theme,toggleTheme}}>
        {children}
        </themeContext.Provider>
    )
}

function ThemeSwitcher(){
    const {theme,toggleTheme}=useContext(themeContext)
        const style={
            backgroundColor:theme==="light"?"#fff" : "#333",
            color: theme === 'light' ? '#000' : '#fff',
            minHeight: '100vh', 
            padding: "20px",
            textAlign: "center",
            transition: "all 0.3s ease"
        }

        return(
            <div style={style}>
                <h4>{theme.toUpperCase()}MODE</h4>
                <button onClick={toggleTheme}>
                    switch to {theme==='light'?'dark':'light'}Mode
                </button>
            </div>
        )
}

export {
    ThemeSwitcher,
    ThemeProvider
}