import React, { Component } from 'react'
import './display.css'

let text = "This is were your text will be displayed";

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
          <div className="Display">
          <Display />
          <form className="Centered-Content">
              <button >Update text</button>
          </form>
          </div>
        )
        }
}