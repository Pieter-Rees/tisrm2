import { Grid, GridItem } from "@chakra-ui/react"
import Card from '@/components/card'

export default function ThreeElements() {
    return (
        <Grid
            width='full'
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(6, 1fr)' }}
            gap='8'
        >
            <GridItem colSpan={2} >
                <Card image='/slider-2.jpg' title='Risk Managers' description="TIS is de laatste jaren meegegroeid met de ontwikkelingen in de verzekeringsmarkt, alsmede de veranderende behoefte van de klanten. Zodoende zijn de werknemers van TIS gediplomeerd als risico managers en geregistreerd in het register GRMC. Wilt u weten wat wij kunnen betekenen in het kader van risico management, lees hier verder of neem contact met ons op!" />
            </GridItem>
            <GridItem colSpan={2}>
                <Card image='/unieke-kenmerken.jpg' title='Maatwerk' description='De verzekeringen van TIS zijn stuk voor stuk maatwerk. De standaard verzekeringsproducten zijn vaak niet toereikend, waardoor er een kans bestaat dat er geen dekking is óf juist dekking heeft voor zaken die geen betrekking hebben op u of uw bedrijf. Op basis van jarenlange ervaring hebben wij daarom een unieke werkwijze, welke compleet is afgestemd op de wensen van de klanten.' />
            </GridItem>
            <GridItem colSpan={2} >
                <Card image='/slider-3.jpg' title='Schadeafandeling' description='TIS biedt u een volledig digitale schadeafhandeling. Door deze specialisatie staan wij bekend om het snel en vakkundig afwikkelen van uw schade, van een inbraak, stormschade of het verhalen van uw bedrijfsschade. Per schadedossier ontvangt u van ons een unieke inlogcode waarmee u de voortgang zelf kunt volgen, via de PC, tablet of smartphone!' />
            </GridItem>
        </Grid>
    )
}