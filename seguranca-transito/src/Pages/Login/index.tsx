import {
    Center,
    Box,
    Flex,
    Image,
    Heading,
    Text,
    Link,
    Button,
    Container
} from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';

import InputPassword from '../../Components/InputLogin/InputPassword';
import InputLogin from '../../Components/InputLogin/InputLogin';
import BackgroundLogin from '../../Assets/BackgroundLogin.svg';
import IconTransit from '../../Assets/IconTransit.jpg';



export default function HomePage(props: any){
    return (
        <Container>
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
                    <Flex
                        flexDirection="column"
                        justifyContent="space-between"
                        width="50%"
                        backgroundColor="rgb(255, 65, 51)"
                        boxSizing='border-box'
                        padding="5%"
                    >
                        <Box>
                            <Heading
                                as="h1"
                                fontSize={30}
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
                                marginTop={5}

                            >
                                Acesse sua conta agora em nossa plataforma!
                            </Text>
                        </Box>

                        <Box>
                            <InputLogin/>
                            <InputPassword marginTop="5%"/>
                            <Link 
                                display="block"
                                textAlign="right" 
                                marginTop={15}
                                fontSize={13}
                                color="rgb(255, 255, 255)"
                                fontFamily="'Open Sans', sans-serif"
                                href='/'
                            >
                                Não me lembro da minha senha
                            </Link>
                        </Box>

                        <Center>
                            <Button
                                backgroundColor="rgba(0,0,0, 0.2)"
                                width="50%"
                                fontSize={15}
                                padding={2}
                                borderRadius={20}
                                color="rgb(255, 255, 255)"
                                fontFamily="'Roboto', sans-serif"
                                transition="all .5s"
                                rightIcon={<ArrowForwardIcon />}
                                cursor={"pointer"}
                                _hover={{
                                    backgroundColor: "rgba(0,0,0, 0.5)"
                                }}
                            >
                                SIGN IN
                            </Button>
                        </Center>
                    </Flex>
                </Flex>
            </Center>
        </Container>
    )
}