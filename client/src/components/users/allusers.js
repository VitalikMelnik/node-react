import React, { Component } from 'react';

export default class AllUsers extends Component {
  constructor(props) {
      super(props)
      // console.log(props)
      this.state = {
        members: []
      }
      this.logChange = this.logChange.bind(this);
  }
  componentDidMount() {
    let self = this;
    fetch('/users')
      .then(res => res.json())
      .then(posts => this.setState({ members: posts }));

  }


  logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }
  render() {
      console.log(this.state.members)
    return (
        <div className="Users container">
          <h1>Users</h1>
          <table className="table">
          <thead>
            <tr>
              <th>Member name</th>
              <th>Member email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {this.state.members.map(member =>
                <tr key={member.id}>
                  <td>{member.name} {member.title}</td>
                  <td>{member.text}</td>
                  <td><button className="btn btn-primary">Edit</button> <button className="btn btn-danger">Delete</button></td>
                </tr>
              )}
          </tbody>
          </table>
        </div>
    );
  }
}
