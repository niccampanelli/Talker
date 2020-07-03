import React, { useState } from 'react';
import './style.css';
import { FiMoreVertical, FiSend, FiX, FiSearch, FiSmile, FiPaperclip, FiMapPin, FiBellOff, FiArchive } from 'react-icons/fi'
import { AiOutlinePushpin } from 'react-icons/ai'
import ImageExample from '../../assets/images/imageExample.jpg'

export default function Home(){

    const [editingContact, setEditingContact] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    function popupManage(cond){
        setShowPopup(cond);
    }

    function showContactEdition(){
        editingContact ? setEditingContact(false) : setEditingContact(true);
    }

    const ContactEditionComponent = () => (
        <div className="contactEdition">
            <div className="pinContact"><AiOutlinePushpin/></div>
            <div className="silenceContact"><FiBellOff/></div>
            <div className="archiveContact"><FiArchive/></div>
        </div>
    )

    return(
        <div className="App">
            <div className="content">
                <section className="sideSection">
                    <div className="currentUser">
                        <div className="currentUserPhoto">
                            <img src={ImageExample} className="currentUserImg"/>
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
                                {editingContact && <ContactEditionComponent/>}
                            </button>
                            <button className="contact">
                                <div className="contactListPhoto">
                                    <img className="contactListImg" src={ImageExample}></img>
                                </div>
                                <div className="contactListInfo">
                                    <h1 className="contactListName">
                                        Lucas Campanelli
                                    </h1>
                                    <FiMoreVertical className="contactListSettings"/>
                                    <h2 className="contactListLastMessage">
                                        Ina me dá o milu
                                    </h2>
                                    <h2 className="contactListLastMessageTime">
                                        10:23
                                    </h2>
                                </div>
                            </button>
                            <button className="contact">
                                <div className="contactListPhoto">
                                    <img className="contactListImg" src={ImageExample}></img>
                                </div>
                                <div className="contactListInfo">
                                    <h1 className="contactListName">
                                        Nutalitas
                                    </h1>
                                    <FiMoreVertical className="contactListSettings"/>
                                    <h2 className="contactListLastMessage">
                                        Ina o miluzinho é bobo
                                    </h2>
                                    <h2 className="contactListLastMessageTime">
                                        10:23
                                    </h2>
                                </div>
                            </button>
                            <button className="contact">
                                <div className="contactListPhoto">
                                    <img className="contactListImg" src={ImageExample}></img>
                                </div>
                                <div className="contactListInfo">
                                    <h1 className="contactListName">
                                        Pinguim do nuta
                                    </h1>
                                    <FiMoreVertical className="contactListSettings"/>
                                    <h2 className="contactListLastMessage">
                                        Oi eu sou o Pinguim
                                    </h2>
                                    <h2 className="contactListLastMessageTime">
                                        10:23
                                    </h2>
                                </div>
                            </button>
                            <button className="contact">
                                <div className="contactListPhoto">
                                    <img className="contactListImg" src={ImageExample}></img>
                                </div>
                                <div className="contactListInfo">
                                    <h1 className="contactListName">
                                        Pinguim gordinho
                                    </h1>
                                    <FiMoreVertical className="contactListSettings"/>
                                    <h2 className="contactListLastMessage">
                                        Ina
                                    </h2>
                                    <h2 className="contactListLastMessageTime">
                                        10:23
                                    </h2>
                                </div>
                            </button>
                            <button className="contact">
                                <div className="contactListPhoto">
                                    <img className="contactListImg" src={ImageExample}></img>
                                </div>
                                <div className="contactListInfo">
                                    <h1 className="contactListName">
                                        +55 11 91025-4730
                                    </h1>
                                    <FiMoreVertical className="contactListSettings"/>
                                    <h2 className="contactListLastMessage">
                                        Olá nicholas kkkkkk eu sou o milu muito fofo miluzinho kkkkkk :D :) asdqf nuta nutalitas
                                    </h2>
                                    <h2 className="contactListLastMessageTime">
                                        10:23
                                    </h2>
                                </div>
                            </button>
                            <button className="contact">
                                <div className="contactListPhoto">
                                    <img className="contactListImg" src={ImageExample}></img>
                                </div>
                                <div className="contactListInfo">
                                    <h1 className="contactListName">
                                        Gilberto
                                    </h1>
                                    <FiMoreVertical className="contactListSettings"/>
                                    <h2 className="contactListLastMessage">
                                        Boa noite, lorem ipsum sit dot sla oq mais
                                    </h2>
                                    <h2 className="contactListLastMessageTime">
                                        10:23
                                    </h2>
                                </div>
                            </button>
                            <button className="contact">
                                <div className="contactListPhoto">
                                    <img className="contactListImg" src={ImageExample}></img>
                                </div>
                                <div className="contactListInfo">
                                    <h1 className="contactListName">
                                        João Silva
                                    </h1>
                                    <FiMoreVertical className="contactListSettings"/>
                                    <h2 className="contactListLastMessage">
                                        Bom dia, eu gostaria muito de saber se o milu é fofo
                                    </h2>
                                    <h2 className="contactListLastMessageTime">
                                        10:23
                                    </h2>
                                </div>
                            </button>
                            <button className="contact">
                                <div className="contactListPhoto">
                                    <img className="contactListImg" src={ImageExample}></img>
                                </div>
                                <div className="contactListInfo">
                                    <h1 className="contactListName">
                                        Milu Fofo
                                    </h1>
                                    <FiMoreVertical className="contactListSettings"/>
                                    <h2 className="contactListLastMessage">
                                        Olá nicholas kkkkkk eu sou o milu muito fofo miluzinho kkkkkk :D :) asdqf nuta nutalitas
                                    </h2>
                                    <h2 className="contactListLastMessageTime">
                                        10:23
                                    </h2>
                                </div>
                            </button>
                            <button className="contact">
                                <div className="contactListPhoto">
                                    <img className="contactListImg" src={ImageExample}></img>
                                </div>
                                <div className="contactListInfo">
                                    <h1 className="contactListName">
                                        Milu Fofo
                                    </h1>
                                    <FiMoreVertical className="contactListSettings"/>
                                    <h2 className="contactListLastMessage">
                                        Olá nicholas kkkkkk eu sou o milu muito fofo miluzinho kkkkkk :D :) asdqf nuta nutalitas
                                    </h2>
                                    <h2 className="contactListLastMessageTime">
                                        10:23
                                    </h2>
                                </div>
                            </button>
                            <button className="contact">
                                <div className="contactListPhoto">
                                    <img className="contactListImg" src={ImageExample}></img>
                                </div>
                                <div className="contactListInfo">
                                    <h1 className="contactListName">
                                        Milu Fofo
                                    </h1>
                                    <FiMoreVertical className="contactListSettings"/>
                                    <h2 className="contactListLastMessage">
                                        Olá nicholas kkkkkk eu sou o milu muito fofo miluzinho kkkkkk :D :) asdqf nuta nutalitas
                                    </h2>
                                    <h2 className="contactListLastMessageTime">
                                        10:23
                                    </h2>
                                </div>
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
                    <header className="chatHeader">
                            <img className="contactImg" src={ImageExample} alt="Imagem do Contato"></img>
                            <div className="contactInfo">
                                <h1 className="contactName">Contato do Milu</h1>
                                <h1 className="contactStatus">Online pela última vez: 10:23</h1>
                            </div>
                        <button onClick={() => popupManage(true)} className="searchBtn"><FiSearch size={"4.5vh"}/></button>
                        <button onClick={() => popupManage(true)} className="configBtn"><FiMoreVertical size={"5vh"}/></button>
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
                        <textarea className="messageInput" placeholder="Digite aqui..." required emoji></textarea>
                            <div className="messageButtons">
                                <button className="emojiBtn"><FiSmile size={"4vh"}/></button>
                                <button className="sendAttachmentBtn"><FiPaperclip size={"4vh"}/></button>
                                <button className="sendMessageBtn"><FiSend size={"4vh"}/></button>
                            </div>
                    </div>
                </main>
            </div>
        </div>
    );
}