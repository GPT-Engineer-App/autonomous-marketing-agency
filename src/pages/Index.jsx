import React, { useState } from "react";
import { Box, Heading, Text, VStack, Button, Textarea, Grid, Image, useToast } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [brandGuidelines, setBrandGuidelines] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    // TODO: Pass brand guidelines to different agents for content creation
    toast({
      title: "Content creation started",
      description: "Our agents are working on your content.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <VStack spacing={8} alignItems="center" textAlign="center">
        <Heading as="h1" size="2xl">
          Autonomous Content Marketing Agency
        </Heading>
        <Text fontSize="xl" maxW="2xl">
          Input your brand guidelines and tone, and our specialized agents will create tailored content across various channels to boost your brand's online presence.
        </Text>
        <Image src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFya2V0aW5nJTIwdGVhbXxlbnwwfHx8fDE3MTA1MTIwMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Content marketing team" maxW="2xl" />
        <Textarea value={brandGuidelines} onChange={(e) => setBrandGuidelines(e.target.value)} placeholder="Enter your brand guidelines and tone here..." size="lg" minH="200px" />
        <Button leftIcon={<FaRocket />} colorScheme="blue" size="lg" onClick={handleSubmit}>
          Start Content Creation
        </Button>
      </VStack>
      <Grid templateColumns="repeat(2, 1fr)" gap={8} mt={16}>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Services
          </Heading>
          <VStack alignItems="start" spacing={4}>
            <Text>- Copywriting for landing pages</Text>
            <Text>- SEO-optimized blog writing</Text>
            <Text>- Social media graphics design</Text>
            <Text>- YouTube video scripting and content creation</Text>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Our Agents
          </Heading>
          <VStack alignItems="start" spacing={4}>
            <Text>- Expert copywriters</Text>
            <Text>- SEO specialists</Text>
            <Text>- Graphic designers</Text>
            <Text>- Video content creators</Text>
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Index;
