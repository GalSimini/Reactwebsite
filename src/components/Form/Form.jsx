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

    const onSave = (evento) => {
        evento.preventDefault()
        console.log('Formulário enviado')
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>{props.label}</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="digite seu cargo" />
                <CampoTexto  label="Imagem" placeholder="informe o endereço da imagem" />
                <ListaSuspensa itens={times} label="Times"/>
                <Button>
                    Criar Card
                </Button>	
            </form>
        </section>
    )
}


export default Form;