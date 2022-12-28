import { PropsOptionsMenuDrawer } from '../Components/MenuDrawer';

import { 
    AiOutlineHome
} from 'react-icons/ai';

import {
    RxGear
} from 'react-icons/rx';

import {
    TbReportSearch
} from 'react-icons/tb';

import {
    BsChatDots
} from 'react-icons/bs';

import {
    BiLogOut
} from 'react-icons/bi';







export const optionsMenuDrawer: PropsOptionsMenuDrawer[] = [
    {
        description: "Inicio",
        icon: AiOutlineHome,
        link: "",
    },
    {
        description: "Configurações",
        icon: RxGear,
        link: ""
    },
    {
        description: "Relatórios",
        icon: TbReportSearch,
        link: ""
    },
    {
        description: "Conversas",
        icon: BsChatDots,
        link: ""
    },
    {
        description: "Sair",
        icon: BiLogOut,
        link: ""
    }
]
