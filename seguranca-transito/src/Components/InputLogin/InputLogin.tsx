import {
    Center,
    Box,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react';

import {
    EmailIcon
} from '@chakra-ui/icons';


export default function InputLogin(props: any){

    return (
        <Box
            {...props}
            display="flex"
            justifyContent="flex-start"
            backgroundColor="transparent"
            borderRadius={30}
            overflow="hidden"
            border="2px solid rgba(255, 255, 255, 0.4)"
            className='input-login'
            
        >
            <Input
                type="email" 
                width="85%"
                boxSizing='border-box'
                padding={8}
                backgroundColor="transparent"
                color="rgb(255, 255, 255)"
                fontFamily="'Roboto', sans-serif"
                fontSize={18}
                fontWeight="bold"
                placeholder='Usuário'
                _placeholder={{
                    color: 'rgba(255, 255, 255, 0.4)'
                }}
            /> 
            <Center
                backgroundColor="transparent"
                boxSizing='border-box'
                padding={8}
            >
                <EmailIcon 
                    height={8}  
                    width="auto" 
                    color="rgba(255, 255, 255, 0.4)" 
                    className='input-icon-login'
                />
            </Center>
        </Box>
    )
}