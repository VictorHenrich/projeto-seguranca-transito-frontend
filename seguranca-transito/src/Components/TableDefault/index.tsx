
import { ReactNode } from 'react';

import {
    TableContainer,
    Thead,
    Tbody,
    Tr,
    Td,
    Th,
    Table,
    IconButtonProps,
    Center,
    Stack,
    IconButton
} from "@chakra-ui/react";


type Align = "left" | "right" | "center";

export interface ActionButtonProps extends Omit<IconButtonProps, "aria-label" | "as">{
    icon: any,
    name: string,
    color: string,
    onActivate: (row: PropsBody[]) => void
}

export interface PropsActions{
    align?: string,
    text?: string,
    buttons: ActionButtonProps[]
}

export interface PropsColumns{
    name:  string,
    value: string,
    align?: Align
}

export interface PropsBody{
    field: string,
    value: any
}


export interface PropsTableDefault{
    columns: PropsColumns[],
    body: Array<PropsBody[]>,
    actions?: PropsActions
}

interface HandlePropsBody extends PropsBody{
    column: PropsColumns,
    columnIndex: number
}




export default function TableDefault({
    columns,
    body,
    actions
}: PropsTableDefault){

    function handleColumns(data: PropsBody[]): HandlePropsBody[]{
        return data
            .map(item => {
                let columnIndex: number = 
                    columns.
                        findIndex(
                            c => c.name.toUpperCase() === 
                                item.field.toUpperCase()
                        );

                if(columnIndex < 0)
                    throw new Error(
                        'Column not found!'
                    );

                let column: PropsColumns = columns[columnIndex];

                let itemHandled: HandlePropsBody  = {
                    ...item,
                    column,
                    columnIndex
                }

                return itemHandled;
            })
            .sort((a, b) => {

                let indexColumnA: number = 
                    columns.
                        findIndex(
                            c => c.name.toUpperCase() === 
                                a.field.toUpperCase()
                        );

                let indexColumnB: number = 
                    columns.
                        findIndex(
                            c => c.name.toUpperCase() === 
                                b.field.toUpperCase()
                        );
                
                if(indexColumnA > indexColumnB)
                    return 1;

                else if(indexColumnA < indexColumnB)
                    return -1;
                else
                    return 0;
        });
    }

    return (
        <TableContainer
            width="full"
            height="full"
            backgroundColor="secondary"
            boxShadow="2px 2px 10px 2px rgb(200, 200, 200)"
        >
            <Table>
                <Thead
                    background="primary"
                >
                    <Tr>
                        {columns.map(c => {
                            return (
                                <Th 
                                    id={c.name}
                                    color="secondary"
                                    fontFamily="'Open Sans', sans-serif"
                                    textAlign={c.align}
                                >
                                        {c.value}
                                </Th>
                            );
                        })}
                        {actions && (
                            <Th
                                id="action"
                                color="secondary"
                                fontFamily="'Open Sans', sans-serif"
                                textAlign="center"
                            >
                                {actions.text || "Ações"}
                            </Th>
                        )}
                        
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        body.map(b => {
                            return (
                                <Tr>
                                    {handleColumns(b).map((item, index) => {
                                        return (
                                            <Td
                                                id={`${item.field}-${index}`}
                                                key={`${item.field}-${index}`}
                                                color="rgb(80, 80, 80)"
                                                fontFamily="'Roboto', sans-serif"
                                                textAlign={item.column.align}
                                            >
                                                {item.value}
                                            </Td>
                                        );
                                    })}
                                    {actions && (
                                        <Td
                                            id="action"
                                            color="rgb(80, 80, 80)"
                                            fontFamily="'Open Sans', sans-serif"
                                        >
                                           <Center>
                                                <Stack 
                                                    direction="row" 
                                                    spacing={10}
                                                >
                                                    {actions.buttons.map(button => {
                                                        return (
                                                            <IconButton
                                                                aria-label={button.name}
                                                                as={button.icon} 
                                                                size="sm"
                                                                background="transparent"
                                                                padding={2}
                                                                boxSizing="content-box"
                                                                border={`2px solid ${button.color}`}
                                                                cursor="pointer"
                                                                boxShadow="1px 1px 1px 0px rgb(100, 100, 100)"
                                                                _hover={{
                                                                    backgroundColor: button.color,
                                                                    color: "secondary"
                                                                }}
                                                                onClick={() => button.onActivate(b)}
                                                                {...button}
                                                            />
                                                        )
                                                    })}
                                                </Stack>
                                            </Center>
                                        </Td>
                                    )}
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </TableContainer>
    );
}