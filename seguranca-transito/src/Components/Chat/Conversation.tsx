import { useRef } from 'react';

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
import { BsPaperclip } from 'react-icons/bs';
import { AiFillAudio } from 'react-icons/ai';
import { SlOptionsVertical } from 'react-icons/sl';
import { MdOutlineInsertEmoticon } from 'react-icons/md';
import {ContactData} from './index';



interface ConversationProps{
    selectedChat: ContactData,
    onSubmitChat: (body: string) => void 
}


export default function Conversation({ selectedChat, onSubmitChat }: ConversationProps){

    const textAreaRef = useRef();

    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            height="full"
            width="75%"
            background="rgb(220, 220, 220)"
            position="relative"
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
                            {selectedChat.name}
                        </Heading>
                        <Badge 
                            background="green"
                            color="secondary"
                        >
                            {selectedChat.status}
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
                {selectedChat.talks.map(item => {

                    let background: string = "primary";
                    let color: string = "secondary"

                    if(!item.isMe){
                        background = "secondary"
                        color = "black"
                    }

                    return (
                        <Text
                            background={background}
                            color={color}
                            padding={5}
                            borderTopRadius={30}
                            borderLeftRadius={30}
                            marginLeft="auto"
                        >
                                {item.body}
                        </Text>
                    )
                })}
            </Stack>
            <Flex
                justifyContent="space-around"
                alignItems="center"
                width="full"
                background="secondary"
                padding={4}
                maxHeight={500}
                position="absolute"
                bottom={0}
            >
                <Textarea 
                    width="80%"
                    placeholder='Digite sua mensagem...'
                    borderColor="transparent"
                    _focusVisible={{
                        borderColor: "primary"
                    }}
                    onKeyUp={(event) => {
                        if(event.key === "Enter"){
                            onSubmitChat(event.target.value);
                            event.target.value = null;
                        }
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
    );
}