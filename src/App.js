import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [url, setUrl] = useState();
  const [texto1, setTexto1] = useState();
  const [texto2, setTexto2] = useState();

  const onChangeUrl = function(evento){
    setUrl(evento.target.value);
  } 
  const onChangeLinea1 = function(evento){
    setTexto1(evento.target.value);
  }
  const onChangeLinea2 = function(evento){
    setTexto2(evento.target.value);
  }
  const onClickExportar = function(){
    alert ('Meme expertado!');
    html2canvas(document.querySelector("#memeImg"), {useCORS: true}).then(canvas => {
      var img = canvas.toDataURL('image/png');
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Creador de memes</h1>
        <input onChange={onChangeUrl} type="text" id="url" placeholder="Introduce la url de la imagen" /> <br />

        <input onChange={onChangeLinea1} type="text" id="texto1" placeholder="Texto superior" /> <br />
        <input onChange={onChangeLinea2} type="text" id="texto2" placeholder="Texto inferior" /> <br />

        <button onClick={onClickExportar} id="exportar">Exportar</button>
        <div className="meme" id="memeImg">
          <span>{texto1}</span> <br />
          <span>{texto2}</span>
          <img crossOrigin="anonymous" src={url} alt="imagen"/>
        </div>
      </header>
    </div>
  );
}

export default App;
