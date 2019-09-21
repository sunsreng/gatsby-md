import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import ArticleList from "../components/article-list"

export default ({ data }) => (
  <Layout>
    <Title text="Welcome" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    </p>
    <ArticleList />
  </Layout>
)
