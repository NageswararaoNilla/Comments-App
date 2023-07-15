import {Component} from 'react'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const commentImg =
  'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'

class Comments extends Component {
  state = {name: '', comment: ''}

  getBgColor = () => {
    const index = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const bgColor = initialContainerBackgroundClassNames[index]
    return bgColor
  }

  onSubmit = event => {
    event.preventDefault()
  }

  render() {
    const {name, comment} = this.state
    const bgColor = this.getBgColor()
    console.log(name, comment, bgColor)
    return (
      <div className="app-container">
        <div className="comments-banner-container">
          <h1 className="heading">Comments</h1>
          <div className="input-img-container">
            <div className="img-container">
              <img src={commentImg} alt="comments" className="comments-img" />
            </div>
            <div className="input-container">
              <p className="description">
                Say something about 4.0 Technologies
              </p>
              <form className="form-container" onClick={this.onSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="user-name"
                />
                <textarea
                  rows="5"
                  cols="50"
                  placeholder="Your Comment"
                  className="input-comment"
                />
                <button type="button" className="btn">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="comments-list-container">
          <p className="count-comments">
            <span className="count">0</span>Comments
          </p>
          <ul className="comments-list">
            <li>Comment</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
