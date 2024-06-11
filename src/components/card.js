import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link'

const Card = ({ title, description, image, downloadLink, cta, ctaLink, phone }) => {
    return (
        <Flex
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="4"
            gap='4'
            boxShadow="md"
            flexDirection="column"
            width='full'
        >
            {image && <Image src="/1.webp" alt="Picture of the author" height={500} width={1000} />}
            {title && <Text fontSize="xl" fontWeight="bold" >{title}</Text>}
            {description && <Text>{description}</Text>}
            {cta && ctaLink &&
                <Link width='full' href={ctaLink}><Button width='full'>{cta}</Button></Link>}
            {phone && <Button as='a' href={phone}>Bel ons nu</Button>}
            {downloadLink && <Button as='a' href={downloadLink}>Download</Button>}
        </Flex>
    );
};

export default Card;