import { Link } from "gatsby"
import React, { useEffect } from "react"
import netlifyIdentity from 'netlify-identity-widget'

const Header = ({ siteTitle }) => {
  useEffect(() => {
    netlifyIdentity.init()
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
            color: `#2778ce`
          }}
          onClick={() => netlifyIdentity.open()}>
          {netlifyIdentity.user ? 'Welcome' : 'Login / Sign Up'}
        </button>
        {/* <div data-netlify-identity-menu /> */}
      </div>
    </header>
  )
}

export default Header
