import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPost = ({ data }) => {
  const {
    posts: { title, tags, html },
  } = data

  return (
    <Layout>
      <Seo title={title}></Seo>
      <div id="main">
        <a href="/">
          <h2>Home</h2>
        </a>
        <div>{tags && tags.join(", ")}</div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    posts(slug: { eq: $slug }) {
      color
      content_type
      cover_image
      desc
      created_time
      details
      publish_date {
        includeTime
        startDate
      }
      html
      id
      parent {
        id
      }
      last_edited_time
      slug
      title
      read_time
      status
      tags
      url
    }
  }
`
