import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
const Card = ({ title, description, image, downloadLink }) => {
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
            {image && <Image src="/1.webp" alt="Picture of the author" height={500} width={1000} />}
            {title && <Text fontSize="xl" fontWeight="bold" >{title}</Text>}
            {description && <Text>{description}</Text>}
            {downloadLink && <Button as='a' href={downloadLink}>Download</Button>}
        </Flex>
    );
};

export default Card;