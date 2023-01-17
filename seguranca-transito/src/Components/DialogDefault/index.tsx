import { useRef } from 'react';

import {
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogProps,
    AlertDialogBody,
    AlertDialogHeader,
    AlertDialogFooter,
    Heading,
    Stack
} from '@chakra-ui/react';
import ButtonDefault from '../../Components/ButtonDefault';




interface DialogDefaultProps extends Omit<AlertDialogProps, "leastDestructiveRef">{
    title?: string,
    onConfirm?: () => void,
    onCancel?: () => void
}



export default function DialogDefault({
    title,
    ...props
}: DialogDefaultProps){
    const cancelDialog = useRef<any>();

    return (
        <AlertDialog
            size="6xl"
            {...props}
            leastDestructiveRef={cancelDialog}
        >
            <AlertDialogOverlay />
            <AlertDialogContent>
                <AlertDialogHeader
                    background="primary"
                >
                    <Heading
                        fontSize={35}
                        color="secondary"
                    >
                        {title}
                    </Heading>
                </AlertDialogHeader>
                <AlertDialogBody minHeight={400}>
                    {props.children}
                </AlertDialogBody>
                <AlertDialogFooter
                    borderTop="1px solid"
                    borderColor="rgb(200, 200, 200)"
                >
                    <Stack
                        direction="row"
                        spacing={10}
                    >
                        <ButtonDefault 
                            text='Confirmar' 
                            colorPrimary='green'
                            width={150}
                        />
                        <ButtonDefault 
                            text='Cancelar' 
                            colorPrimary='red'
                            width={150}
                        />
                    </Stack>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}