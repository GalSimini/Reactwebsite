import './Team.css';

function Team(props) {

    return (
        <section className='team' style={{ backgroundColor: props.corSecundaria }}>
            <h3 className='team-title' style={{ borderBottom: `4px solid ${props.corPrimaria}` }}>{props.nome}</h3>
            <div>

            </div>
        </section>
    );


}

export default Team;