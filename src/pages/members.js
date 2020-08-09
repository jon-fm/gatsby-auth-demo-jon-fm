import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to the member's area</h1>
    <Link to="/">Go back to the homepage</Link>

    <p>Here's a cute cat :)</p>
    <div>
      <img src="https://cataas.com/cat" alt="Random cute cat" />
    </div>
  </Layout>
)

export default SecondPage
