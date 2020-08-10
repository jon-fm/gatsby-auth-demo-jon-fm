import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import netlifyIdentity from 'netlify-identity-widget'

const Header = ({ siteTitle }) => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    netlifyIdentity.init()
    setCurrentUser(netlifyIdentity.currentUser())
  }, [])

  return (
    <header
      style={{
        background: `#2778CE`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
          justifyContent: `space-between`
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <button
          style={{
            display: 'inline-block',
            border: `.2rem solid white`,
            borderRadius: `0.5rem`,
            background: `white`,
            color: `#2778ce`,
            cursor: `pointer`
          }}
          onClick={() => netlifyIdentity.open()}>
          {currentUser ? `Welcome ${currentUser?.user_metadata?.full_name || "Friend"}` : 'Login / Sign Up'}
        </button>
      </div>
    </header>
  )
}

export default Header
