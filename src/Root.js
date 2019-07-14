import React from 'react'
import ShoppingList from './ShoppingList'
import AccountForm from './AccountForm'

class Title extends React.Component {
  render() {
    return(<h1>Welcome, AARP!</h1>)
  }
}

// Base of the app
export default class Root extends React.Component {
  render() {
    return <div>
      <Title/>
      <ShoppingList />
      <AccountForm />
    </div>
  }
}
