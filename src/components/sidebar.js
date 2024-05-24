import { VStack } from '@chakra-ui/react';
import React from 'react';
import Card from './card';
const Sidebar = () => {
    return (
        <VStack>
            <Card variant='sidebar' title="Card title" description="Card description" />
            <Card variant='sidebar' title="Card title" description="Card description" />
            <Card variant='sidebar' title="Card title" description="Card description" />

        </VStack>
    );
};

export default Sidebar;