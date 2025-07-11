import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure,} from "@heroui/react";
import Filters from "./Filters";
import FilterIcon from '@icons/filter.svg';
import Close from '@icons/close.svg';

export default function Filter({setCurrentPage}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div className="flex flex-col gap-2">
            <div onClick={onOpen} className='flex items-center gap-4 px-3'>
                <div className="centerOfParent gap-3"><FilterIcon/><span
                    className="font-semibold text-sm">فیلترها</span></div>
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior={"inside"}
                hideCloseButton
                size="full"
                placement="bottom"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="lg:hidden flex items-center justify-between gap-1 pb-1 border-b"
                                         dir='rtl'>
                                <div className='flex items-center gap-4 py-3'>
                                    <div className="centerOfParent"><FilterIcon/></div>
                                    <p className='text-lg font-semibold'>فیلتر ها</p>
                                </div>
                                <div onClick={onOpenChange} className="centerOfParent"><Close/></div>
                            </ModalHeader>
                            <ModalBody>
                                {<Filters setCurrentPage={setCurrentPage}/>}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
