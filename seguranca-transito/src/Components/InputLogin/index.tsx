import {ReactNode, useState, } from 'react';

import {
    Flex,
    Input,
    Icon,
    InputProps
} from '@chakra-ui/react';



const colorInputDefault: string = "rgba(255, 255, 255, 0.3)";
const backgroundInputDefault: string = "transparent";

interface PropsInputLogin{
    icon: ReactNode,
    inputProps: InputProps
}

interface StyleInput{
    colorBorder: string,
    colorBackground: string,

}


export default function InputLogin(props: PropsInputLogin){
    const [styleInput, setStyleInput] = useState({
        colorBorder: colorInputDefault,
        colorFont: colorInputDefault,
        colorBackground: backgroundInputDefault
    });

    return (
        <Flex
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            width="full"
            border={`2px solid ${styleInput.colorBorder}`}
            padding={2}
            borderRadius={10}
            backgroundColor={styleInput.colorBackground}
            transition="background 0.3s"
        >
            <Input
                maxWidth="calc(100% - 50px)"
                minWidth={150}
                backgroundColor="transparent"
                color={styleInput.colorFont}
                fontWeight="bolder"
                border="none"
                fontSize={18}
                _focusVisible={{
                    border: "none"
                }}
                onFocus={() => {
                    setStyleInput({
                        colorBackground: "secondary",
                        colorFont: "primary",
                        colorBorder: "transparent"
                    });
                }}

                onBlur={()=> {
                    setStyleInput({
                        colorBackground: backgroundInputDefault,
                        colorFont: colorInputDefault,
                        colorBorder: colorInputDefault
                    });
                }}

                {...props.inputProps}
            />
            <Icon
                transition="all 0.3s"
                color={styleInput.colorFont}
                width="40px"
                height="auto"
                children={props.icon}
            />
        </Flex>
    )
}