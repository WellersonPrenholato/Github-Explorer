import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore Repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/18597341?s=460&u=d4a6479fae12995534739952864c145a83431836&v=4"
          alt="Wellerson"
        />
        <div>
          <strong>WellersonPrenholato/URI</strong>
          <p>
            Algumas questões resolvidas do URI - Online Judge (Problems &
            Contests).
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/18597341?s=460&u=d4a6479fae12995534739952864c145a83431836&v=4"
          alt="Wellerson"
        />
        <div>
          <strong>WellersonPrenholato/URI</strong>
          <p>
            Algumas questões resolvidas do URI - Online Judge (Problems &
            Contests).
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
