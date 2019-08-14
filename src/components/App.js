import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class App extends Component {
  state = {
    gifts: []
  }

  addGift = () => {
    const { gifts } = this.state

    const ids = this.state.gifts.map(gift => gift.id)
    const maxId = ids.length > 0 ? Math.max(...ids) : 0

    gifts.push({ id: maxId + 1 })

    this.setState({ gifts })
  }

  render() {
    return (
      <div>
        <h1>Gift giver?</h1>
        <Button className="btn-add" onClick={this.addGift}>
          Add gift
        </Button>
        <div className="gift-list">
          {
            this.state.gifts.map(gift => <div key={gift.id}>hello</div>)
          }
        </div>
      </div>
    )
  }
}
