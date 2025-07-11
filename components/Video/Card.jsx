import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Skeleton} from "@heroui/react";
import Image from "next/image";
import Play from '@icons/play.svg';
import {useRef, useState} from "react";

export default function Card({bgSrc, trigger, className, movie, withPlayIcon = true}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const videoRef = useRef(null);
    const [modalSize, setModalSize] = useState("md");

    const handleLoadedMetadata = () => {
        const video = videoRef.current;
        if (video) {
            const isVertical = video.videoHeight > video.videoWidth;
            setModalSize(isVertical ? "md" : "5xl");
        }
    };
    return (
        <>
            {bgSrc ? <div onClick={movie ? onOpen : null}
                          className={`centerOfParent relative w-fit max-h-44 rounded-lg overflow-hidden cursor-pointer ${className}`}>
                <Image src={bgSrc} width='0' height='0' sizes='100vw' className='w-full h-full object-contain'/>
                {withPlayIcon &&
                    <div className="centerOfParent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><Play
                        className='w-8 h-8 fill-white'/></div>}
            </div> : !trigger && <Skeleton
                className={`centerOfParent relative w-full min-h-80 rounded-lg overflow-hidden cursor-pointer ${className}`}/>}
            {trigger ? <p onClick={movie ? onOpen : null}
                          className='text-center text-sm text-primary-950 cursor-pointer'>{trigger}</p> : null}
            <Modal
                backdrop="opaque"
                placement='center'
                isOpen={isOpen}
                ssize={modalSize}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
            >
                <ModalContent className='bg-white rounded-lg'>
                    {(onClose) => (
                        <>
                            <ModalHeader/>
                            <ModalBody>
                                <div className="w-full mx-auto">
                                    <video
                                        ref={videoRef}
                                        className="w-full h-auto max-h-full rounded-lg shadow-lg"
                                        controls
                                        onLoadedMetadata={handleLoadedMetadata}
                                        poster={bgSrc}>
                                        <source src={movie} type="video/mp4"/>
                                        مرورگر شما از پخش این فیلم پشتیبانی نمیکند
                                    </video>
                                </div>
                            </ModalBody>
                            <ModalFooter dir='rtl'>
                                <Button color="danger" variant="solid" onPress={onClose}>
                                    بستن
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
