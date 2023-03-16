import {
    Center,
    Icon,
    Stack,
    Text
} from '@chakra-ui/react';

import { BsChatSquareQuoteFill } from 'react-icons/bs';


export default function ConversationNotStarted(){
    return (
        <Center
            height="full"
            width="75%"
            background="rgb(240, 240, 240)"
        >
            <Stack
                spacing={10}
                alignItems="center"
            >
                <Icon as={BsChatSquareQuoteFill} color="primary" height={100} width={100}/>
                <Text color="primary" fontSize={25} fontWeight="600">Selecione um contato para iniciar a conversa!</Text>
            </Stack>
        </Center>
    )
}