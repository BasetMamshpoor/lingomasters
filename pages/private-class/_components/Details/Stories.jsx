import React, { useState } from 'react';
import Card from '@/components/Video/Card';

import Icon from '@icons/sellers.svg';
import Like from '@icons/like.svg'
import LikeFill from '@icons/like-fill.svg'
import Dislike from '@icons/dislike.svg'
import DislikeFill from '@icons/dislike-fill.svg'
import Down from '@icons/arrow-down.svg'
import Chat from '@icons/chat-alt.svg';
import Image from 'next/image';
import useSwipeScroll from '@/hooks/useHorizontalScroll';

const comments = [
    {
        "id": 1,
        "content": "Voluptas vel natus ",
        "created_at": "2024-10-22 06:21:05",
        "user": {
            "user_name": null,
            "image": null
        },
        "likes_count": 0,
        "dislikes_count": 0,
        "is_like": false,
        "is_dislike": false
    },
    {
        "id": 2,
        "content": "Nostrum tempore ab a neque occa",
        "created_at": "2024-10-22 06:21:05",
        "user": {
            "user_name": null,
            "image": null
        },
        "likes_count": 0,
        "dislikes_count": 0,
        "is_like": false,
        "is_dislike": false
    },
    {
        "id": 3,
        "content": "Et sed exercitationem nihil sunt",
        "created_at": "2024-10-22 06:21:05",
        "user": {
            "user_name": null,
            "image": null
        },
        "likes_count": 0,
        "dislikes_count": 0,
        "is_like": false,
        "is_dislike": false
    }
]
const Stories = () => {
    const scroll = useSwipeScroll()

    const [showMore, setShowMore] = useState(false)
    return (
        <>
            <div className="sm:p-6 px-3 py-4 flex flex-col gap-4 bg-white rounded-lg border-natural_gray-100 border scroll-m-24" id='stories'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Icon className='w-5 h-5' /></div>
                    <span className='sm:text-base text-sm text-primary-950'>استوری ها</span>
                </div>
                <div className="flex items-center gap-10 overflow-x-auto scrollbar-hide" ref={scroll}>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 lg:min-w-[600px] min-w-[300px] rounded-lg overflow-hidden">
                        <div className="col-span-1">
                            <Card movie='f' bgSrc='/images/image 144.png' className='w-full h-full max-h-auto [&>img]:object-cover' withPlayIcon={false} />
                        </div>
                        <div className="flex flex-col gap-6 lg:col-span-2 col-span-1">
                            <div className="flex items-center justify-between px-2">
                                <h6 className='lg:text-base text-sm'>آموزش مکالمه</h6>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="centerOfParent"><Like /></div>
                                        <span className='lg:text-base text-sm'>24</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="centerOfParent"><Chat /></div>
                                        <span className='lg:text-base text-sm'>56</span>
                                    </div>
                                </div>
                            </div>
                            <ul className="flex flex-col gap-4 items-stretch p-3 bg-[#FBFCFE] rounded">
                                {!!comments.length ? comments.map((c, i) => {
                                    if (i < (showMore ? 10 : 5)) return <li className="flex items-center justify-between gap-3" key={c.id}>
                                        <div className="flex items-center gap-3">
                                            <div className="centerOfParent rounded-full w-10 h-10 shrink-0"><Image src={c.user.image || '/images/avatar.jpg'} width='0' height='0' sizes="100vw" className="w-full h-full object-cover" /></div>
                                            <div className="flex flex-col items-start gap-3">
                                                <p className="sm:text-xs text-[10px] text-primary-950">{c.user.user_name || 'ناشناس'}</p>
                                                <p dir="auto" className="sm:text-xs text-[8px] text-primary-950">{c.content}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <span className="text-primary-950 text-[8px]">{c.dislikes_count}</span>
                                                <div className="centerOfParent">{c.is_dislike ? <DislikeFill className='sm:w-6 sm:h-6 w-4 h-4 fill-red-600' /> : <Dislike className='sm:w-6 sm:h-6 w-4 h-4' />}</div>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-primary-950 text-[8px]">{c.likes_count}</span>
                                                <div className="centerOfParent">{c.is_like ? <LikeFill className='sm:w-6 sm:h-6 w-4 h-4 fill-green-600' /> : <Like className='sm:w-6 sm:h-6 w-4 h-4' />}</div>
                                            </div>
                                        </div>
                                    </li>
                                }) : <div className="centerOfParent w-full">کامنتی ثبت نشده است</div>}
                                <div className="self-center">
                                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowMore(true)}>
                                        <span className="text-xs text-primary-500">مشاهده بیشتر</span>
                                        <div className="centerofParent"><Down className='w-5 h-5 fill-primary-600' /></div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 lg:min-w-[600px] min-w-[300px] rounded-lg overflow-hidden">
                        <div className="col-span-1">
                            <Card movie='f' bgSrc='/images/image 144.png' className='w-full h-full max-h-auto [&>img]:object-cover' withPlayIcon={false} />
                        </div>
                        <div className="flex flex-col gap-6 lg:col-span-2 col-span-1">
                            <div className="flex items-center justify-between px-2">
                                <h6 className='lg:text-base text-sm'>آموزش مکالمه</h6>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="centerOfParent"><Like /></div>
                                        <span className='lg:text-base text-sm'>24</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="centerOfParent"><Chat /></div>
                                        <span className='lg:text-base text-sm'>56</span>
                                    </div>
                                </div>
                            </div>
                            <ul className="flex flex-col gap-4 items-stretch p-3 bg-[#FBFCFE] rounded">
                                {!!comments.length ? comments.map((c, i) => {
                                    if (i < (showMore ? 10 : 5)) return <li className="flex items-center justify-between gap-3" key={c.id}>
                                        <div className="flex items-center gap-3">
                                            <div className="centerOfParent rounded-full w-10 h-10 shrink-0"><Image src={c.user.image || '/images/avatar.jpg'} width='0' height='0' sizes="100vw" className="w-full h-full object-cover" /></div>
                                            <div className="flex flex-col items-start gap-3">
                                                <p className="sm:text-xs text-[10px] text-primary-950">{c.user.user_name || 'ناشناس'}</p>
                                                <p dir="auto" className="sm:text-xs text-[8px] text-primary-950">{c.content}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <span className="text-primary-950 text-[8px]">{c.dislikes_count}</span>
                                                <div className="centerOfParent">{c.is_dislike ? <DislikeFill className='sm:w-6 sm:h-6 w-4 h-4 fill-red-600' /> : <Dislike className='sm:w-6 sm:h-6 w-4 h-4' />}</div>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-primary-950 text-[8px]">{c.likes_count}</span>
                                                <div className="centerOfParent">{c.is_like ? <LikeFill className='sm:w-6 sm:h-6 w-4 h-4 fill-green-600' /> : <Like className='sm:w-6 sm:h-6 w-4 h-4' />}</div>
                                            </div>
                                        </div>
                                    </li>
                                }) : <div className="centerOfParent w-full">کامنتی ثبت نشده است</div>}
                                <div className="self-center">
                                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowMore(true)}>
                                        <span className="text-xs text-primary-500">مشاهده بیشتر</span>
                                        <div className="centerofParent"><Down className='w-5 h-5 fill-primary-600' /></div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stories;