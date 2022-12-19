import {
    Container,
    Center,
    Box,
    Drawer,
    DrawerContent,
    DrawerBody,
    DrawerHeader,
    IconButton,
    Menu,
    MenuList,
    MenuItem,
    Heading
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
            <Drawer 
                placement="left" 
                isOpen={true} 
                onClose={()=> null}
            >
                <DrawerContent >
                    <DrawerHeader>
                        <Heading> MENU </Heading>
                    </DrawerHeader>
                    <DrawerBody>
                        <Menu isOpen={true}>
                            <MenuList>
                                <MenuItem>Teste</MenuItem>
                                <MenuItem>Teste</MenuItem>
                                <MenuItem>Teste</MenuItem>
                            </MenuList>
                        </Menu>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Container>
    )
}