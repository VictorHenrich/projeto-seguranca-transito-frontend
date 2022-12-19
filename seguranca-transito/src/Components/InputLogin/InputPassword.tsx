import {
    Center,
    Box,
    Input,
    
} from '@chakra-ui/react';

import {
    LockIcon
} from '@chakra-ui/icons';


export default function InputPassword(props: any){

    return (
        <Box
            {...props}
            display="flex"
            justifyContent="flex-start"
            backgroundColor="transparent"
            borderRadius={30}
            overflow="hidden"
            border="2px solid rgba(255, 255, 255, 0.4)"
        >
            <Input 
                type="password" 
                width="85%"
                boxSizing='border-box'
                padding={8}
                backgroundColor="transparent"
                color="rgb(255, 255, 255)"
                fontFamily="'Roboto', sans-serif"
                fontSize={18}
                fontWeight="bold"
                placeholder='Senha'
                _placeholder={{
                    color: 'rgba(255, 255, 255, 0.4)'
                }}
            /> 
            <Center 
                boxSizing='border-box'
                padding={8}
            >
                <LockIcon 
                    height={8}
                    width="auto"
                    color="rgba(255, 255, 255, 0.4)"
                />
            </Center>
        </Box>
    )
}