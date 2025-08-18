import { Grid, GridItem } from '@chakra-ui/react';
import Card from '@/components/card';
import PageLayout from '@/components/page-layout';
import { FadeInUp, StaggerContainer } from '@/components/page-animation';

export default function Bestanden() {
    const documents = [
        { title: "Schadeaanrijdingsformulier", link: '/documents/aanrijdingsformulier.pdf' },
        { title: "Dienstverleningsdocument", link: '/documents/dienstverleningsdocument.pdf' },
        { title: "Algemene voorwaarden", link: '/documents/algemene-voorwaarden.pdf' },
        { title: "Privacyverklaring", link: '/documents/privacyverklaring.pdf' },
        { title: "Beloningsbeleid", link: '/documents/beloningsbeleid.pdf' },
        { title: "Incidentenregeling", link: '/documents/incidentenregeling.pdf' },
        { title: "Interne klachtenprocedure", link: '/documents/interne-klachtenprocedure.pdf' },
    ];

    return (
        <PageLayout title="Downloads">
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
                    {documents.map((doc, index) => (
                        <GridItem key={doc.title} display="block">
                            <FadeInUp delay={index * 0.1}>
                                <Card 
                                    variant="downloads" 
                                    title={doc.title} 
                                    downloadLink={doc.link} 
                                />
                            </FadeInUp>
                        </GridItem>
                    ))}
                </Grid>
            </StaggerContainer>
        </PageLayout>
    );
}