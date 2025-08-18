import { Grid, GridItem } from '@chakra-ui/react';
import Card from '@/components/card';
import Breadcrumb from "@/components/breadcrumb";
import PageLayout from '@/components/page-layout';
import { FadeInUp, StaggerContainer } from '@/components/page-animation';

export default function Verzekeringen() {
    return (
        <PageLayout 
            title="Verzekeringen" 
            breadcrumb={<Breadcrumb capitalizeLinks />}
        >
            <StaggerContainer>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    }}
                    gap={{ base: '6', lg: '8' }}
                    alignItems="stretch"
                    width="100%"
                >
                    <GridItem display="flex" minW="0">
                        <FadeInUp>
                            <Card 
                                title="Particulier" 
                                description="U verwacht als particulier de beste service tegen scherpe premies, alsmede een snelle afhandeling van mogelijke schades. Bij TIS geniet u van adviseurs die op de juiste momenten bereikbaar zijn en de persoonlijke aandacht geven waar u als klant behoefte heeft." 
                                cta="Lees meer" 
                                ctaLink="/verzekeringen/particulier" 
                                buttonVariant="ghost" 
                            />
                        </FadeInUp>
                    </GridItem>
                    <GridItem display="flex" minW="0">
                        <FadeInUp delay={0.1}>
                            <Card 
                                title="Zakelijk" 
                                description="Als ondernemer wilt u ervanuit kunnen gaan dat de verzekeringen op orde zijn, zijn alle risico's wel goed afgedekt en dan wel tegen de juiste premies? Wij nemen graag samen met u uw verzekeringspakket door en houden deze up to date, zodat ook u kunt genieten van de rust die TIS biedt." 
                                cta="Lees meer" 
                                ctaLink="/verzekeringen/zakelijk" 
                                buttonVariant="ghost" 
                            />
                        </FadeInUp>
                    </GridItem>
                    <GridItem display="flex" minW="0">
                        <FadeInUp delay={0.2}>
                            <Card 
                                title="Taxi" 
                                description="TIS is al meer dan 25 jaar dé specialist op het gebied van verzekeringen in het personenvervoer. Door onze jarenlange expertise hebben wij veel vertrouwen gewonnen bij verzekeringsmaatschappijen, belangenorganisaties én de klanten zelf." 
                                cta="Lees meer" 
                                ctaLink="/taxi" 
                                buttonVariant="ghost" 
                            />
                        </FadeInUp>
                    </GridItem>
                </Grid>
            </StaggerContainer>
        </PageLayout>
    );
}