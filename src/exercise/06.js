// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = React.useState('');

  function handleOnChange(event) {
    const { value } = event.target;

    setInputValue(value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmitUsername(inputValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Username:</label>
        <input
          id="name"
          type="text"
          value={inputValue}
          onChange={handleOnChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  function onSubmitUsername(username) {
    alert(`You entered: ${username}`);
  }

  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App;
