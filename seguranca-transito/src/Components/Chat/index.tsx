import {
    Flex
} from '@chakra-ui/react';

import Contacts from './Contacts';
import ConversationNotStarted from './ConversationNotStarted';
import Conversation from './Conversation';



export interface ContactData{
    name: string,
    lastMessage: string,
    talks: ChatData[],
    status: string
}

export interface ChatData{
    body: string,
    isMe: boolean
}

export interface ChatProps{
    contacts: ContactData[],
    selectedChat: ContactData | null | void,
    onSelectContact: (contact: ContactData) => void,
    onSubmitChat: (body: string) => void 
}


export default function Chat({
    contacts,
    selectedChat = null,
    onSelectContact,
    onSubmitChat
}: ChatProps){

    return (
        <Flex
            flexDirection="row"
            justifyContent="center"
            width="full"
            height="full"
            background="red"
            overflow="hidden"

        >
            <Contacts contacts={contacts} onSelectContact={onSelectContact}/>
            {!selectedChat ? (<ConversationNotStarted />) : (<Conversation selectedChat={selectedChat} onSubmitChat={onSubmitChat}/> )}
        </Flex>
    );
}