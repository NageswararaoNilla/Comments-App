import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

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

const initialComments = [
  {
    id: uuidv4(),
    name: 'Richard Branson',
    comment:
      'Thanks for being so typically supportive and such a good friend,Elon.Great to be opening up space for all.',
    timeUpdate: formatDistanceToNow(new Date()),
    isLiked: false,
  },
]

// Write your code here
const commentImg =
  'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'

class Comments extends Component {
  state = {commentsList: initialComments, name: '', comment: ''}

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onSubmitComment = event => {
    const {name, comment} = this.state
    event.preventDefault()
    const timeUpdate = formatDistanceToNow(new Date())
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      timeUpdate,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  render() {
    const {commentsList} = this.state
    const len = commentsList.length
    // const bgColor = this.getBgColor()
    // console.log(commentsList, bgColor)
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
              <form className="form-container" onSubmit={this.onSubmitComment}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="user-name"
                  onChange={this.onName}
                />
                <textarea
                  rows="5"
                  cols="50"
                  placeholder="Your Comment"
                  className="input-comment"
                  onChange={this.onComment}
                />
                <button type="submit" className="btn">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="comments-list-container">
          <p className="count-comments">
            <span className="count">{len}</span>Comments
          </p>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                commentDetails={eachComment}
                key={eachComment.id}
                bgColors={initialContainerBackgroundClassNames}
                toggleIsLiked={this.toggleIsLiked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
