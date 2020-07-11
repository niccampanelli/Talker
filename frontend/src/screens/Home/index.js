import React, { useState } from 'react';
import './style.css';
import { FiMoreVertical, FiSend, FiSearch, FiSmile, FiPaperclip, FiBellOff, FiArchive, FiChevronDown } from 'react-icons/fi'
import { AiOutlinePushpin } from 'react-icons/ai'
import EmojiButton from '@joeattardi/emoji-button';
import ImageExample from '../../assets/images/imageExample.jpg'

export default function Home(){

    //States used in all contact related-----------------------------
    const [editingContact, setEditingContact] = useState(false);
    const [contactMoreInfoOpened, setContactMoreInfo] = useState(false)
    const [showPopup, setShowPopup] = useState(false);

    window.onload = function(){
        const button = document.getElementById("emojiButton");
        const picker = new EmojiButton({emojiSize: "5vh", autoHide: false, showPreview: false});
        
        picker.on('emoji', emoji => {
            document.getElementById('messageInput').value += emoji;
        });
        
        button.addEventListener('click', function(){setTimeout(() => {
            picker.togglePicker(button);
        }, 500)});
    }

    function popupManage(){
        setShowPopup(!showPopup);
    }

    function showContactEdition(){
        if(!editingContact){
            setEditingContact(true);
        }
        else{
            setTimeout(function(){ setEditingContact(false) }, 400)
            document.getElementById("contactEditionBackground").classList.add("ContactEditionBackgroundClosing")
        }
    }

    const SettingsPopupComponent = () => (
        <div onClick={popupManage} className="clickBlocker">
            <div className="settingsPopup">
                <div className="settingsButtons">
                    <button onClick={() => setContactMoreInfo(!contactMoreInfoOpened)} className="popupOptions">Mais Informações</button>
                    <button className="popupOptions">Fixar Contato</button>
                    <button className="popupOptions">Silenciar Contato</button>
                    <button className="popupOptions">Arquivar Contato</button>
                    <button className="popupOptions">Bloquear Contato</button>
                    <button className="popupOptions">Papel de Parede</button>
                </div>
            </div>
        </div>
    )

    const ContactEditionComponent = () => (
        <div className="contactEdition">
            <div id="contactEditionBackground" className="contactEditionBackground"/>
                <div className="contactEditionButtons">
                    <div className="pinContact"><AiOutlinePushpin/><h1 className="contactOptionTitle">Fixar</h1></div>
                    <div className="silenceContact"><FiBellOff/><h1 className="contactOptionTitle">Silenciar</h1></div>
                    <div className="archiveContact"><FiArchive/><h1 className="contactOptionTitle">Arquivar</h1></div>
                </div>
        </div>
    )

    return(
        <div className="App">
            <div className="content">
                <section className="sideSection">
                    <div className="currentUser">
                        <img src={ImageExample} className="currentUserImg"/>
                            <div id="currentUserStatus" className="currentUserStatus">
                                <h1 id="currentUserStatusEmoji">🐧</h1>   
                            </div>
                        <div className="currentUserInfo">
                            <h1 className="currentUserName">Nicholas Campanelli</h1>
                            <h1 className="currentUserDetail">Eu sou o nicholas</h1>
                        </div>
                    </div>
                    <section className="contactList">
                        <div className="contacts">
                            <button className="contact">
                                <div className="contactListPhoto">
                                    <img className="contactListImg" src={ImageExample}></img>
                                </div>
                                <div className="contactListInfo">
                                    <h1 className="contactListName">
                                        Contato do Milu
                                    </h1>
                                    <button className="contactListSettings" onClick={showContactEdition}><FiMoreVertical/></button>
                                    <h2 className="contactListLastMessage">
                                        Olá nicholas kkkkkk eu sou o milu muito fofo miluzinho kkkkkk :D :) asdqf nuta nutalitas
                                    </h2>
                                    <h2 className="contactListLastMessageTime">
                                        10:23
                                    </h2>
                                </div>
                                {editingContact ? <ContactEditionComponent/> : ""}
                            </button>
                        </div>
                        <button className="archivedChatsButton">
                            <h2 className="archivedChatsLink">
                                Conversas Arquivadas
                            </h2>
                        </button>
                    </section>
                </section>
                <main className="chatSection">
                    <header className="chatHeader" style={contactMoreInfoOpened ? {boxShadow: "none", gridTemplateColumns: "minmax(0, 20%) minmax(0, 80%)"} : {boxShadow: "0 0vh 3vh .5vh rgba(0, 0, 0, 0.267)"}}>
                            <img className="contactImg" src={ImageExample} alt="Imagem do Contato"  style={contactMoreInfoOpened ? {height: "28vh", width: "28vh", borderRadius: "2vh"} : {height: "8vh", width: "8vh"}}></img>
                            <div className="contactInfo">
                                <h1 className="contactName">Contato do Milu</h1>
                                <h1 className="contactStatus">Online pela última vez: 10:20</h1>
                            </div>
                        <button className="searchBtn"><FiSearch size={"4.5vh"}/></button>
                        <button onClick={() => setContactMoreInfo(!contactMoreInfoOpened)} className="moreinfoBtn"><FiChevronDown size={"5vh"} style={contactMoreInfoOpened ? {transform: "rotateZ(180deg)"} : {transform: "rotateZ(0)"}}/></button>
                        <button onClick={popupManage} className="configBtn"><FiMoreVertical size={"5vh"}/></button>
                        {showPopup && <SettingsPopupComponent/>}
                    </header>
                        <div className="contactInfoSection" style={contactMoreInfoOpened ? {transform: "scaleY(1)"} : {transform: "scaleY(0)"}}>
                            <h1 className="contactAddedIn">Contato adicionado em <h1 className="contactAddedInDate">20/10/2019</h1></h1>
                        </div>
                    <div className="messagesSection">
                            <div className="message">
                                <h1 className="messageText">
                                    oi ina
                                </h1>
                                <h3 className="messageTime">
                                    10:23
                                </h3>
                            </div>
                            <div className="sentMessage">
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
                            <div className="sentMessage">
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
                            <div className="sentMessage">
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
                                    oi ina
                                </h1>
                                <h3 className="messageTime">
                                    10:23
                                </h3>
                            </div>
                            <div className="message">
                                <h1 className="messageText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut erat tortor. Phasellus semper, libero at tempus molestie, ligula libero finibus metus, in sodales leo eros ac felis. Suspendisse eu nunc tristique mi accumsan scelerisque eget at sapien. Etiam malesuada tellus sit amet placerat commodo. Quisque et congue lacus. Curabitur gravida a quam vitae efficitur. Fusce euismod enim vel suscipit consectetur. Sed viverra convallis consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla suscipit fermentum ullamcorper. Suspendisse egestas est egestas, faucibus tellus sed, imperdiet sapien. In consectetur sapien non nibh blandit laoreet. Cras ac rhoncus ex. Vivamus tristique et augue ut viverra. Sed quis bibendum tellus. Maecenas dapibus ligula nec erat suscipit dapibus.

Duis in arcu pharetra, molestie neque non, sodales diam. Integer molestie justo a elit bibendum venenatis. Fusce accumsan molestie magna id tempus. Etiam at nisi non turpis euismod viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus quis sapien in sapien fringilla mattis vitae eu dolor. Sed pretium blandit bibendum. Fusce congue est arcu. Aenean eget tellus sit amet tortor lobortis fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur posuere efficitur luctus. Nam tristique sodales eros in pharetra. Proin ullamcorper id lectus at semper. Donec mattis velit elementum enim malesuada iaculis. Vivamus vitae bibendum lacus, id dapibus neque. Pellentesque ultrices tincidunt erat, id mollis urna.
                                </h1>
                                <h3 className="messageTime">
                                    10:23
                                </h3>
                            </div>
                            <div className="sentMessage">
                                <h1 className="messageText">
                                    oi ina
                                </h1>
                                <h3 className="messageTime">
                                    10:23
                                </h3>
                            </div>
                            <div className="sentMessage">
                                <h1 className="messageText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nisi quis mauris hendrerit tincidunt in porttitor purus. Nunc urna enim, maximus ut faucibus dignissim, lacinia sed mi. Mauris porttitor tristique mi sit amet malesuada. Vivamus vulputate, nunc pretium pretium iaculis, neque metus pretium nulla, sit amet maximus massa felis a tellus. Maecenas lacus ipsum, commodo at nibh a, tincidunt luctus tellus. Ut sollicitudin est in massa fermentum, in condimentum nisi interdum. Nulla suscipit urna a lectus fermentum, id tempor sem gravida. Donec ultrices, odio et rutrum bibendum, lorem lacus commodo turpis, et pretium neque odio id purus. Sed viverra eu neque vel tincidunt. Etiam nisl justo, tempus vel commodo nec, hendrerit vel nisi. Aliquam a bibendum nisl. Etiam orci elit, porta vel elit sed, maximus tristique magna. Ut a aliquet sem. Nam ligula ante, tincidunt sit amet mattis quis, tempor non urna. Ut molestie fermentum lectus ut semper.
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
                                    oi ina
                                </h1>
                                <h3 className="messageTime">
                                    10:23
                                </h3>
                            </div>
                            <div className="sentMessage">
                                <h1 className="messageText">
                                    oi ina
                                </h1>
                                <h3 className="messageTime">
                                    10:23
                                </h3>
                            </div>
                            <div className="sentMessage">
                                <h1 className="messageText">
                                    oi ina
                                </h1>
                                <h3 className="messageTime">
                                    10:23
                                </h3>
                            </div>
                            <div className="sentMessage">
                                <h1 className="messageText">
                                    oi ina
                                </h1>
                                <h3 className="messageTime">
                                    10:23
                                </h3>
                            </div>
                            <div className="sentMessage">
                                <h1 className="messageText">
                                    oi ina
                                </h1>
                                <h3 className="messageTime">
                                    10:23
                                </h3>
                            </div>
                            <div className="sentMessage">
                                <h1 className="messageText">
                                    oi ina
                                </h1>
                                <h3 className="messageTime">
                                    10:23
                                </h3>
                            </div>
                            <div className="sentMessage">
                                <h1 className="messageText">
                                    .
                                </h1>
                                <h3 className="messageTime">
                                    10:23
                                </h3>
                            </div>
                    </div>
                    <div className="sendSection">
                        <textarea id="messageInput" className="messageInput" placeholder="Digite aqui..." required emoji></textarea>
                            <div className="messageButtons">
                                <button id="emojiButton" className="emojiBtn"><FiSmile size={"4vh"}/></button>
                                <button className="sendAttachmentBtn"><FiPaperclip size={"4vh"}/></button>
                                <button className="sendMessageBtn"><FiSend size={"4vh"}/></button>
                            </div>
                    </div>
                </main>
            </div>
        </div>
    );
}