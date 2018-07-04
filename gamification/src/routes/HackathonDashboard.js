import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

class HackathonDashboard extends Component {
    
    render() {
        const { data: { loading, error, hackathons } } = this.props;
        if (loading) {
          return <p>Loading...</p>;
        } else if (error) {
          return <p>Error!</p>;
        } else {
          return (
            <ul>
              {hackathons.map(({ id, eventName }) => (
                <li key={id}>{eventName}</li>
              ))}
            </ul>
          );
        }
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

export default graphql(AllParams)(HackathonDashboard);