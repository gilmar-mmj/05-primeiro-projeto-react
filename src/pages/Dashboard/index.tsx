import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no GitHub</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/64145516?s=460&u=9f78ce01467052b0abf2778cef08a82d432240b8&v=4"
          alt="Gilmar Margoti"
        />

        <div>
          <strong>gilmar-mmj/nlw-03-dicovery</strong>
          <p>Projeto construido durante a terceira Next Level Week.</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/64145516?s=460&u=9f78ce01467052b0abf2778cef08a82d432240b8&v=4"
          alt="Gilmar Margoti"
        />

        <div>
          <strong>gilmar-mmj/nlw-03-dicovery</strong>
          <p>Projeto construido durante a terceira Next Level Week.</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/64145516?s=460&u=9f78ce01467052b0abf2778cef08a82d432240b8&v=4"
          alt="Gilmar Margoti"
        />

        <div>
          <strong>gilmar-mmj/nlw-03-dicovery</strong>
          <p>Projeto construido durante a terceira Next Level Week.</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
