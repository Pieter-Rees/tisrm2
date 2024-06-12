import React from 'react';
import { Flex, Text, Button, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import Image from 'next/image';

const CardElement = ({ title, description, image, downloadLink, cta, ctaLink, phone, buttonVariant = 'solid' }) => {
    const hasCta = cta || phone || downloadLink;
    return (
        <Card>
            {image && <Image src="/1.webp" alt="Picture of the author" height={500} width={1000} />}
            {title && <CardHeader><Text fontSize="2xl" fontWeight="bold" >{title}</Text></CardHeader>}
            {description && <CardBody><Text>{description}</Text></CardBody>}

            {hasCta &&
                <CardFooter>
                    {cta && ctaLink &&
                        <Button as='a' href={ctaLink} variant={buttonVariant} width='100%' minWidth='100%'>{cta}</Button>}
                    {phone && <Button as='a' href={phone} variant={buttonVariant}>Bel ons nu</Button>}
                    {downloadLink && <Button as='a' href={downloadLink} variant={buttonVariant}>Download</Button>}
                </CardFooter>}
        </Card>

    );
};

export default CardElement;