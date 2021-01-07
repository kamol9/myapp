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
const DestroyButton = styled.button`
border-radius: 10px;
background: red;
padding: 5px;
collor: #fff;
margin-bottom: 10px;
`

class ToDoList extends Component {

    componentDidMount = () => {
        fetch('http://localhost:5000/todo_items')
            .then(response => response.json())
            .then(json => this.setState({ tasks: json }))
    }

    static defaultProps = {
        tasks: [],
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
    removeAll = () => {
        this.setState({ tasks: [] })
    }

    render() {
        const { title } = this.props
        const { tasks, Draft } = this.state
        return (
            <Container>
                <Header>{title}</Header>
                <DestroyButton onClick={this.removeAll}>Usuń Wszystko</DestroyButton>
                { tasks.map(task => <ToDoItem id={task.id} key={task.key} text={task.content} done={task.done} />)}
                <NewToDoForm
                    onSubmint={this.addToDo}
                    onChange={this.updateDraft}
                    Draft={Draft}
                />
            </Container >
        )
    }
}

export default ToDoList