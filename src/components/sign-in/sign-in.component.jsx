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
        const { name, value} = e.target
        e.preventDefault()
        this.setState({
            [name]: [value]
        })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    {" "}
                    <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required />
                    {" "}
                    <label>Password</label>
                    {" "}
                    <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required/>
                    {" "}
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default SignIn