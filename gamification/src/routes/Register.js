import React from 'react';
import { Button, Input } from 'antd';
import { gql, graphql } from 'react-apollo';
import '././../App.css';
import logo from '././../hackathon.png';
import { Redirect, Link } from 'react-router-dom';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName:'',
    phoneNum:'',
    redirect: false
  }

  onChange = (e) => {
    console.log(e.target);
      this.setState({
        [e.target.name]: e.target.value,
      });
   
  }

  onSubmit = async () => {
    console.log(this.state);
    const response = await this.props.mutate({
      variables: this.state,
    });
    this.setState({ redirect: true ,username:'',phoneNum:'',password:'',lastName:'',firstName:'',email:''});
    console.log(response);
   return  <Redirect to='/login'/>;
   // return <Redirect to='/login'></Redirect>;
   
  }

  render() {
    const { redirect } = this.state;
    // if (redirect) {
    //   return <Redirect to='/login'/>;
    // }
    return (
      <div  className="App">
      <div><img src={logo} alt="logo" /></div><br/><br/>
      <span className="App-intro"><b>First Name: </b></span> <Input className="App-input"
          name='firstName'
          placeholder='FirstName'
          onChange={e => this.onChange(e)}
          value={this.state.firstName} /><br/><br/>
      <span className="App-intro"><b>Last Name: </b></span> <Input className="App-input"
          name='lastName'
          placeholder='LastName'
          onChange={e => this.onChange(e)}
          value={this.state.lastName} /><br/><br/>
       <span className="App-intro"><b>UserName: </b></span> <Input className="App-input"
          name='username'
          placeholder='Username'
          onChange={e => this.onChange(e)}
          value={this.state.username} /><br/><br/>
      <span className="App-intro"><b> Email:  </b></span>  <Input className="App-input"
          name='email'
          placeholder='Email'
          onChange={e => this.onChange(e)}
          value={this.state.email} /><br/><br/>
      <span className="App-intro"><b>Contact: </b></span> <Input className="App-input"
          name='phoneNum'
          placeholder='Contact'
          onChange={e => this.onChange(e)}
          value={this.state.phoneNum} /><br/><br/>
       <span className="App-intro"><b>Password: </b></span> <Input className="App-input"
          name='password'
          placeholder='Password'
          type='password'
          onChange={e => this.onChange(e)}
          value={this.state.password} /><br/><br/>
        
        <br />
        <Button onClick={() => this.onSubmit()} type="primary"><Link
                    to={"/hackathonList"}
                    key={this.props.active}
                    >
                     Register
                </Link></Button><div className="App-button"></div><span><Button type="primary"><Link to="/login" >Login</Link></Button></span>
       
      </div>
    );
  }
}

const mutation = gql`
mutation($username:String!,$firstName:String!,$lastName:String!,$phoneNum:String!,$email:String!,$password:String!) {
	addUser(username:$username,firstName: $firstName, lastName:$lastName,phoneNum:$phoneNum,email:$email,password:$password) {
	  id
	} 
}
`;

export default graphql(mutation)(Register);