import React, { Component } from 'react';
import ToDoItem from '../../components/ToDoItem'
import NewToDoForm from '../../components/NewToDoForm'
import styled from 'styled-components';

const Container = styled.div`
background: #2b2e39;
margin: 0 auto;
width: 80%;
max-width:600px;
padding: 14px;
border-radius: 14px;
margin-top: 14px;
`
const Header = styled.h1`
color: #fff;
`


class ToDoList extends Component {
    static defaultProps = {
        tasks: [
            { done: true, text: 'Zrob zadanie na JS' },
            { done: false, text: 'Zaliczyć JSa' }
        ],
        title: "Lista Rzeczy Do Zrobienia"
    }


    state = {
        tasks: this.props.tasks,
        Draft: ''
    }

    updateDraft = (event) => {
        this.setState({ Draft: event.target.value })
    }

    addToDo = () => {
        const { tasks, Draft } = this.state
        const list = tasks
        list.push({ text: Draft, done: false })
        this.setState({ tasks: list, Draft: '' })
    }

    render() {
        const { title } = this.props
        const { tasks, Draft } = this.state
        return (
            <Container>
                <Header>{title}</Header>
                {tasks.map(task => <ToDoItem text={task.text} done={task.done} />)}
                <NewToDoForm
                    onSubmint={this.addToDo}
                    onChange={this.updateDraft}
                    Draft={Draft}
                />
            </Container>
        )
    }
}

export default ToDoList