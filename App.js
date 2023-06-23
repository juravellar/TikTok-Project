import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  let maxHeight;
  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight;
  }

  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "vídeos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []); // , [] = 1x somente

  return (
    <div>
      <h1 className="Cabeçalho"> <img 
        className="tiktok__logo"
        alt="Imagem da logo do TikTok"
        src="https://firebasestorage.googleapis.com/v0/b/tiktok---jornada-17f1f.appspot.com/o/tiktok_logo?alt=media&token=7e94cc59-1413-49f9-ab45-69034691bf66"
      /></h1>
      <div className="App" style={{ maxHeight: maxHeight + "px" }}>
        <div className="app__videos">
          {video.map((item) => {
            return (
              <Video
                likes={item.likes}
                messages={item.messages}
                shares={item.shares}
                name={item.name}
                description={item.description}
                music={item.music}
                url={item.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

/* PROPS = Tudo que veio de forma dinâmica pelo banco 
de dados eu recebo do App.js, estou passando para o meu
Video.js e distribuindo as variáveis entre o VideoFooter.js
e o VideoSidebar.js.
  O Video.js tem uma variável própria, a URL.*/
