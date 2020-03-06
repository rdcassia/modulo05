import React, { Component } from 'react';

import { FaGitAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <h1>
          <FaGitAlt />
          Repositórios
        </h1>

        <Form onSubmit={() => {}}>
          <input type="text" placeholder="adcionar repositório" />

          <SubmitButton disable>
            <FaPlus color="FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
