import { Container, Heading, VStack, Box, Text } from "@chakra-ui/react";

const Game = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl" color="teal.500">Game Interface</Heading>
        <Box width="100%" height="400px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="lg">Map Placeholder</Text>
        </Box>
        <Box width="100%" height="200px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="lg">Quests Placeholder</Text>
        </Box>
        <Box width="100%" height="200px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="lg">Loot Placeholder</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Game;