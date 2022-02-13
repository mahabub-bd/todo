import propTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class CreateTodoForm extends React.Component {
    state = {
        text: '',
        description: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { createTodo } = this.props;
        createTodo(this.state);
        event.target.reset();
        this.setState({
            text: '',
            description: '',
        });
    };

    render() {
        const { text, description } = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="input"> Enter Task</Label>
                        <Input
                            type="text"
                            name="text"
                            id="input"
                            placeholder="Do some code"
                            value={text}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Describe Task</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            placeholder="Write Some Description on your tasks"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button className="ml-auto btn btn-sm" type="Submit">
                        Create Task
                    </Button>
                </Form>
            </div>
        );
    }
}
CreateTodoForm.protoTypes = {
    createTodo: propTypes.func.isRequired,
};
export default CreateTodoForm;
