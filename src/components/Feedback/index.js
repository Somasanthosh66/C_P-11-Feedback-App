// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    changeFeedBack: true,
  }

  showResult = () => {
    this.setState({changeFeedBack: false})
    console.log(this.showResult)
  }

  render() {
    const {changeFeedBack} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {changeFeedBack ? (
          <div className="sub-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-container">
              {emojis.map(each => (
                <li className="list-item" key={each.id}>
                  <button
                    type="button"
                    className="button"
                    onClick={this.showResult}
                  >
                    <img
                      src={each.imageUrl}
                      alt={each.name}
                      className="image-card"
                    />
                    <span className="name-card">{each.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="love-emoji-container">
            <img
              src={loveEmojiUrl}
              alt="love emoji"
              className="love-image-card"
            />
            <h1 className="thank-you">Thank You!</h1>
            <p className="thankyou-text">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
