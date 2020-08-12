import React from 'react';
import './styles.css';
import logoImg from '../../assets/images/logo.svg';
import backgroundImg from '../../assets/images/success-background.svg';

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt='Podhub'/>
                    <h2>Seu agregador de podcasts!</h2>
                </div>
                <img src={backgroundImg} alt="Agregador de Podcasts" className="hero-image"/>
            </div>
            <div id="page-landing-login" className="container">
                <h2 className="login">Fazer Login</h2>
                <a href="" className="create-account">Criar uma conta</a>
                <form action="">
                    <input type="text" placeholder='E-mail'/>
                    <input type="text" placeholder='Senha'/>
                    <div>
                        <input type="checkbox"/>
                        Lembrar-me
                    </div>
                    <button>Entrar</button>
                </form>
                <a href="" className="reset-password">Esqueci minha Senha</a>
            </div>
        </div>
    )
}
export default Landing;