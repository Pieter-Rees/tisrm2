'use client';

import { memo, type ReactNode } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { FadeInUp, StaggerContainer } from '@/components/page-animation';
import type { BaseComponentProps, ResponsiveValue } from '@/types/components';

interface AnimatedGridProps extends BaseComponentProps {
    /** Grid template columns */
    columns?: ResponsiveValue<string>;
    /** Gap between grid items */
    gap?: ResponsiveValue<string | number>;
    /** Stagger animation delay between items */
    staggerDelay?: number;
    /** Whether items should stretch to full height */
    stretch?: boolean;
    /** Custom grid item render function */
    renderItem?: (item: any, index: number) => ReactNode;
    /** Data items to render */
    items?: readonly any[];
}

const DEFAULT_COLUMNS = {
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
} as const;

const AnimatedGrid = memo<AnimatedGridProps>(({
    children,
    columns = DEFAULT_COLUMNS,
    gap = { base: '6', lg: '8' },
    staggerDelay = 0.1,
    stretch = true,
    renderItem,
    items,
    className,
    'data-testid': testId,
}) => {
    const renderContent = () => {
        if (items && renderItem) {
            return items.map((item, index) => (
                <GridItem key={item.id || index} display={stretch ? 'flex' : 'block'} minW="0" w="100%" h="100%">
                    <FadeInUp delay={index * staggerDelay}>
                        {renderItem(item, index)}
                    </FadeInUp>
                </GridItem>
            ));
        }

        return children;
    };

    return (
        <StaggerContainer className={className || ''} data-testid={testId || ''} w="100%">
            <Grid
                templateColumns={columns}
                gap={gap}
                alignItems={stretch ? 'stretch' : 'start'}
                width="100%"
                justifyItems="stretch"
                maxW="100%"
                minW="0"
            >
                {renderContent()}
            </Grid>
        </StaggerContainer>
    );
});

AnimatedGrid.displayName = 'AnimatedGrid';

export default AnimatedGrid;
