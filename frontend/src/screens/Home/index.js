import React from 'react';

export default function Home(){
    return(
        <div className="App">
            <div className="content">
                <section className="contactList">
                    <button className="contact">Contato do Milu</button>
                </section>
                <main className="chatSection">
                    <header className="chatHeader">
                        <h1 className="contactName">Contato do Milu</h1>
                    </header>
                </main>
            </div>
        </div>
    );
}