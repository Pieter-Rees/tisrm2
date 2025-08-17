import GridLayout from "@/components/gridLayout"
import { Container, Text } from '@chakra-ui/react'
import StarList from "@/components/star-list"

export default function Riskmanagement() {
    const list = ['Bedrijfsmiddelen', 'Bedrijfsactiviteiten', 'Vervoer & Logistiek', 'Personeel', 'Preventie']

    return (
        <Container>
            <GridLayout title='Risk Management'>
                <Text>
                    TIS RM wil haar dienstverlening altijd verbeteren, uitbreiden en professionaliseren.
                </Text>
                <Text>
                    Wij kunnen voor u een risicoinventarisatie uitvoeren. Samen met u maken wij een rapport, waarin uw unieke bedrijfs- en risicoprofiel naar voren komt. Hiermee kunnen wij samen precies zien waar u en uw bedrijf risico’s lopen, waarmee wij kunnen bepalen in welke mate het risico invloed op u heeft. Is het verstandig om hier een verzekering voor af te sluiten, of is het beter om dit risico zelf te dragen?
                </Text>
                <Text>
                    Ieder relevant risico komt in het onderzoek naar voren, welke wij duidelijk voor u rubriceren in een rapport. In de vorm van een risicoadvies geven wij vervolgens aan op welke wijze met ieder risico kan worden omgegaan, dit kan op een aantal manieren:
                </Text>
                <Text>
                    Het vermijden van het risico Het verminderen/voorkomen van het risico Het verzekeren van het risico Het zelf-dragen van het risico Per risico brengen wij dan tevens in kaart in hoeverre uw huidige verzekeringspakket hiervoor al dan niet dekking biedt en wat de kwaliteit daarvan is.
                </Text>
                <Text>
                    Het is de kunst om na een grondige risico-inventarisatie te komen tot een ‘onbewust (on)verzekerde situatie tot bewust (on)verzekerde situatie’ en dat met een doorlopend karakter.
                </Text>
                <Text>
                    In de samenvatting splitsen wij de volgende zaken:
                </Text>
                <StarList listItems={list} />
            </GridLayout>
        </Container>
    )
}