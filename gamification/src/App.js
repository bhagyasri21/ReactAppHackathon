import React, { Component } from 'react';
import { Button, Input, Checkbox } from 'antd';
import { gql, graphql } from 'react-apollo';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createNetworkInterface } from 'react-apollo';

import 'antd/dist/antd.css';
const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4002/graphql',
  });
  const client = new ApolloClient({
    networkInterface: networkInterface
  });

const ChannelsList = () =>
     (<ul>
       <li>Channel 1</li>
       <li>Channel 2</li>
     </ul>);

class App1 extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    isAdmin: false,
  }

  onChange = (e) => {
    if (e.target.name === 'isAdmin') {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state,
    });
    console.log(response);
  }
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
      //     <h1 className="App-title">Hackathon User</h1>
      //   </header>
      //   <ChannelsList />
      // </div>
      <ApolloProvider client={client}>
      <div>
        <Input
          name='username'
          placeholder='Username'
          onChange={e => this.onChange(e)}
          value={this.state.username} />
        <Input
          name='email'
          placeholder='Email'
          onChange={e => this.onChange(e)}
          value={this.state.email} />
        <Input
          name='password'
          placeholder='Password'
          type='password'
          onChange={e => this.onChange(e)}
          value={this.state.password} />
        <Checkbox
          name='isAdmin'
          checked={this.state.isAdmin}
          onChange={e => this.onChange(e)}
        >
          Admin?
        </Checkbox>
        <br />
        <Button onClick={() => this.onSubmit()} type="primary">Primary</Button>
      </div>
      </ApolloProvider>
    );
  }
}
const mutation = gql`
mutation($username: String!) {
	addUser(name: $username) {
	  id
	} 
}
`;
export default graphql(mutation) (App1);
