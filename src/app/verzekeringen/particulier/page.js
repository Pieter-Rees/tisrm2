import GridLayout from "@/components/gridLayout"
import { Container } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export default function Particulier() {
    return (
        <Container>
            <GridLayout title='Particulier'>
                <Text>
                    Iedereen is op zoek naar de goedkoopste verzekering, maar u verwacht van ons natuurlijk wél een goed advies als adviseur over de allerbeste dekkingen. TIS is daarbij een uitstekend partner als zijnde erkend Risico Manager en als zodanig geregistreerd in het GRMC register. Hierdoor bent u verzekerd van het beste advies.
                </Text>
                <Text>
                    Wij bieden verzekeringen tegen een concurrerend tarief, zonder daarbij de kwaliteit van het product uit het oog te verliezen.
                </Text>
                <Text>
                    Of u nu een auto-, bromfiets-, aansprakelijkheid- of woonhuisverzekering nodig heeft, wij staan voor u klaar!
                </Text>
                <Text>
                    Bovendien proberen wij al uw particuliere (schade) verzekeringen samen te voegen in één pakket, waardoor u een makkelijk overzicht heeft van uw lopende verzekeringen. Daarbij geeft een pakket aantrekkelijke kortingen over de premies.
                </Text>
                <Text>
                    Wij groeien graag met u mee.
                </Text>
                <Text>
                    Bent u geïnteresseerd of heeft u vragen, neem dan gerust contact op via de mail of bel ons!
                </Text>
            </GridLayout>
        </Container>
    )
}