import './Team.css';

function Team(props) {  

    return (
        <section className='team'>
            <h3 className='team-title'>{props.title}</h3>
            <div className='team-members'>

            </div>
        </section>
    );


}

export default Team;