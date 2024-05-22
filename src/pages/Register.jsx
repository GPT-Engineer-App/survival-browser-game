import { Container, Heading, VStack, Input, Button } from "@chakra-ui/react";

const Register = () => {
  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl" color="teal.500">Register</Heading>
        <Input placeholder="Username" size="lg" />
        <Input placeholder="Email" size="lg" />
        <Input placeholder="Password" type="password" size="lg" />
        <Button colorScheme="teal" size="lg" width="100%">Register</Button>
      </VStack>
    </Container>
  );
};

export default Register;