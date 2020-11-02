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
          title="Home"
          keywords={[`blog`, `Russ Johnston`]}
        />
        //<img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>This is a page for Russ Johnston's thoughts, musings, notes, and et cetera...</p>
        <p>It isn't anything special, just a fun way to engage with the world. 
        </p>
        <c>
        <Link to="/blog/">
          <Button marginTop="35px">Onward</Button>
        </Link>
        </c>
      </Layout>
    )
  }
}

export default IndexPage
