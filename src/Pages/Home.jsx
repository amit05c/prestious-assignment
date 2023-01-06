import { Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Text fontSize={"4xl"} textAlign={"center"}>
        Home Page
      </Text>

      <Flex gap={"1rem"} mt="auto"  justify="center">
        <Button>
          <NavLink to="/about">About</NavLink>
        </Button>
        <Button>
          <NavLink to="/headtail">Head & Tail </NavLink>
        </Button>
      </Flex>
    </Container>
  );
};

export default Home;
