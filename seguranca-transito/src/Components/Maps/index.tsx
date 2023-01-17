import { useRef } from 'react';
import {
    MapContainer,
    Marker,
    TileLayer,
    Popup
} from 'react-leaflet';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogProps,
    Flex,
    Heading,
    Stack
} from "@chakra-ui/react";
import { MdCancel } from 'react-icons/md';

import { LatLngExpression } from 'leaflet';
import ButtonDefault from '../../Components/ButtonDefault';



interface MapsProps extends Omit<AlertDialogProps, "leastDestructiveRef" | "children">{
    position: LatLngExpression,
    zoom?: number,
    scroll?: boolean,
    height?: number | string,
    width?: number | string
}

export default function Maps({
    position,
    zoom = 13,
    scroll = false,
    height = 700,
    width = 700,
    ...props
    
}: MapsProps){

    const refDialog = useRef<any>();

    return (
        <AlertDialog
            leastDestructiveRef={refDialog}
            size="full"
            {...props}
        >
            <AlertDialogOverlay />
            <AlertDialogContent
                display="flex"
                alignItems="center"
                justifyContent="center"
                background="transparent"
                height="full"
            >
                <Stack
                    direction="column"
                    width={width}
                    height={height}
                    background="secondary"
                    boxSizing='content-box'
                >  
                    <Flex
                        width="100%"
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        background="secondary"
                        borderBottom="10px solid"
                        borderColor="rgb(200, 200, 200)"
                        color="black"
                        padding={5}
                    >
                        <Heading
                            textAlign="left"
                            fontSize={30}
                        >
                            RUA NÃO SEI O QUE DAS QUANTAS
                        </Heading>
                        <ButtonDefault 
                            as={MdCancel}
                            colorPrimary="red"
                            padding={1}
                        />
                    </Flex>
                    <MapContainer 
                        center={position} 
                        zoom={zoom} 
                        scrollWheelZoom={scroll}
                        style={{
                            width,
                            height,
                            margin: 0
                        }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Stack>
            </AlertDialogContent>
        </AlertDialog>
    );
}