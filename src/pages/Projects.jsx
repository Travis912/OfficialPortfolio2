import '../styles/Projects.css';

const Projects = () => {

    return (
        <div className='projects-page'>
            <main className="bento-outer-container">
                <section className='upper-left-bento-section'>
                    <div className='bento-box bb-starlink' onClick={() => {window.location.href = '/#/starlink'}}></div>
                    <div className='bento-box bb-me' onClick={() => {window.location.href = '/#/connectFour'}}></div>
                </section>
                <section className='upper-right-bento-section'>
                    <div className='upper-right-inner-upper-section'>
                        <div className='bento-box bb-banff' onClick={() => {window.location.href = '/#/banff'}}></div>
                        <div className='bento-box bb-lambo' onClick={() => {window.location.href = '/#/lamborghini'}}></div>
                    </div>
                    <div className='upper-right-inner-lower-section'>
                        <div className='bento-box bb-banff' onClick={() => {window.location.href = '/#/banff'}}></div>
                        <div className='bento-box bb-space2' onClick={() => {window.location.href = '/#/space'}}></div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Projects;