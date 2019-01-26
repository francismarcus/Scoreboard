import React from "react";
import { Players } from "./../api/players";
import styled from "styled-components";

export default class AddPlayer extends React.Component {
  handleSubmit = e => {
    let playerName = e.target.playerName.value;
    e.preventDefault();

    if (playerName) {
      e.target.playerName.value = "";
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormInput type="text" name="playerName" placeholder="Name" />
        </Form>
        <Button> Add Player </Button>
      </div>
    );
  }
}

const Form = styled.form`
  display: flex;
  width: 100%;
  padding: 0 1.3rem 0 1.3rem;
  box-sizing: border-box;
  height: 4rem;
`;

const FormInput = styled.input`
  border: 1px solid #e8e8e8;
  flex-grow: 1;
  padding: 0 1.3rem 0 1.3rem;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid #e8e8e8;
  color: #555555;
  cursor: pointer;
  font-weight: 600;
  line-height: 1;
  margin-left: 1.3rem;
  outline: none;
  padding: 1.3rem;
  transition: background .2s ease, transform .2s ease;
`;
