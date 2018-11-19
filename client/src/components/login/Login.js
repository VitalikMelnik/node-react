import React from "react";
import { FormErrors } from './Form_errors';
import './_login.css'

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            formErrors: {email: '', password: '', second_password:''},
            emailValid: false,
            passwordValid: false,
            passwordConfValid: false,
            formValid: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault()
        var data = {
            email: this.state.email ,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm
        }
        fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
                console.log(data);
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {

            console.log(data);
            if (data === "success") {
                this.setState({
                    msg: "Flag Reason has been edited."
                });
                console.log('Successful Update!');
            }
        }).catch(function(err) {
            console.log(err)
        });
        console.log(data);
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let passwordConfValid = this.state.passwordConfValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            case 'passwordConfirm':
                passwordConfValid = value === this.state.password;
                fieldValidationErrors.second_password = passwordConfValid ? '' : 'not coincide with first';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            passwordConfValid : passwordConfValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.passwordConfValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    render(){
        return(
            <div className="login">
                <form className="login-container" onSubmit={this.handleSubmit}>
                    <p className="login-header">Sign up</p>
                    <div className="login-err">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <div className={`${this.errorClass(this.state.formErrors.email)}`}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" required  name="email"
                               placeholder="Email"
                               value={this.state.email}
                               onChange={this.handleUserInput}  />
                    </div>
                    <div className={`${this.errorClass(this.state.formErrors.password)}`}>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"
                               placeholder="Password"
                               value={this.state.password}
                               onChange={this.handleUserInput}  />
                    </div>
                    <div className={`${this.errorClass(this.state.formErrors.second_password)}`}>
                        <label htmlFor="passwordconf">Password Confirm</label>
                        <input type="password" name="passwordConfirm"
                               placeholder="Password Confirm"
                               value={this.state.passwordConfirm}
                               onChange={this.handleUserInput}  />
                    </div>

                    <button type="submit" className="btn btn-primary"  disabled={!this.state.formValid}>Sign up</button>
                </form>
            </div>
        );
    }
}

export default Login