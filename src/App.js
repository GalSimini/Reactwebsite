import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form.jsx';
import Team from './components/Team/Team';

function App() {

  const times = [
    { nome: 'Programação', corPrimaria: '#57C278', corSecundaria: '#D9F7E9' },
    { nome: 'Frontend', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { nome: 'Data Science', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
    { nome: 'Devops', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8' },
    { nome: 'UX e Design', corPrimaria: '#DB6EBF', corSecundaria: '#FAE9F5' },
    { nome: 'Mobile', corPrimaria: '#FFBA05', corSecundaria: '#FFF5D9' },
    { nome: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF' }
  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdd = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)}/>
      
      {times.map(time => <Team 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
      />)}

    </div>
);}

      export default App;
