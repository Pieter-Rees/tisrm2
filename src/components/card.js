import React from 'react';
import { Box, Text, Button, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

const CardElement = ({ title, description, image, altText, downloadLink, cta, ctaLink, phone, buttonVariant = 'solid' }) => {
    const hasCta = cta || phone || downloadLink;
    return (
        <Card>
            <CardHeader>
                {image &&
                    <Box overflow='hidden' borderTopRadius='lg' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} height='200px'>
                    </Box>
                }
                {title &&
                    <Box >
                        <Text margin='0' fontSize="2xl" fontWeight="bold" paddingX='4' marginTop='4'>{title}</Text>
                    </Box>}
            </CardHeader>
            {description && <CardBody><Text margin='0'>{description}</Text></CardBody>}

            {hasCta &&
                <CardFooter>
                    {cta && ctaLink &&
                        <Button as='a' href={ctaLink} variant={buttonVariant} width='100%' minWidth='100%'>{cta}</Button>}
                    {phone && <Button as='a' href={phone} variant={buttonVariant} width='100%'>Bel ons nu</Button>}
                    {downloadLink && <Button as='a' href={downloadLink} variant={buttonVariant}>Download</Button>}
                </CardFooter>}
        </Card>

    );
};

export default CardElement;