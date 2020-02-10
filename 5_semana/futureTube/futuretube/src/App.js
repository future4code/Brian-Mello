import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
          <div>
              <a href="mainScreen.html"><button class="buttonNomeSite"><h1 class="nomeSite">FutureTube</h1></button></a>
          </div>
          <input type="search" placeholder="Busca" class="search"></input>

        </header>
        <main id="main-container">
            <nav id="botoesSite">
                <button id="button1">Inicio</button>
                <button id="button2">Em Alta</button>
                <button id="button3">Inscrições</button>
                <hr class="linhaSeparar"></hr>
                <button id="button4">Originais</button>
                <button id="button5">Biblioteca</button>
                <button id="button6">Histórico</button>
                <hr class="linhaSeparar"></hr>
                <button id="button7">Vídeos Marcados</button>
                <button id="button8">Assistir Mais tarde</button>
            </nav>
            <section id="sectionVideos">
                <div class="videos">
                    <div class = "imagemVideo">
                        <img class = "imagem" src={require("./imagens/thestocks-imagem.jpg")}></img>
                    </div>
                    <div class = "nomeVideo"><h4>Light</h4></div>
                </div>
                <div class="videos">
                    <div class = "imagemVideo">
                        <img class = "imagem" src={require("./imagens/cars-characters-i33475.jpg")}></img>
                    </div>
                    <div class = "nomeVideo"><h4>Cars 2 trailer</h4></div>
                </div>
                <div class="videos">
                    <div class = "imagemVideo">
                        <img class = "imagem" src={require("./imagens/0-destaque-linguagens-de-programacao-2019.jpg")}></img>
                    </div>
                    <div class = "nomeVideo"><h4>Learning develop</h4></div>
                </div>
                <div class="videos">
                    <div class = "imagemVideo">
                        <img class = "imagem" src={require("./imagens/Mountain-Bike-Tour-New-Zealand-HI-Adventures-Web-116.jpg")}></img>    
                    </div>
                    <div class = "nomeVideo"><h4>Mountain Bike Competition</h4></div>
                </div>
                <div class="videos">
                    <div class = "imagemVideo">
                        <img class = "imagem" src={require("./imagens/Ethical-hacking.jpg")}></img>   
                    </div>
                    <div class = "nomeVideo"><h4>Learning Ethical Hacking</h4></div>
                </div>
                <div class="videos">
                    <div class = "imagemVideo">
                        <img class = "imagem" src={require("./imagens/surfing-1208255_1280.jpg")}></img>   
                    </div>
                    <div class = "nomeVideo"><h4>Surf Competition</h4></div>
                </div>
                <div class="videos">
                    <div class = "imagemVideo">
                        <img class = "imagem" src={require("./imagens/outra.jpg")}></img>   
                    </div>
                    <div class = "nomeVideo"><h4>Most Read Newspaper</h4></div>
                </div>
                <div class="videos">
                    <div class = "imagemVideo">
                        <img class = "imagem" src={require("./imagens/5744c7e78aacf1.43089113deuses20gregos20mitologia2021.jpg")}></img>   
                    </div>
                    <div class = "nomeVideo"><h4>Greek Mythology</h4></div>
                </div>
            </section>
        </main>
        <footer>
            <p>Copyright © 2019 | Designer feito por Brian Mello </p>
        </footer>  
    </div>
  );
}

export default App;
