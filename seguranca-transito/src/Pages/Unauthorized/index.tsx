import { useEffect } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

import {
    Center,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import UnauthorizedImage from '../../Assets/Unauthorized.jpg';



export default function Unauthorized(props: any){
    const navegate: NavigateFunction = useNavigate();
    const redirectionTime: number = 3000;

    useEffect(() => {

        setTimeout(() => {

            navegate("/");
        }, redirectionTime);

    }, [])

    return (
        <Center
            background="secondary"
            width="100vw"
            height="100vh"
        >
            <Stack
                spacing={10}
                align="center"
            >
                <Text
                    color="primary"
                    fontWeight={600}
                    fontSize={30}
                    textAlign="center"
                    fontFamily="'Open Sans', sans-serif"
                >
                    Você não tem permissão para acessar esta página!
                </Text>
                <Image 
                    src={UnauthorizedImage}
                    height="70vh"
                    width="35vw"
                />
            </Stack>
        </Center>
    );  
}