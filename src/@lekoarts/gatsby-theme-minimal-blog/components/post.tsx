/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "./layout"
import ItemTags from "./item-tags"
import SEO from "./seo"
type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      entry: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      body: string
      excerpt: string
      timeToRead: number
      banner?: {
        GatsbyImageSharpFluid_withWebp_tracedSVG: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}
const Post = ({ data: { post } }: PostProps) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.GatsbyImageSharpFluid_withWebp_tracedSVG.resize.src : undefined}
    />
    <Styled.h2>{post.title}</Styled.h2>
    <p sx={{ color: `secondary`, mt: 2, a: { color: `secondary` }, fontSize: [2, 2, 3] }}>
      {post.description}
    </p>
    <p sx={{ color: `secondary`, mt: 2, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>

      {post.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
      {` — `}
      <span>{post.timeToRead} min read</span>
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout>
)

export default Post