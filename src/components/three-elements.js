'use client'

import { Box, VStack } from '@chakra-ui/react'
import Card from '@/components/card'

const ThreeElements = () => {
    return (
        <Box width='full'>
            <VStack
                width='full'
                gap='8'
                spacing='0'
            >
                <Box width='full'>
                    <Card image='/slider-2.jpg' title='Risk Managers' description="TIS is de laatste jaren meegegroeid met de ontwikkelingen in de verzekeringsmarkt, alsmede de veranderende behoefte van de klanten. Zodoende zijn de werknemers van TIS gediplomeerd als risico managers en geregistreerd in het register GRMC. Wilt u weten wat wij kunnen betekenen in het kader van risico management, lees hier verder of neem contact met ons op!" />
                </Box>
                <Box width='full'>
                    <Card image='/unieke-kenmerken.jpg' title='Maatwerk' description='De verzekeringen van TIS zijn stuk voor stuk maatwerk. De standaard verzekeringsproducten zijn vaak niet toereikend, waardoor er een kans bestaat dat er geen dekking is óf juist dekking heeft voor zaken die geen betrekking hebben op u of uw bedrijf. Op basis van jarenlange ervaring hebben wij daarom een unieke werkwijze, welke compleet is afgestemd op de wensen van de klanten.' />
                </Box>
                <Box width='full'>
                    <Card image='/slider-3.jpg' title='Schadeafandeling' description='TIS biedt u een volledig digitale schadeafhandeling. Door deze specialisatie staan wij bekend om het snel en vakkundig afwikkelen van uw schade, van een inbraak, stormschade of het verhalen van uw bedrijfsschade. Per schadedossier ontvangt u van ons een unieke inlogcode waarmee u de voortgang zelf kunt volgen, via de PC, tablet of smartphone!' />
                </Box>
            </VStack>
        </Box>
    )
}

export default ThreeElements;