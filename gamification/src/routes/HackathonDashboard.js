import React, { Component, PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';
import { Button } from 'antd';
import '././../App.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import {BootstrapTable,
    TableHeaderColumn} from 'react-bootstrap-table';
    import { Link } from 'react-router-dom';
  
    class ActiveFormatter extends React.Component {
        render() {
            console.log(this.props.active);
            var id = this.props.active;
          return (
            <Button type="primary">
            <Link
                    to={"/hack/"+this.props.active}
                    key={this.props.active}
                    >
                     Register
                </Link>
          </Button>
          );
        }
      }
     
      function activeFormatter(cell, row, enumObject, index) {
        console.log(`The row index: ${row}`);
        console.log(`The row index123: ${row}.eventName`, {row}.row.eventName);
        return (
          <ActiveFormatter active={ {row}.row.eventName } />
        );
      }
class HackathonDashboard extends Component {
    
    render() {
        const { data: { loading, error, hackathons } } = this.props;
        if (loading) {
          return <p>Loading...</p>;
        } else if (error) {
          return <p>Error!</p>;
        } else {
          return (
          
                <div className="App">
                     <p className="Table-header"><b>Hackathon Dashboard</b></p>
           <BootstrapTable data={this.props.data.hackathons}>
           <TableHeaderColumn width='150' dataField='eventName' isKey>Event Name</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='summary'>Description</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='startDate'>Start Date</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='endDate'>End Date</TableHeaderColumn>
          <TableHeaderColumn dataField='active' dataFormat={ activeFormatter }>Active</TableHeaderColumn>
         
        </BootstrapTable>
      </div>
             
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