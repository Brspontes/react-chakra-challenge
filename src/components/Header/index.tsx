import { Flex, Image } from '@chakra-ui/react'

export default function Header () {
  return (
    <Flex as="header" width="100%" maxWidth={1480} height="20" justifyContent="center" marginX="auto" marginTop="4" paddingX="6" align="center">
      <Image src="/Logo.png" />
    </Flex>
  )
}
