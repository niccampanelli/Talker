import React, { useState } from 'react';
import './style.css';
import { FiMoreVertical, FiSend, FiX } from 'react-icons/fi'
import ImageExample from '../../assets/images/imageExample.jpg'

export default function Home(){

    const [showPopup, setShowPopup] = useState(false);

    function popupManage(cond){
        setShowPopup(cond);
    }

    return(
        <div className="App">
            <div className="content">
                <section className="contactList">
                    <button className="contact">Milu fofo</button>
                    <button className="contact">Pinguim do nuta</button>
                    <button className="contact">Pinguim gordinho</button>
                    <button className="contact">Pikachu</button>
                    <button className="contact">Nutalitas</button>
                    <button className="contact">Contato do Milu</button>
                    <button className="contact">Contato do Milu</button>
                    <button className="contact">Contato do Milu</button>
                    <button className="contact">Contato do Milu</button>
                    <button className="contact">Contato do Milu</button>
                    <button className="contact">Contato do Milu</button>
                    <button className="contact">Contato do Milu</button>
                </section>
                <main className="chatSection">
                    <header className="chatHeader">
                            <img className="contactImg" src={ImageExample} alt="Imagem do Contato"></img>
                        <h1 className="contactName">Contato do Milu</h1>
                        <button onClick={() => popupManage(true)} className="configBtn"><FiMoreVertical size={"4vh"}/></button>
                    </header>
                    {showPopup && <div className="settingsPopup">
                        <button onClick={() => popupManage(false)} className="closePopup"><FiX size={"4vh"}/></button>
                            <div className="userPhoto">
                                <img className="userImg" src={ImageExample}></img>
                            </div>
                            <div className="settingsButtons">
                                <button className="popupOptions">Nicholas Campanelli</button>
                                <button className="popupOptions">Opções</button>
                                <button className="popupOptions">Sobre</button>
                                <button className="popupOptions">Sair</button>
                            </div>
                    </div>}
                    <div className="messagesSection">
                        <div className="message">
                            <h1 className="messageText">
                                oi ina
                            </h1>
                            <h3 className="messageTime">
                                10:23
                            </h3>
                        </div>
                        <div className="message">
                            <h1 className="messageText">
                                oi ina
                            </h1>
                            <h3 className="messageTime">
                                10:23
                            </h3>
                        </div>
                        <div className="message">
                            <h1 className="messageText">
                                oi ina
                            </h1>
                            <h3 className="messageTime">
                                10:23
                            </h3>
                        </div>
                        <div className="message">
                            <h1 className="messageText">
                                méu méu
                            </h1>
                            <h3 className="messageTime">
                                10:23
                            </h3>
                        </div>
                        <div className="message">
                            <h1 className="messageText">
                                oi ina
                            </h1>
                            <h3 className="messageTime">
                                10:23
                            </h3>
                        </div>
                        <div className="message">
                            <h1 className="messageText">
                                oi ina
                            </h1>
                            <h3 className="messageTime">
                                10:23
                            </h3>
                        </div>
                    </div>
                    <div className="sendSection">
                        <textarea className="messageInput" placeholder="Digite aqui..."></textarea>
                        <button className="sendMessageBtn"><FiSend size={"4vh"}/></button>
                    </div>
                </main>
            </div>
        </div>
    );
}