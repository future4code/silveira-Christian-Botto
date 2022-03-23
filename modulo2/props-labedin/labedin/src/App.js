import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import myselfie from './img/me.jpg';
import Coppe from './img/coppe.png';
import add from './img/add.png';
import email from './img/email.png';

// const CardGrande = styled.h1`
//     display: flex;
//     align-items: center;
//     border: 1px solid black;
//     padding: 20px 10px;
//     margin-bottom: 10px;
//     height: 200px;
//  `
// const CardGrandeImg = styled`
//     width: 70px;
//     margin-right: 10px;
//     border-radius: 50%;
// `
// const CardGrandeName = styled.h4`
// margin-bottom: 15px;
// `
// const CardGrande.div = styled.div`
// display: flex;
//     flex-direction: column;
//     justify-items: flex-start;







function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={myselfie} 
           nome="Christian Cardeal" 
          descricao="Olá! Me chamo christian. Originalmente um engenheiro civil, estou estudando agora web programming para migrar de área."
        />
                
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno
          imagem={email} 
          nome="Email: " 
          descricao=" christian-christian@christian.chris"
        />

      <CardPequeno
          imagem={add} 
          nome="Endereço: " 
          descricao=" Rua Christian, Cidade do Christian"
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
            imagem={Coppe}
          nome="COPPE-UFRJ" 
          descricao="Trabalhando com detecção de danos em tubulações." 
        />
      </div>

      <div className="page-section-container">
        <h2>Educação</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
