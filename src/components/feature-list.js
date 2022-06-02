import * as React from "react"
import { graphql } from "gatsby"
import { Container, Box, Kicker, Heading, Text, Nudge } from "./ui"
import Feature from "./feature"

export default function FeatureList(props) {
  return (
    <Container width="fullbleed">
      <Box background="primary" radius="large">
        <Box center paddingY={5}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          <Box paddingX={5}>
            {props.text && <Text>{props.text}</Text>}
          </Box>
        </Box>
        {props.content.map((feature, i) => (
          <Feature key={feature.id} {...feature} flip={Boolean(i % 2)} />
        ))}
      </Box>
      <Nudge top={5}>
        <Box background="primary" radius="large" center paddingY={5} marginTop={10}>
        <iframe src="https://coda.io/embed/hGxzDe1pvk/_suIhT" width="900" height="500" Style="max-width: 100%;" allow="fullscreen"></iframe>
        </Box>
      </Nudge>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
