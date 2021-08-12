import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <Flex direction="column" height="100vh">
      <Head>
        <title>World Trip | Home</title>
      </Head>
      <Header />
    </Flex>
  )
}
