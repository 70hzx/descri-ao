'use client'; // Necessário para componentes client-side no Next.js 13+ com App Router

import { useState } from 'react';
import styles from './page.module.css'; 
import next from 'next';


interface Project {
  name: string;
  desc: string;
}

interface Skill {
  title: string;
  description: string;
  projects: Project[];
}

interface Skills {
  [key: string]: Skill;
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>('html'); 

 
  const skills: Skills = {
    html: {
      title: 'HTML5',
      description: 'Estrutura semântica, acessibilidade e SEO otimizado.',
      projects: [
        { name: 'Landing Page', desc: 'Página responsiva com formulário acessível' },
        { name: 'Blog', desc: 'Estrutura semântica para leitores de tela' },
      ],
    },
    css: {
      title: 'CSS3',
      description: 'Estilização moderna, animações e layouts responsivos.',
      projects: [
        { name: 'Galeria de Imagens', desc: 'Grid com animações suaves' },
        { name: 'Dashboard', desc: 'Design system com variáveis CSS' },
      ],
    },
    javascript: {
      title: 'JavaScript',
      description: 'Interatividade, manipulação de DOM e lógica dinâmica.',
      projects: [
        { name: 'Calculadora', desc: 'Funcionalidade em tempo real' },
        { name: 'To-Do List', desc: 'CRUD com localStorage' },
      ],
    },
    react: {
      title: 'React',
      description: 'Componentização, hooks e estado reativo.',
      projects: [
        { name: 'E-commerce', desc: 'Carrinho de compras com Context API' },
        { name: 'Dashboard SPA', desc: 'Roteamento e lazy loading' },
      ],
    },
    typescript: {
      title: 'TypeScript',
      description: 'Tipagem estática e segurança no código.',
      projects: [
        { name: 'Formulário', desc: 'Validação tipada com formulários complexos' },
        { name: 'API Client', desc: 'Integração com tipagem de endpoints' },
      ],
    },
  };
 

  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <header className={styles.header}>
        <h1>Portfólio Front-End</h1>
        <p>Minhas habilidades e projetos como desenvolvedor front-end</p>
      </header>

      {/* Navegação entre linguagens */}
      <nav className={styles.tabs}>
        {Object.keys(skills).map((key) => (
          <button
            key={key}
            className={`${styles.tabButton} ${activeTab === key ? styles.active : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {skills[key].title}
          </button>
        ))}
      </nav>

      <section className={styles.content}>
        <h2>{skills[activeTab].title}</h2>
        <p>{skills[activeTab].description}</p>
        <ul className={styles.projectList}>
          {skills[activeTab].projects.map((project, index) => (
            <li key={index} className={styles.projectItem}>
              <strong>{project.name}</strong> - {project.desc}
            </li>
          ))}
        </ul>
      </section>

     
      <footer className={styles.footer}>
        <p>Desenvolvido por [Arthur Ibarra] © 2025</p>
      </footer>
    </div>
  );
} 
 
<section>
  <h1>Sobre mim e meus projetos</h1>
  <p>
    Sou um desenvolvedor front-end apaixonado por criar interfaces modernas e interativas de uma forma simples e eficiente.
  </p>
  <p>
    <a href="https://www.linkedin.com/in/arthur-ibarra-b70000200/">Linkedin</a>
    <a href="https://github.com/70hzz">Github</a>
  </p>
</section> 
