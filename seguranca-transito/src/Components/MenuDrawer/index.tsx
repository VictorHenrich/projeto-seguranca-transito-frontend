import {
    Center,
    Drawer,
    DrawerContent,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    List,
    ListItem,
    ListIcon,
    Flex,
    Avatar,
    Text,
    Stack,
    Divider,
    DrawerProps
} from "@chakra-ui/react";


export interface PropsOptionsMenuDrawer{
    description: string,
    icon?: any,
    link: string
}

export interface PropsMenuDrawer extends Pick<DrawerProps, "isOpen" | "onClose">{
    options: PropsOptionsMenuDrawer[]
}


export default function MenuDrawer(props: PropsMenuDrawer){

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
                                    fontFamily="'Open Sans', sans-serif"
                                >
                                    Victor Henrich
                                </Text>
                                <Text
                                    color="rgb(150, 150, 150)"
                                    fontSize={15}
                                    fontFamily="'Open Sans', sans-serif"
                                >
                                    victorhenrich993@gmail.com
                                </Text>
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
                                {props.options.map(item => {

                                    return (
                                        <ListItem
                                            fontFamily="'Roboto', sans-serif"
                                            display="flex"
                                            flexDirection="row"
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            color="primary"
                                            margin="10px 0px"
                                            padding={2}
                                            fontSize={20}
                                            cursor="pointer"
                                            borderRadius={10}
                                            transition="all .2s"
                                            _hover={{
                                                boxShadow:"0px 1px 3px 0px rgb(200,200,200)",
                                                backgroundColor: "primary",
                                                color: "secondary"
                                            }}
                                        >
                                            {item.icon && (
                                                <ListIcon
                                                    as={item.icon}
                                                    height={10}
                                                    width="auto"
                                                    paddingRight={2}
                                                />
                                            )}
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