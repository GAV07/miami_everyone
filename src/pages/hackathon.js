import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

export default function Hackathon(props) {
  const { hackathonPage } = props.data

  return (
    <Layout {...hackathonPage}>
      {hackathonPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    hackathonPage {
      id
      title
      description
      blocks: content {
        id
        blocktype
        ...AboutHeroContent
        ...HomepageCtaContent
        ...AboutStatListContent
        ...HomepageStatListContent
      }
    }
  }
`
