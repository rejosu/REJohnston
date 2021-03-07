import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "RE:Johnston"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="RE:Johnston"
          keywords={[`blog`, `Russ Johnston`]}
        />
        
        <h1>
          Hey people{" "}
        </h1>
        <p>This is a page for Russ Johnston's thoughts, musings, notes, and et cetera...</p>
        <p>It isn't anything special, just a fun way to engage with the world. </p>
        <c>
        <Link to="/blog/">
          <Button marginTop="35px">RE:Johnston Blog</Button>
        </Link>
        </c>
      </Layout>
    )
  }
}

export default IndexPage

          /*
          <span role="img" aria-label="wave emoji">
            👋
          </span>
          */