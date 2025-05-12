import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form.jsx';
import Team from './components/Team/Team';

function App() {

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdd = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)}/>
      <Team title='teste'/>
    </div>
);}

      export default App;
