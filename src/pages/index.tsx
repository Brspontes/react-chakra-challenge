import { Flex, Box, SimpleGrid, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <Flex direction="column" height="100vh">
      <Head>
        <title>World Trip | Home</title>
      </Head>
      <Header />
      <Flex marginTop="4" height={370} width="100%" backgroundImage="/Background.png" backgroundRepeat="round">
        <Box marginLeft={["2","10","40"]} marginTop={["2","5","10"]}>
          <SimpleGrid column="1">
            <Text fontSize="4xl" color="gray.50" >5 Continentes, <br /> Infinitas posiibilidades</Text>
            <Text fontSize="lg" color="gray.50" marginTop="8" >
              Chegou a hrora de tirar do papel a viagem que sempre sonhou
            </Text>
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  )
}
