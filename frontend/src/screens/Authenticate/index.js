import React, { useState } from 'react';
import './style.css';
import { FiMoreVertical, FiSend, FiX } from 'react-icons/fi'
import ImageExample from '../../assets/images/imageExample.jpg'

export default function Home(){
    return(
        <div className="App">
            <div className="content">
               <main className="loginCard">
                   <form className="loginForm">
                        <input className="defaultInput" id="loginInput"/>
                        <input className="defaultInput" id="passwordInput"/>
                        <button className="defaultButton">Continuar</button>
                   </form>
               </main>
            </div>
        </div>
    );
}