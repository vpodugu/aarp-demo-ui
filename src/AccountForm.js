import React from 'react'

class AccountForm extends React.Component {
  constructor() {
    super();
    this.state = {
      accountNumber : '',
      recordId : '',
      email : '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(event) {
   alert('A name was submitted: ' + this.state.value);
   event.preventDefault();
   console.log('Account ID : ' + this.state.accountNumber);
   console.log('Record ID : ' + this.state.recordId);
   console.log('email : ' + this.state.email);

   const url ="https://jsonplaceholder.typicode.com/users/"
   const data = { name:'Venkat', email:'vpodugu@gmail.com' }
   fetch(url, {
     method: 'POST', // or ‘PUT’
     body: JSON.stringify(data), // data can be `string` or {object}!
     headers:{ 'Content-Type': 'application/json' } }
   ).then(res => res.json())
   .catch(error => console.error('Error:', error))
   .then(response => console.log('Success:', response));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label className="col-2 col-form-label">Account Number</label>
          <div className="col-10">
            <input className="form-control" type="text"
                value={this.state.accountNumber}
                onChange={ event => this.setState({accountNumber : event.target.value})} />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-2 col-form-label">Record ID</label>
          <div className="col-10">
            <input className="form-control" type="search"
              value={this.state.recordId}
              onChange={ event => this.setState({recordId : event.target.value})} />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-2 col-form-label">Email</label>
          <div className="col-10">
            <input className="form-control" type="email"
              value={this.state.email}
              onChange={event => this.setState({email : event.target.value})} />
          </div>
        </div>

        <input type="submit" value="Submit" />
</form>
    )
  }
}

export default AccountForm
