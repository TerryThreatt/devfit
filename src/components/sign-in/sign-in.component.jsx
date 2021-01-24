import React from 'react'

import './sign-in.styles.scss'


class SignIn extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = e => {
        e.preventDefault()

        this.setState({
            const {name, value} = e.taget
            [email]: [value]
        })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" value={this.state.email} required />
                    <label>Email</label>
                    <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required/>
                    <label>Password</label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default SignIn