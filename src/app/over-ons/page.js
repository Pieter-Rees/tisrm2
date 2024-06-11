
import {
    Container,
    Text,
    List,
    ListItem,
} from '@chakra-ui/react'
import GridLayout from '@/components/gridLayout'
import { BsCheck } from 'react-icons/bs'

export default function Overons() {
    return (
        <Container>

            <GridLayout title='Over ons'>
                <Text>
                    De ENTO Groep is opgericht in 1994 en is begonnen als zelfstandige auto lease maatschappij voor het MKB. In 1998 is daar de discipline verzekeringen aan toegevoegd. In 2002 werd middels een overname van een grote assurantie portefeuille uit het oosten van Nederland de basis voor het huidige concern gelegd. Inmiddels is de tweede generatie in het bedrijf gekomen. Door nieuwe impulsen zijn wij reeds ook gecertificeerd Risico Managers en als zodanig geregistreerd in het GRMC register.
                </Text>
                <Text>
                    Thans bestaat de ENTO groep uit de ondernemingen:
                </Text>
                <List spacing={4} marginBottom='4'>
                    <ListItem display='flex' alignItems='center'>
                        <BsCheck color='green' size='36px' />

                        Enthoven Beheer BV – Financial Holding
                    </ListItem>
                    <ListItem display='flex' alignItems='center'>
                        <BsCheck color='green' size='36px' />

                        ENTO lease BV – Lease en financiering
                    </ListItem>
                    <ListItem display='flex' alignItems='center'>
                        <BsCheck color='green' size='36px' />

                        ENTO Holding – bedrijfs adviezen
                    </ListItem>
                    <ListItem display='flex' alignItems='center'>
                        <BsCheck color='green' size='36px' />

                        Alan Jacktar BV – Risico Management
                    </ListItem>
                    <ListItem display='flex' alignItems='center'>
                        <BsCheck color='green' size='36px' />

                        TIS RM – Assurantiën (Schade) voor particulier en MKB
                    </ListItem>
                </List>
                <Text>
                    Uit een zeer modern en inspirerend kantoor wordt de onderneming gedreven met geavanceerde software en bedrijfsmodel. Door gebruik te maken van diverse gespecialiseerde diensten zoals een call center en een uitbesteedde schade afdeling zijn wij in staat met een relatief klein team een mooie omzet te genereren. Focus ligt op advisering in Risico management en financiële vraagstukken.
                </Text>
            </GridLayout >
        </Container>
    )
}