import React, { useState } from 'react'

export default function Test04() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <h1>test04</h1>
      <div>
        {isLoggedIn ? (
          <p>Welcome, you are logged in!</p>
        ) : (
          <p>Please log in to access the content.</p>
        )}
      </div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login Status
      </button>
    </div>
  )
}
