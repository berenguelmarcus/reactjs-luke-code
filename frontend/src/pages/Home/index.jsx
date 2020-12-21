import React from 'react';

import Animate from '../../components/Animate';
import CardCourse from '../../components/CardCourse';
import CardCategory from '../../components/CardCategory';

import './styles.css';

import separator from '../../assets/images/separator.svg';
import yoda from '../../assets/images/characters/yoda.png'
import courseReactRedux from '../../assets/images/courses/react-redux.jpg';
import coursePHP from '../../assets/images/courses/php.jpg';
import courseFlutter from '../../assets/images/courses/flutter.jpg';


const Home = () => {
    return (
        <>
            <Animate />
            <div className="section-1">
                <div className="container">
                    <header className="header">
                        <h2>Luke Code</h2>
                        <nav>
                            <button>FAZER LOGIN</button>
                            <button>INSCREVA-SE</button>
                        </nav>
                    </header>
                    <main>
                        <section>
                            <h1>Se torne um mestre <br /> da programação!</h1>
                            <img src={separator} alt="Separator" />
                            <p>Dê o próximo passo para o seu futuro, <br /> 
                                que a força esteja com você.
                            </p>
                        </section>
                        <section>
                            <img src={yoda} alt="Yoda" />
                        </section>
                    </main>
                </div>
            </div>
            <div className="section-2">
                <div className="container">
                    <h2>3 cursos grátis para você começar!</h2>
                    <p>Na Luke Code, você tem acesso à 3 cursos gratuitos, basta se cadastrar em nossa plataforma.</p>
                    <section className="card-container">
                        <CardCourse image={courseReactRedux} description="React e Redux">
                            Desenvolvimento front-end <br /> React e Redux
                        </CardCourse>
                        <CardCourse image={coursePHP} description="React e Redux">
                            PHP 7 - Trabalhando com PSRs
                        </CardCourse>
                        <CardCourse image={courseFlutter} description="React e Redux">
                            Desenvolvimento iOS e Android <br /> com Flutter
                        </CardCourse>
                    </section>
                    <button>INSCREVA-SE</button>
                </div>
            </div>
            <div className="section-3">
                <div className="container">
                    <h2>O que oferecemos a você</h2>
                    <section className="categories-container">
                        <CardCategory title="CLOUD-COMPUTNG" courses="22 cursos" color="red"/>
                        <CardCategory title="BACK-END" courses="22 cursos" color="yellow"/>
                        <CardCategory title="BANCO DE DADOS" courses="22 cursos" color="purple"/>
                        <CardCategory title="SEGURANÇA" courses="22 cursos" color="blue"/>
                        <CardCategory title="MOBILE" courses="22 cursos" color="green"/>
                        <CardCategory title="FRONT-END" courses="22 cursos" color="orange"/>           
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home;