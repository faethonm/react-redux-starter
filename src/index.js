import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAjayGSi1lXchv24wWm__-cnbCM0kSfopI';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('.container'));
