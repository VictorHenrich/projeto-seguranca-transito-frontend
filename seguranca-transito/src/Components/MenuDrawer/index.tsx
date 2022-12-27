import {
    Center,
    Drawer,
    DrawerContent,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    List,
    ListItem,
    Flex,
    Avatar,
    Text,
    Stack,
    Divider,
    DrawerProps
} from "@chakra-ui/react";

import { optionsMenuDrawer } from "../../Contents/OptionsMenuDrawer";



export default function MenuDrawer(props: Pick<DrawerProps, "isOpen" | "onClose">){

    

    return (
        <Drawer 
            {...props}
            size="xs" 
            placement="left"
        >
                <DrawerOverlay />
                <DrawerContent
                    maxWidth={400}
                    width={400}
                    background="secondary"
                >
                    <DrawerHeader>
                        <Flex
                            height="10vh"
                            
                            flexDirection="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <Avatar
                                height={20}
                                width="auto"
                                background="black"
                            />
                            <Stack
                                direction="column"
                                spacing={1.5}
                            >
                                <Text
                                    fontSize={20}
                                    fontWeight="bold"
                                    color="rgb(10,10,10)"
                                >
                                    Victor Henrich
                                </Text>
                                <Text
                                    color="rgb(120, 120, 120)"
                                    fontSize={15}

                                >victorhenrich993@gmail.com</Text>
                            </Stack>
                        </Flex>
                        <Divider />
                    </DrawerHeader>
                    <DrawerBody>
                        <Center
                            boxSizing='border-box'
                            padding={5}
                        >
                            <List
                                width="100%"
                            >
                                {optionsMenuDrawer.map(item => {

                                    return (
                                        <ListItem
                                            
                                            color="primary"
                                            margin="10px 0px"
                                            padding={2}
                                            cursor="pointer"
                                            borderRadius={10}
                                            transition="all .1s"
                                            _hover={{
                                                boxShadow:"0px 1px 3px 0px rgb(200,200,200)",
                                                backgroundColor: "primary",
                                                color: "secondary"
                                            }}
                                        >
                                            {item.description}
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Center>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
    )
}