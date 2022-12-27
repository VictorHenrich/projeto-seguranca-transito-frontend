import {
    Center,
    Box,
    Flex,
    Image,
    Heading,
    Text,
    Link,
    Button,
    Stack
} from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';

import {
    LockIcon,
    EmailIcon
} from '@chakra-ui/icons';

import InputLogin from '../../Components/InputLogin';
import BackgroundLogin from '../../Assets/BackgroundLogin.svg';
import IconTransit from '../../Assets/IconTransit.jpg';



export default function HomePage(props: any){
    return (
        <Center 
            backgroundImage={BackgroundLogin}
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            height="100vh"
        >
            <Flex 
                width="70%" 
                height="70%"
                borderRadius={50}
                overflow="hidden"
            >
                <Center 
                    width="50%"
                    backgroundColor="secondary"
                >
                    <Image src={IconTransit} width={"auto"} height={"60%"}/>
                </Center>
                <Flex
                    flexDirection="column"
                    justifyContent="space-around"
                    width="50%"
                    backgroundColor="primary"
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

                    <Stack spacing={5}>
                        <InputLogin
                            icon={<EmailIcon />}
                            inputProps={{
                                type: "email"
                            }}
                        />
                        
                        <Stack spacing={5}>
                            <InputLogin 
                                icon={<LockIcon />}
                                inputProps={{
                                    type: "password"
                                }}
                            />
                            <Link 
                                textAlign="right" 
                                marginTop={15}
                                fontSize={13}
                                color="rgb(255, 255, 255)"
                                fontFamily="'Open Sans', sans-serif"
                                href='/'
                            >
                                Não me lembro da minha senha
                            </Link>
                        </Stack>
                        
                    </Stack>

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
    )
}