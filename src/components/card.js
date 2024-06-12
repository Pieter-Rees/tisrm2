import React from 'react';
import { Flex, Text, Button, Card, CardHeader } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link'

const CardElement = ({ title, description, image, downloadLink, cta, ctaLink, phone, buttonVariant = 'solid' }) => {
    return (
        <Card>
            {image && <Image src="/1.webp" alt="Picture of the author" height={500} width={1000} />}
            {title && <CardHeader><Text fontSize="2xl" fontWeight="bold" >{title}</Text></CardHeader>}
            {description && <Text>{description}</Text>}
            {cta && ctaLink &&
                <Link width='full' href={ctaLink}><Button width='full' variant={buttonVariant}>{cta}</Button></Link>}
            {phone && <Button as='a' href={phone} variant={buttonVariant}>Bel ons nu</Button>}
            {downloadLink && <Button as='a' href={downloadLink} variant={buttonVariant}>Download</Button>}
        </Card>

    );
};

export default CardElement;