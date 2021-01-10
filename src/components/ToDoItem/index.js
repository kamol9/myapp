import React, { Component } from 'react';
import styled from 'styled-components';
import uniqeid from 'uniqid';

const Item = styled.div`
  background: #343744;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 7px;
  color: ${props => (props.done ? '#1fd84d' : 'inherit')};
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`

class ToDoItem extends Component {


    static defaultProps = {
        done: false
    }
    state = {
        done: this.props.done
    }

    toggleDone = () => {
        this.setState({ done: !this.state.done });
    }


    render() {
        const { body } = this.props

        return (
            <Item key={uniqeid('list-')} onClick={this.toggleDone} done={this.state.done}>
                < p > Do zrobienia: {body}</p >
            </Item >
        )

    }
}

export default ToDoItem