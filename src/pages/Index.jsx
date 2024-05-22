import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="teal.500">Welcome to Survival Game</Heading>
        <Text fontSize="lg" textAlign="center">Embark on an epic survival adventure. Create an account, explore the map, complete quests, and collect loot to survive!</Text>
        <Box boxSize="sm">
          <Image src="/images/survival-theme.jpg" alt="Survival Theme" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;