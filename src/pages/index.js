import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Public / Index root page</h2>
    <p>This page is accessible to all users <span role="img" aria-label="Ok-hand">👌🏻</span></p>
    <Link to="/members/">Go to members page</Link> <br />
    <Link to="/admins/">Go to admins page</Link> <br />
  </Layout>
)

export default IndexPage
