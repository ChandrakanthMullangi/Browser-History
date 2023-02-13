import './App.css'

import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    latestHistoryList: initialHistoryList,
    isTrue: false,
  }

  deleteFunction = value => {
    const {latestHistoryList} = this.state

    const newHistoryList = latestHistoryList.filter(
      eachHistory => eachHistory.id !== value,
    )

    if (newHistoryList.length === 0) {
      this.setState({latestHistoryList: newHistoryList, isTrue: true})
    } else {
      this.setState({latestHistoryList: newHistoryList})
    }
  }

  changeFunction = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, latestHistoryList} = this.state
    let {isTrue} = this.state

    const newHistoryList = latestHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (newHistoryList.length === 0) {
      isTrue = true
    }

    return (
      <div className="bg-container">
        <div className="history-section-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="app logo"
          />
          <div className="history-search-input-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              type="search"
              className="search-history-input"
              placeholder="Search History"
              value={searchInput}
              onChange={this.changeFunction}
            />
          </div>
        </div>
        <div className="history-list-container">
          {!isTrue && (
            <ul className="history-list">
              {newHistoryList.map(eachHistory => (
                <li
                  key={eachHistory.id}
                  uniqueId={eachHistory.id}
                  className="history"
                >
                  <p className="time">{eachHistory.timeAccessed}</p>
                  <div className="domain-container">
                    <img
                      src={eachHistory.logoUrl}
                      className="domain-logo"
                      alt="domain logo"
                    />
                    <div className="domain-content-container">
                      <p className="domain-name"> {eachHistory.title} </p>
                      <p className="domain-url"> {eachHistory.domainUrl} </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-testid="delete"
                    className="delete-button"
                    onClick={() => this.deleteFunction(eachHistory.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      alt="delete"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
          {isTrue && (
            <div className="empty-history-list-container">
              <p className="empty-history-list-description">
                There is no history to show
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
