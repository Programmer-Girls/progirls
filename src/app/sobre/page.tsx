import React from 'react';
import './style.css';
export default function sobre() {
  return (
    <>
      <section className="flex h-[1vh] py-10 items-center justify-center">
        <div>
          <h2 className="text-4xl font-medium font-montserrat mb-6">Lideres que <span className="text-emphasis">Transformam</span> nossa Comunidade</h2>
        </div>
      </section>
      <section className="flex h-[1vh] py-10 items-center justify-center">
        <div className="flex-col w-[100%] p-20"></div>
      </section>
      <section className="grid-container">
        <div className="container__pink">
          <div className="container__info">
            <img className="avatar" src="avatar.png" alt="foto-perfil" />
            <div className="info__text">
              <h3>Raquel M</h3>
              <p>[description here] Lorem ipsum dolor sit amet.</p>
              <div className="container__social">
                <a href="#"><img src="linkedin.png" alt="logo-LinkedIn" />@Emil_</a>
                <a href="#"><img src="github.png" alt="logo-GitHub" />@Emil_</a>
                <a href="#"><img src="link.png" alt="link-Portfolio" />Portfólio</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container__black">
          <div className="container__info">
            <img className="avatar" src="avatar.png" alt="foto-perfil" />
            <div className="info__text">
              <h3>Sabrinne Sousa</h3>
              <p>[description here] Lorem ipsum dolor sit amet.</p>
              <div className="container__social">
                <a href="#"><img src="linkedin.png" alt="logo-LinkedIn" />@Emil_</a>
                <a href="#"><img src="github.png" alt="logo-GitHub" />@Emil_</a>
                <a href="#"><img src="link.png" alt="link-Portfolio" />Portfólio</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container__pink">
          <div className="container__info">
            <img className="avatar" src="avatar.png" alt="foto-perfil" />
            <div className="info__text">
              <h3>Rafaela</h3>
              <p>[description here] Lorem ipsum dolor sit amet.</p>
              <div className="container__social">
                <a href="#"><img src="linkedin.png" alt="logo-LinkedIn" />@Emil_</a>
                <a href="#"><img src="github.png" alt="logo-GitHub" />@Emil_</a>
                <a href="#"><img src="link.png" alt="link-Portfolio" />Portfólio</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container__black">
          <div className="container__info">
            <img className="avatar" src="avatar.png" alt="foto-perfil" />
            <div className="info__text">
              <h3>Maria E.</h3>
              <p>[description here] Lorem ipsum dolor sit amet.</p>
              <div className="container__social">
                <a href="#"><img src="linkedin.png" alt="logo-LinkedIn" />@Emil_</a>
                <a href="#"><img src="github.png" alt="logo-GitHub" />@Emil_</a>
                <a href="#"><img src="link.png" alt="link-Portfolio" />Portfólio</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container__pink">
          <div className="container__info">
            <img className="avatar" src="avatar.png" alt="foto-perfil" />
            <div className="info__text">
              <h3>Fufu</h3>
              <p>[description here] Lorem ipsum dolor sit amet.</p>
              <div className="container__social">
                <a href="#"><img src="linkedin.png" alt="logo-LinkedIn" />@Emil_</a>
                <a href="#"><img src="github.png" alt="logo-GitHub" />@Emil_</a>
                <a href="#"><img src="link.png" alt="link-Portfolio" />Portfólio</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container__black">
          <div className="container__info">
            <img className="avatar" src="avatar.png" alt="foto-perfil" />
            <div className="info__text">
              <h3>Joana</h3>
              <p>[description here] Lorem ipsum dolor sit amet.</p>
              <div className="container__social">
                <a href="#"><img src="linkedin.png" alt="logo-LinkedIn" />@Emil_</a>
                <a href="#"><img src="github.png" alt="logo-GitHub" />@Emil_</a>
                <a href="#"><img src="link.png" alt="link-Portfolio" />Portfólio</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}