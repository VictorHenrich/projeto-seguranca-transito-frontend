import { useEffect, useState } from "react";

import socket from "../../Services/Socket/Socket";
import Chat, {ContactData} from "../../Components/Chat";



interface ContactChatData extends ContactData{
    departamentUserUUID: string,
    departamentUUID: string
}


export default function ChatPage(){
    const [chatList, setChatList] = useState<ContactChatData[]>([]);
    const [selectedChat, setSelectedChat] = useState<ContactChatData | null>(null);

    useEffect(() => {
        socket.on('get_departament_users', (data: any[]) => {
            let chats: ContactChatData[] = data.map(item => {
                return {
                    lastMessage: item.access,
                    name: item.name,
                    talks: [],
                    status: "online",
                    departamentUserUUID: item.departament_user_uuid,
                    departamentUUID: item.departament_uuid
                }
            });
    
            setChatList(chats);
        });

        socket.emit("get_departament_users");
    }, []);


    socket.on('departament_user_message', (data) => {
        updateContactMessage(
            data.departament_user_uuid, 
            data.departament_uuid, 
            data.body, 
            false
        );
    });


    function updateContactMessage(
        departamentUserUUID: string, 
        departamentUUID: string, 
        body: string, 
        isMe: boolean = false
    ){
        setChatList(chatList.map(contact => {
            if(contact.departamentUUID === departamentUUID && 
            contact.departamentUserUUID === departamentUserUUID){
                contact = {
                    ...contact,
                    talks: [...contact.talks, { isMe, body }]
                }

                setSelectedChat(contact);

                return contact;
            }
            
            return contact;
        }));
    }

    return (
        <Chat 
            contacts={chatList} 
            selectedChat={selectedChat} 
            onSelectContact={(contact) => setSelectedChat(contact)}
            onSubmitChat={(body) => {
                if(!selectedChat) return;

                const data = {
                    body,
                    departament_user_uuid: selectedChat.departamentUserUUID,
                    departament_uuid: selectedChat.departamentUUID
                }

                socket.emit('send_message_departament_user', data);

                updateContactMessage(
                    selectedChat.departamentUserUUID,
                    selectedChat.departamentUUID,
                    body, 
                    true
                );
                    
            }}
        />
    );
}