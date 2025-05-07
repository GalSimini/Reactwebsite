import './Form.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Button from '../Button/Button';
import { useState } from 'react';

function Form(props) {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSave = (evento) => {
        evento.preventDefault()
        console.log('Formulário enviado')
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>{props.label}</h2>
                <CampoTexto
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="digite seu nome" 
                />
                <CampoTexto 
                    valor={cargo} 
                    aoAlterado={cargo => setCargo(cargo)} 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="digite seu cargo"
                />
                <CampoTexto 
                    valor={imagem} 
                    aoAlterado={imagem => setImagem(imagem)}  
                    label="Imagem" 
                    placeholder="informe o endereço da imagem"
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    itens={times} 
                    label="Times"
                    valor={time}
                    aoAlterado={time => setTime(time)}
                />
                <Button>
                    Criar Card
                </Button>	
            </form>
        </section>
    )
}


export default Form;