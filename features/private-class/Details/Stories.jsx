import React, {useState} from 'react';
import Icon from '@icons/sellers.svg';
import LikeIcon from '@icons/like.svg'
import LikeFill from '@icons/like-fill.svg'
import Dislike from '@icons/dislike.svg'
import DislikeFill from '@icons/dislike-fill.svg'
import Down from '@icons/arrow-down.svg'
import Chat from '@icons/chat-alt.svg';
import useSwipeScroll from '@/hooks/useHorizontalScroll';
import Like from "@/components/Like";
import {Avatar} from "@heroui/react";
import Story from "@/components/Stories/Story";

const Stories = ({data}) => {
    const scroll = useSwipeScroll()

    const [showMore, setShowMore] = useState(false)
    return (
        <>
            <div
                className="sm:p-6 px-3 py-4 flex flex-col gap-4 bg-white rounded-lg border-natural_gray-100 border scroll-m-24"
                id='stories'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Icon className='w-5 h-5'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>استوری ها</span>
                </div>
                <div className="flex items-center gap-10 overflow-x-auto scrollbar-hide" ref={scroll}>
                    {data?.map((e, i) => (
                        <div key={e.id}
                            className="grid lg:grid-cols-3 grid-cols-1 gap-2 lg:min-w-[600px] min-w-[300px] rounded-lg overflow-hidden">
                            <div className="col-span-1">
                                <Story trigger story={{cover: e.cover, name: null, id: e.id}} Stories={data} index={i}/>
                            </div>
                            <div className="flex flex-col gap-6 lg:col-span-2 col-span-1">
                                <div className="flex items-center justify-between px-2">
                                    <h6 className='lg:text-base text-sm'>{e.title}</h6>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className='lg:text-base text-sm'>{e.likes_count}</span>
                                            <Like isLike={e.is_like} id={e.id} url='/story'/>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className='lg:text-base text-sm'>{e.comments_count}</span>
                                            <div className="centerOfParent"><Chat/></div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="flex flex-col gap-4 items-stretch p-3 bg-[#FBFCFE] rounded">
                                    {!!e.comments.length ? e.comments.map((c, i) => {
                                        if (i < (showMore ? 10 : 5)) return <>
                                            <li
                                                className="flex items-center justify-between gap-3" key={c.id}>
                                                <div className="flex items-center gap-3">
                                                    <Avatar showFallback src={e.profile_image} size='sm'/>
                                                    <div className="flex flex-col items-start gap-3">
                                                        <p className="sm:text-xs text-[10px] text-primary-950">{c.name || 'ناشناس'}</p>
                                                        <p dir="auto"
                                                           className="sm:text-xs text-[8px] text-primary-950">{c.body}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    {/*<div className="flex items-center gap-1">*/}
                                                    {/*<span*/}
                                                    {/*    className="text-primary-950 text-[8px]">{c.dislikes_count}</span>*/}
                                                    {/*    <div className="centerOfParent">{c.is_dislike ?*/}
                                                    {/*        <DislikeFill*/}
                                                    {/*            className='sm:w-6 sm:h-6 w-4 h-4 fill-red-600'/> :*/}
                                                    {/*        <Dislike className='sm:w-6 sm:h-6 w-4 h-4'/>}</div>*/}
                                                    {/*</div>*/}
                                                    <div className="flex items-center gap-1">
                                                        <span
                                                            className="text-primary-950 text-[8px]">{c.likes_count}</span>
                                                        <div className="centerOfParent">{c.is_liked ?
                                                            <LikeFill
                                                                className='sm:w-6 sm:h-6 w-4 h-4 fill-green-600'/> :
                                                            <LikeIcon className='sm:w-6 sm:h-6 w-4 h-4'/>}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </>
                                    }) : <div className="centerOfParent w-full">کامنتی ثبت نشده است</div>}
                                    {!!e.comments.length > 3 && <div className="self-center">
                                        <div className="flex items-center gap-2 cursor-pointer"
                                             onClick={() => setShowMore(true)}>
                                            <span className="text-xs text-primary-500">مشاهده بیشتر</span>
                                            <div className="centerofParent"><Down
                                                className='w-5 h-5 fill-primary-600'/>
                                            </div>
                                        </div>
                                    </div>}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Stories;