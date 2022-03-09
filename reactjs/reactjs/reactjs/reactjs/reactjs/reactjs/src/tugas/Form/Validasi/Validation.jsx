import React from "react";
import * as Validator from 'validatorjs';
const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label>{label}:</label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}


const ShowErrors = ({ errors }) => {
    return (
        <ul style={{color: 'red', marginleft: '-20px'}}>
            {errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
    )
 }

 class Validation extends React.Component { 
     state = {
         email: '',
         pasword: '',
         errors: []
    }
     
     handleSubmit = event => {
         event.preventDefault();
         
         const { email, pasword } = this.state;
         
         let data = { email, pasword };

         let rules = {
           
             email: 'required|email',
             pasword: 'required|min:8'
         };
         let validation = new Validator(data, rules);
         validation.passes();
         this.setState({
            errors: [
             ...validation.errors.get('email'),
             ...validation.errors.get('pasword')
         ]
         })
     }
     
    render() {
        const style = {
            width: '500px',
            margin: '100px auto 0',
            border: '10px solid dodgerblue',
            padding: '10px',
            color: 'dodgerblue',
            borderRadius: '20px',
            
        }

        return (
            <div style={style}>
                {
                    this.state.errors  && <ShowErrors errors={this.state.errors} />
                }
                <h3>Login Page Eduwork</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input type='email' name='email' label='email' onChange={value => this.setState({email: value})}/>
                    <Input type='password' name='password' label='password' onChange={value => this.setState({pasword: value})} />
                    <br />
                    <button type="submit" style={{color: 'black'}}>Log in</button>
                </form>
          </div>
      )
  }
    
}
export default Validation;