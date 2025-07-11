import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/react";
import RuleOfCancle from "@/components/RuleOfCancle";
import RuleOfCancleGroup from "@/components/RuleOfCancleGroup";

const ShowRules = ({disclosure, group}) => {
    const {isOpen, onOpenChange} = disclosure;

    return (
        <>
            <Modal
                dir='rtl'
                size='2xl'
                isOpen={isOpen}
                onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader/>
                            <ModalBody>
                                {group ? <RuleOfCancleGroup/> : <RuleOfCancle/>}
                            </ModalBody>
                            <ModalFooter/>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default ShowRules;