import {
    Button,
    ButtonProps
} from "@chakra-ui/react";


interface ButtonDefaultProps extends ButtonProps{
    text?: string,
    icon?: any,
    colorPrimary?: string,
    colorSecondary?: string
}


export default function ButtonDefault({
    text,
    icon,
    colorPrimary = "primary",
    colorSecondary = "secondary",
    ...props
}: ButtonDefaultProps){

    return (
        <Button
            aria-label={"teste"}
            as={icon}
            background="transparent"
            color={colorPrimary}
            padding={2}
            boxSizing="content-box"
            border={`2px solid`}
            borderColor={colorPrimary}
            cursor="pointer"
            _hover={{
                backgroundColor: colorPrimary,
                color: colorSecondary
            }}
            {...props}
        >
            {text}

        </Button>
    );
}