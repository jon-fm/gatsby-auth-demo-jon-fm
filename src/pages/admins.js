import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AdminPage = () => {
  const [dogUrl, setDogUrl] = useState('')

  useEffect(() => {
    fetch('https://random.dog/woof.json')
      .then(resp => resp.json())
      .then(obj => setDogUrl(obj.url))
  }, [])

  return (
    < Layout >
      <SEO title="Page two" />
      <h1>Welcome to the admin's area</h1>
      <Link to="/">Go back to the homepage</Link>

      <p>Here's a cute dog :)</p>
      <div>
        {dogUrl && <img src={dogUrl} alt="Random cute cat" />}
      </div>
    </Layout >
  )
}

export default AdminPage
