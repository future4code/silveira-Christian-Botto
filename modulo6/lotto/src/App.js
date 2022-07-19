import React from "react";
import Router from "./router/Router";


// [{"id":0,"nome":"mega-sena"},{"id":1,"nome":"quina"},{"id":2,"nome":"lotofácil"},
// {"id":3,"nome":"lotomania"},{"id":4,"nome":"timemania"},{"id":5,"nome":"dia de sorte"}]

// [{"loteriaId":0,"concursoId":"2359"},{"loteriaId":1,"concursoId":"5534"},
// {"loteriaId":2,"concursoId":"2200"},{"loteriaId":3,"concursoId":"2167"},{"loteriaId":4,"concursoId":"1622"},
// {"loteriaId":5,"concursoId":"440"}]


function App() {
  return (
    <div>
      <Router/>
    </div>
  );
}

export default App
