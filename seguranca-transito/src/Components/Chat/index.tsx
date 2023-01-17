import {
    Avatar,
    Flex,
    Stack,
    Text,
    Textarea,
    IconButton,
    Heading,
    Badge
} from '@chakra-ui/react';
import {
    Search2Icon
} from "@chakra-ui/icons";
import InputLogin from '../../Components/Input';
import { BsPaperclip } from 'react-icons/bs';
import { AiFillAudio } from 'react-icons/ai';
import { SlOptionsVertical } from 'react-icons/sl';
import { MdOutlineInsertEmoticon } from 'react-icons/md';



interface PropsChatList{
    name: string,
    lastMessage: string,
    talks: Array<string> 
}


interface PropsChat{
    chatList: PropsChatList[]
}


export default function Chat(){

    const data: PropsChatList[] = [
        {
            lastMessage: "Meu nome é victo henrich e gosto muito de fzer depaksdjasd, asdlpkasd alsdkdas",
            name: "Victor Henrich",
            talks: []
        },
        {
            lastMessage: "Meu nome é victo henrich e gosto muito de fzer depaksdjasd, asdlpkasd alsdkdas",
            name: "Victor Henrich",
            talks: []
        },
        {
            lastMessage: "Meu nome é victo henrich e gosto muito de fzer depaksdjasd, asdlpkasd alsdkdas",
            name: "Victor Henrich",
            talks: []
        },
        {
            lastMessage: "Meu nome é victo henrich e gosto muito de fzer depaksdjasd, asdlpkasd alsdkdas",
            name: "Victor Henrich",
            talks: []
        },
        {
            lastMessage: "Meu nome é victo henrich e gosto muito de fzer depaksdjasd, asdlpkasd alsdkdas",
            name: "Victor Henrich",
            talks: []
        },
        {
            lastMessage: "Meu nome é victo henrich e gosto muito de fzer depaksdjasd, asdlpkasd alsdkdas",
            name: "Victor Henrich",
            talks: []
        }
    ]

    return (
        <Flex
            flexDirection="row"
            justifyContent="center"
            width="full"
            height="full"

        >
            <Flex
                height="full"
                width="25%"
                flexDirection="column"
                justifyContent="space-around"
                background="secondary"
                padding="0px 10px"
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
                >
                    {data.map(item => {
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
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                height="full"
                width="75%"
                background="rgb(220, 220, 220)"
            >
                <Flex
                    width="full"
                    maxHeight={200}
                    alignItems="center"
                    justifyContent="space-between"
                    background="secondary"
                    padding={4}
                >
                    <Stack
                        direction="row"
                        spacing={5}
                        align="center"
                    >
                        <Avatar />
                        <Stack
                            direction="column"
                            align="flex-start"
                        >
                            <Heading
                                fontSize={25}
                                fontWeight={800}
                                color="black"
                            >
                                Victor Henrich
                            </Heading>
                            <Badge 
                                colorScheme="green"
                            >
                                online
                            </Badge>
                        </Stack>
                    </Stack>
                    <IconButton
                        aria-label='options-user'
                        as={SlOptionsVertical}
                        color="primary"
                        background="transparent"
                        cursor="pointer"
                        padding={1}
                    />
                </Flex>
                <Stack
                    direction="column"
                    align="start"
                    spacing={5}
                    width="full"
                    minHeight="70%"
                    maxHeight="80%"
                    padding={5}
                    boxSizing="border-box"
                    overflowY="auto"
                >
                    <Text
                        background="primary"
                        color="secondary"
                        padding={5}
                        borderTopRadius={30}
                        borderLeftRadius={30}
                        marginLeft="auto"
                    >
                            Olá tudo bem com você?
                    </Text>
                    <Text
                        background="secondary"
                        color="black"
                        padding={5}
                        borderTopRadius={30}
                        borderRightRadius={30}
                        marginRight="auto"
                    >
                            Tudo e com você?
                    </Text>
                </Stack>
                <Flex
                    justifyContent="space-around"
                    alignItems="center"
                    width="full"
                    background="secondary"
                    padding={4}
                    maxHeight={500}
                >
                    <Textarea 
                        width="80%"
                        placeholder='Digite sua mensagem...'
                        borderColor="transparent"
                        _focusVisible={{
                            borderColor: "primary"
                        }}
                    />
                    <Stack
                        direction="row"
                        spacing={5}
                    >
                        <IconButton
                            aria-label='file'
                            as={BsPaperclip}
                            color="primary"
                            background="transparent"
                            cursor="pointer"
                            padding={1}
                        />
                        <IconButton
                            aria-label='audio'
                            as={AiFillAudio}
                            color="primary"
                            background="transparent"
                            cursor="pointer"
                            padding={1}
                        />
                        <IconButton
                            aria-label='emot'
                            as={MdOutlineInsertEmoticon}
                            color="primary"
                            background="transparent"
                            cursor="pointer"
                            padding={1}
                        />
                        
                    </Stack>
                </Flex>
            </Flex>
        </Flex>
    );
}