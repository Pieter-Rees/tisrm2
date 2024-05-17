import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
const Card = ({ title, description }) => {
    return (
        <Flex
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="4"
            gap='4'
            boxShadow="md"
            flexDirection="column"
        >
            <Image
                src="/1.webp"
                alt="Picture of the author"
                height={800}
                width={1000}
            />
            <Text fontSize="xl" fontWeight="bold" >
                {title}
            </Text>
            <Text>{description}</Text>
            <Button>
                Click me
            </Button>
        </Flex>
    );
};

export default Card;