import React, {Component} from 'react';
import { gql, graphql } from 'react-apollo';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
class HackathonDetails extends Component {

  onSubmit = async () => {
    console.log(this.state);
   alert("Successfully registered");
   
  }
  render(){
    console.log(this.props.match.params.id);
      return (<div  className="App">
      <h1>HackathonDetails</h1>
      <h2><b>Event Name:</b>{this.props.match.params.id}</h2>
      <h3>Ready to take up challenge ? </h3>
      <Button onClick={() => this.onSubmit()} type="primary">
      <Link
                    to={"/hackathonList"}
                    key={this.props.active}
                    >
                     Confirm</Link>
                 </Button>
      </div>);
  }
}
const AllParams = gql`

query {  
    hackathons {
      eventName,
      summary,
      startDate,
      endDate
    }
  }`;

export default graphql(AllParams)(HackathonDetails);