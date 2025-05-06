import './Form.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Button from '../Button/Button';

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

    return (
        <section className='formulario'>
            <form>
                <h2>{props.label}</h2>
                <CampoTexto label="Nome" placeholder="digite seu nome" />
                <CampoTexto label="Cargo" placeholder="digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="informe o endereço da imagem" />
                <ListaSuspensa itens={times} label="Times"/>
                <Button>
                    Criar Card
                </Button>	
            </form>
        </section>
    )
}


export default Form;