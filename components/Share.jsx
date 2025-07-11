import React from 'react';
import {addToast} from "@heroui/react";
import ShareIcon from '@icons/share.svg'

const Share = ({title}) => {
    return (
        <>
            <button
                type="button"
                className="centerOfParent cursor-pointer"
                aria-label="اشتراک‌گذاری"
                onClick={() => {
                    if (window.innerWidth < 1024 && navigator.share) {
                        navigator.share({
                            title: title,
                            url: window.location.href,
                        }).catch(() => {
                                addToast({
                                    description: 'اشتراک‌گذاری لغو شد یا پشتیبانی نمی‌شود.',
                                    color: 'warning',
                                });
                            });
                    } else if (navigator.clipboard && window.location) {
                        navigator.clipboard.writeText(window.location.href);
                        addToast({
                            description: 'لینک محصول در کلیپ بورد شما کپی شد.',
                            color: 'success',
                        });
                    }
                }}
            >
                <ShareIcon/>
            </button>
        </>
    );
};

export default Share;