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
         

         // menampilkan error semua sebagai array
        //  console.log(validation.errors.all());
         
         
        // let message = [];

        //  if (email.length === 0) {
        //         message = [...message, 'Email harus diisi']
             
        //  }
        //  if (pasword.length === 0) {
        //         message = [...message, 'Pasword harus diisi']
         
        //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/   
        //      if (!re.test(String(email).toLocaleLowerCase()))
        //          message = [...message, 'Email tidak valid'];
        //  }
        //  if (pasword.length < 8) {
        //      message = [...message, 'Pasword minimal 8 karakter']
        //  }

        //  if (message.length > 0) {
        //         this.setState({
        //             error: message
        //         }, () => console.log(this.state.errors));
        //  }else {
        //      alert(`Login berhasil
        //      email: ${this.state.email} 
        //     pasword: ${this.state.pasword} `);
        //      this.setState({
        //          errors: []
        //      })
        // }
     }
     
    render() {
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }

        return (
            <div style={style}>
                {
                    this.state.errors  && <ShowErrors errors={this.state.errors} />
                }
                <h3>Login Page</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input type='email' name='email' label='email' onChange={value => this.setState({email: value})}/>
                    <Input type='password' name='password' label='password' onChange={value => this.setState({pasword: value})} />
                    <br />
                    <button type="submit">Login</button>
                </form>
          </div>
      )
  }
    
}
export default Validation;