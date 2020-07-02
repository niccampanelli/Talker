import React, { useState } from 'react';
import './style.css';
import { FiArrowRight } from 'react-icons/fi'

export default function Home(){

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e){
        e.preventDefault();

        try{

        }
        catch(err){

        }

    }

    return(
        <div className="App">
            <div className="content">
               <main className="loginCard">
                   <form onSubmit={handleLogin} className="loginForm">
                        <h1 className="loginTitle">Identifique-se</h1>
                            <div className="inputs">
                                <label htmlFor="loginInput" className="inputLabel">Login</label>
                                    <input onChange={e => setLogin( e.target.value )} className="defaultInput" id="loginInput"/>
                                <label htmlFor="passwordInput" className="inputLabel">Senha</label>
                                    <input onChange={e => setPassword( e.target.value )} className="defaultInput" id="passwordInput"/>
                            </div>
                        <button type="submit" className="circularButton"><FiArrowRight/></button>
                   </form>
               </main>
            </div>
        </div>
    );
}