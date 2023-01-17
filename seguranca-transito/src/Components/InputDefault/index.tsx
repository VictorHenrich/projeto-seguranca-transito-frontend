import {
    Input,
    InputProps
} from '@chakra-ui/react';




export default function InputDefault(props: InputProps){

    return (
        <Input
            color="black"
            transition="all .3s"
            _focus={{
                borderColor: "primary",
                _placeholder:{
                    color: "primary"
                },

            }}
            variant="filled"

            {...props}
        />
    );
}