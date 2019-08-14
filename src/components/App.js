import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './Gift'
import { max_number } from '../helper'

export default class App extends Component {
  state = {
    gifts: []
  }

  addGift = () => {
    const { gifts } = this.state
    gifts.push({ id: max_number(this.state.gifts.map(gift => gift.id)) + 1 })
    this.setState({ gifts })
  }

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id)
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
            this.state.gifts.map(gift => <Gift
              key={gift.id}
              gift={gift}
              removeGift={this.removeGift}
            />)
          }
        </div>
      </div>
    )
  }
}
