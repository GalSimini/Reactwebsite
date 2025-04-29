
import Banner from './components/Banner/Banner';
import CampoTexto from './components/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome"/>  
      <CampoTexto label="Cargo"/>  
      <CampoTexto label="Imagem"/>  

    </div>
  );
}

export default App;
