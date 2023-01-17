import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Avatar,
    Center,
    Stack,
    Heading
} from '@chakra-ui/react';
import ButtonDefault from '../../Components/ButtonDefault';
import InputDefault from '../../Components/InputDefault';


export default function SettingsPage(){
    return (
        <Center
            width="full"
            height="full"
            padding={5}
            boxSizing="border-box"
        >
            <Card
                width="90%"
                height="90%"
                overflow="auto"
            >
                <CardHeader>
                    <Center>
                        <Stack
                            spacing={10}
                            align="center"
                        >
                            <Avatar size="xl"/>
                            <Heading
                                fontSize={35}
                                color="black"
                            >
                                Victor Henrich
                            </Heading>
                        </Stack>
                    </Center>
                </CardHeader>
                <CardBody>
                    <Stack
                        spacing={10}
                        padding={20}
                    >
                        <Stack
                            direction="row"
                            spacing={20}
                        >
                            <InputDefault 
                                placeholder='Nome'
                            />

                            <InputDefault 
                                placeholder='Email'
                            />
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={20}
                        >
                            <InputDefault 
                                placeholder='Nova Senha'
                            />
                            <InputDefault 
                                placeholder='Confirmar Senha'
                            />
                        </Stack>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Center width="full">
                        <Stack direction="row" spacing={10}>
                            <ButtonDefault 
                                text='Confirmar'
                                colorPrimary='green'
                                width={200}
                            />
                            <ButtonDefault 
                                text='Cancelar'
                                colorPrimary='red'
                                width={200}
                            />
                        </Stack>
                    </Center>
                </CardFooter>
            </Card>
        </Center>
    );
}