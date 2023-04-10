import {
    Avatar,
    Flex,
    Stack,
    Text
} from '@chakra-ui/react';
import InputLogin from '../Input';

import { Search2Icon } from "@chakra-ui/icons";
import { ContactData } from './index';


interface ContactsProps{
    contacts: Omit<ContactData[], "talks">,
    onSelectContact: (contact: ContactData) => void,
    selectedcontact: ContactData
}


export default function Contacts({contacts, onSelectContact}: ContactsProps){
    return (
        <Flex
            height="full"
            width="25%"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            background="secondary"
            padding={5}
        >
            <InputLogin
                icon={Search2Icon}
                colors={{
                    default: "rgb(200, 200, 200)",
                    focus: {
                        primary: "secondary",
                        secondary: "primary"
                    }
                }}
            />
            <Stack
                width="100%"
                maxHeight="85%"
                spacing={0}
                overflowY="auto"
                marginTop={5}
            >
                {contacts.map(item => {
                    return (
                        <Flex
                            flexDirection="row"
                            justifyContent="space-around"
                            alignItems="center"
                            padding="15px 1px"
                            background="transparent"
                            cursor="pointer"
                            transition="background .3s"
                            _hover={{
                                background: "lightGray"
                            }}
                            onClick={() => onSelectContact(item)}
                        >
                            <Avatar 
                                height="auto"
                                width="50px"
                            />
                            <Stack
                                spacing={1}
                                width="calc(100% - 100px)"
                            >
                                <Text
                                    fontSize={18}
                                    fontWeight={500}
                                    color="black"
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    maxHeight={50}
                                    overflow="hidden"
                                    textOverflow="ellipsis"
                                    color="rgb(100, 100, 100)"
                                >
                                    {item.lastMessage}
                                </Text>
                            </Stack>
                        </Flex>
                    )
                })}
            </Stack>
        </Flex>
    )
}