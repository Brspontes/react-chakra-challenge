import { Flex, Box, SimpleGrid, Text, Image, useBreakpointValue, Divider, Center } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex direction="column" height="100vh">
      <Head>
        <title>World Trip | Home</title>
      </Head>
      <Header />
      <Flex marginTop="4" height={370} width="100%" backgroundImage="/Background.png" backgroundRepeat="round" justifyContent="space-between">
        <Box marginLeft={["2","10","40"]} marginTop={["2","5","10"]} >
          <SimpleGrid column="1">
            <Text fontSize="4xl" color="gray.50" >5 Continentes, <br /> Infinitas posiibilidades</Text>
            <Text fontSize="lg" color="gray.50" marginTop="8" >
              Chegou a hrora de tirar do papel a viagem que sempre sonhou
            </Text>
          </SimpleGrid>
        </Box>
        {isWideVersion && (
          <Box marginRight="36" marginTop="8">
            <Image src="/Airplane.png"  marginTop="20" resize="block"/>
          </Box>
        )}
      </Flex>
      <Flex width="100%" maxWidth={1480} margin="auto" align="center" justifyContent="center">
        {isWideVersion ?
          (<Image src="/Travel_types.png"  marginTop="20" resize="block"/>) :
          (<Image src="/Travel_types_mobile.png"  marginTop="20" resize="block"/>)
        }
      </Flex>
      <Flex width="100%" maxWidth={1480} margin="auto" align="center" justifyContent="center">
        <Center marginTop="20" width={100}>
          <Divider colorScheme="blackAlpha" orientation="horizontal" />
        </Center>
      </Flex>
      <Flex width="100%" maxWidth={1480} margin="auto" align="center" justifyContent="center">
        <Center marginTop="20" width={1480}>
          <Text align="center" fontSize={["2xl","4xl"]} color="gray.700">
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
        </Center>
      </Flex>
    </Flex>
  )
}
