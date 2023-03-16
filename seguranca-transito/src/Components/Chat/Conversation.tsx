import { CSSProperties } from 'react';

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
                spacing={5}
                width="full"
                minHeight="50%"
                maxHeight="70%"
                padding={5}
                boxSizing="border-box"
                overflowY="auto"
            >
                {selectedChat.talks.map(item => {
                    let style: any = {
                        background: "primary",
                        color: "secondary",
                        borderTopRadius: 30,
                        padding: 5
                    }

                    let direction: string = "";

                    if(!item.isMe){
                        style = {
                            ...style,
                            background: "secondary",
                            color: "black",
                            borderLeftRadius: 30,
                        }

                        direction = "flex-start";

                    }else{
                        style = {
                            ...style,
                            borderRightRadius: 30,
                        }

                        direction = "flex-end";
                    }
                        

                    return (
                        <Flex 
                            width="100%"
                            justifyContent={direction} 
                            alignItems="center"
                        >
                            <Text {...style}>
                                {item.body}
                            </Text>
                        </Flex>
                    )
                })}
            </Stack>
            <Flex
                justifyContent="space-around"
                alignItems="center"
                width="full"
                background="secondary"
                padding={4}
            >
                <Textarea
                    resize="none"
                    overflow="hidden"
                    width="80%"
                    height={100}
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