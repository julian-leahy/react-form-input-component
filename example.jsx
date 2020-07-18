import React from 'react';
import FormInput from './form-input/form-input.component';

class Example extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='email'
                        type='email'
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required />

                    <FormInput
                        label='password'
                        type='password'
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />

                    <input type="submit" value="Log In" />
                </form>
            </div>
        )
    }
}

export default Example;