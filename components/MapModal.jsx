import React from 'react';
import MapIcon from "@icons/map.svg";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@heroui/react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import('./Map'), {
    ssr: false,
});

const MapModal = ({location}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <div onClick={onOpen} className='flex items-center gap-2 cursor-pointer col-span-2'>
                <MapIcon className='sm:w-6 sm:h-6 w-4 h-4'/>
                <p className='text-primary-600 sm:text-base text-xs'>دیدن موقعیت روی نقشه</p>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader/>
                            <ModalBody>
                                <Map justView location={location}/>
                            </ModalBody>
                            <ModalFooter/>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default MapModal;