import {
    Container,
    Center,
    Box,
    Drawer,
    DrawerContent,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    List,
    ListItem,
    ListIcon,
    Heading,
    IconButton,
    Flex
} from "@chakra-ui/react";


import {
    HamburgerIcon
} from "@chakra-ui/icons";



export default function Home(props: any){

    return (
        <Container
            width="100vw"
            height="100vh"
        >
            <Box
                width="100vw"
                height="10vh"
                backgroundColor="rgb(255, 65, 51)"
            >
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                    maxWidth="10%"
                >
                    <IconButton
                        backgroundColor="rgb(255, 255, 255)"
                        color="rgb(255, 65, 51)"
                        padding={2}
                        borderRadius={10}
                        aria-label='Search database'
                        icon={<HamburgerIcon height={8} width="auto"/>} 
                    />
                </Flex>
            </Box>
            <Drawer isOpen={true} onClose={() => null} size="xs" placement="left">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody background="blue">
                        aaaaaaaaaaaaaaaa
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Container>
    )
}