import React, { useState } from 'react';
import './style.css';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'} arrow`}></i>
      </button>
      {isOpen && (
        <div className="accordion-body">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const data = [
    {
      title: 'O que é a ProGirls?',
      content: `
        A ProGirls é muito mais que uma comunidade, é um espaço feito com carinho para apoiar, inspirar e capacitar mulheres que desejam brilhar na área de tecnologia.
        Aqui, compartilhamos histórias incríveis, conteúdos educativos e iniciativas que ajudam a aumentar a presença feminina no mundo tech. 🚀✨
      `,
    },
    {
      title: 'A ProGirls é só para mulheres?',
      content: `
        Sim, a ProGirls é um espaço dedicado exclusivamente para mulheres cis, mulheres trans e pessoas não-binárias que se identificam com o feminino.
        Nosso objetivo é criar um ambiente seguro, acolhedor e focado em fortalecer as vozes femininas na tecnologia.
        💜 Estamos aqui para apoiar, incluir e crescer juntas!
      `,
    },
  ];

  return (
    <div id="container">
      {data.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default App;
