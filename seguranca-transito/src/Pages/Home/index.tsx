import {
    Center,
    Box,
    Flex,
    Image,
    Heading,
    Text
} from '@chakra-ui/react';


import BackgroundLogin from '../../Assets/BackgroundLogin.svg';
import IconTransit from '../../Assets/IconTransit.jpg';
import InputLogin from '../../Components/InputLogin/InputLogin';



export default function HomePage(){
    return (
        <Center 
            width="100vw" 
            height="100vh"
            backgroundImage={BackgroundLogin}
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
        >
            <Flex 
                width="70%" 
                height="70%"
                borderRadius={50}
                overflow="hidden"
            >
                <Center 
                    width="50%"
                    backgroundColor="rgb(255,255,255)"
                >
                    <Image src={IconTransit} width={"auto"} height={"60%"}/>
                </Center>
                <Box 
                    width="50%"
                    backgroundColor="rgb(255, 65, 51)"
                    boxSizing='border-box'
                    padding={50}
                >
                    <Box>
                        <Heading
                            as="h1"
                            color="rgb(255, 255, 255)"
                            fontFamily="'Open Sans', sans-serif"
                            textAlign="left"
                            textTransform="uppercase"
                        >
                            Sign In
                        </Heading>

                        <Text
                            color="rgb(255, 255, 255)"
                            fontFamily="'Roboto', sans-serif"
                            textAlign="left"
                            marginTop={10}
                        >
                            Acesse sua conta agora em nossa plataforma!
                        </Text>
                    </Box>

                    <Box marginTop={50}>
                        <InputLogin/>
                        <InputLogin marginTop={20}/>
                    </Box>
                    
                </Box>
            </Flex>
        </Center>
    )
}