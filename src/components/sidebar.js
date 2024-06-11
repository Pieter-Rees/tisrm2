import { VStack } from '@chakra-ui/react';
import React from 'react';
import Card from './card';

const Sidebar = () => {
    return (
        <VStack gap='8'>
            <Card variant='sidebar' title="Verzekering afsluiten" cta='Offerte aanvragen' ctaLink='/offerte' buttonVariant='blue' />
            <Card variant='sidebar' title="Formulieren" description="Download nu direct belangrijke formulieren voor uw schadeafhandeling" cta='Downloads' ctaLink='/downloads' />
            <Card variant='sidebar' title="Vragen?" cta='Bel ons nu' phone='tel:+31612589043' />
        </VStack>
    );
};

export default Sidebar;