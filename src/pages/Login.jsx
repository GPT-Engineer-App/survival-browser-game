import { Container, Heading, VStack, Input, Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl" color="teal.500">Login</Heading>
        <Input placeholder="Username" size="lg" />
        <Input placeholder="Password" type="password" size="lg" />
        <Button colorScheme="teal" size="lg" width="100%">Login</Button>
      </VStack>
    </Container>
  );
};

export default Login;