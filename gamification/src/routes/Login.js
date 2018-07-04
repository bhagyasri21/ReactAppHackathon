import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <h1>Login</h1>
    );
  }
}
//   constructor(props){
//     super(props);
//     this.state={
//     username:'',
//     password:''
//     }
//    }

//   render() {
//     return (
//       <div>
//         <MuiThemeProvider>
//           <div>
//           <AppBar
//              title="Login"
//            />
//            <TextField
//              hintText="Enter your Username"
//              floatingLabelText="Username"
//              onChange = {(event,newValue) => this.setState({username:newValue})}
//              />
//            <br/>
//              <TextField
//                type="password"
//                hintText="Enter your Password"
//                floatingLabelText="Password"
//                onChange = {(event,newValue) => this.setState({password:newValue})}
//                />
//              <br/>
//              <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
//          </div>
//          </MuiThemeProvider>
//       </div>
//     );
//   }
// }
// const style = {
//  margin: 15,
// };
//export default Login;
