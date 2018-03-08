import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router'
import { BrowserRouter as Router, Route, IndexRedirect } from 'react-router-dom';
import { token } from './Login';
import ReactTable from "react-table";
import "react-table/react-table.css";

class Exam_room_management extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exam_conditions : [],
         }
    }

    // componentWillMount() {
    //     this.handleButton();
    // }

     handleButton = () => {
         let url = `http://58.196.130.215/EMS/admin/roomLists?token=${token}`;
         fetch(url)
         .then(function(response) {
             if (!response.ok) {
                 throw Error(response.statusText);
                }
                return response;
            }).then((response) => {
                response.json().then((data) => {
                     this.setState({exam_conditions: data});
                    // alert(this.state.exam_conditions[0].id);
                });
             }).catch((error) => {
                 console.log(error);
                });
            }

    render() {
        if (!this.state.exam_conditions[0]) {
            return (
                <button onClick={this.handleButton}>give out papers</button>
            );
         } 
         else {
            const { exam_conditions } = this.state;
            return (
                <ReactTable
                data={exam_conditions}
                columns={[
                  {
                    Header: "Id",
                    accessor: "id"
                  },
                  {
                    Header: "RegisteredNum",
                    accessor: "registeredNum"
                  },
                  {
                    Header: "RoomName",
                    accessor: "roomName"
                  },
                  {
                    Header: "StartTime",
                    accessor: "startTime"
                  },
                  {
                    Header: "Status",
                    accessor: "status"
                  },
                  {
                    Header: "TestNum",
                    accessor: "testNum"
                  },
                  {
                    Header: "Uid",
                    accessor: "uid"
                  },
                  {
                    Header: "UnRegisteredNum",
                    accessor: "unRegisteredNum"
                  }
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
              />
            )
        }
    }
}

export default Exam_room_management;