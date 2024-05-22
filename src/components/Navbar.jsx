import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex alignItems="center">
        <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
          Survival Game
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/login" color="white" mx={2}>
          Login
        </Link>
        <Link as={RouterLink} to="/register" color="white" mx={2}>
          Register
        </Link>
        <Link as={RouterLink} to="/game" color="white" mx={2}>
          Game
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;