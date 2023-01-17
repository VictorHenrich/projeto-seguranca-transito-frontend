
import {
    Center
} from "@chakra-ui/react";

import {
    BsGlobe,
    BsChatDots
} from 'react-icons/bs';

import {
    MdOutlineIntegrationInstructions
} from 'react-icons/md';
import TableDefault, { PropsColumns, ActionButtonProps, PropsBody } from '../../Components/TableDefault';
import Maps from "../../Components/Maps";
import DialogDefault from "../../Components/DialogDefault";



export default function Home(){
    function onClickIconTable(row: PropsBody[]){
        console.log(row);
    }

    const iconsTable: ActionButtonProps[] = [
        {
            icon: BsGlobe,
            name: "maps",
            color: "#63B3ED",
            onActivate: onClickIconTable
        },
        {
            icon: BsChatDots,
            name: "chat",
            color: "#48BB78",
            onActivate: onClickIconTable
        },
        {
            icon: MdOutlineIntegrationInstructions,
            name: "integration",
            color: "#6B46C1",
            onActivate: onClickIconTable
        },   
    ]

    const columns: PropsColumns[] = [
        {
            name: "usuario",
            value: "Usuário",
            align: "left"
        },
        {
            name: "cpf",
            value: "CPF",
            align: "center"
        },
        {
            name: "numero_celular",
            value: "Número Celular",
            align: "center"
        }
    ];

    const body = [
        [
            {
                field: "usuario",
                value: "Victor Henrich"
            },
            {
                field: "cpf",
                value: "029.887.900-00"
            },
            {
                field: "numero_celular",
                value: "1111111111"
            }
        ],
        [
            {
                field: "usuario",
                value: "Victor Henrich"
            },
            {
                field: "cpf",
                value: "029.887.900-00"
            },
            {
                field: "numero_celular",
                value: "1111111111"
            }
        ],
        [
            {
                field: "usuario",
                value: "Victor Henrich"
            },
            {
                field: "cpf",
                value: "029.887.900-00"
            },
            {
                field: "numero_celular",
                value: "1111111111"
            }
        ]
    ]

    return (
        <Center
            width="full"
            height="full"
            boxSizing='border-box'
            padding={10}
            background="rgb(245, 245, 245)"
        >
            <TableDefault
                body={body}
                columns={columns}
                actions={{
                    buttons: iconsTable
                }}
            />
            <Maps
                isOpen
                onClose={() => null}
                position={{
                    lat: 51.505,
                    lng: -0.09
                }}
            />
        </Center>
    )
}