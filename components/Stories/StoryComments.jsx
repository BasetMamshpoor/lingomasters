import React, {useEffect, useRef, useState, useCallback, useContext} from 'react';
import Down from "@icons/arrow-down.svg";
import Person from "@icons/user-tick.svg";
import Image from "next/image";
import {addToast, Input, Textarea} from "@heroui/react";
import timeAgo from "@/helpers/timeago";
import axios from "axios";
import usePostRequest from "@/hooks/usePostRequest";
import {Information} from "@/providers/InformationProvider";
import Like from "@/components/Like";

const StoryComments = ({storyId, showComments, lastPage, comments: List, setShowComments}) => {
    const [comments, setComments] = useState(List ?? []);
    const {seller} = useContext(Information)
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const commentsRef = useRef(null);
    const {sendPostRequest, isLoading: load} = usePostRequest()

    const fetchComments = useCallback(async (page) => {
        setIsLoading(true);
        try {
            const {data} = await axios.get(`/story/show/${storyId}?page=${page}`);
            setComments(prevComments => [...prevComments, ...data.response.data.story.comments]);
        } catch (error) {
            console.error('Error fetching comments:', error);
        } finally {
            setIsLoading(false);
        }
    }, [storyId]);

    useEffect(() => {
        const handleScroll = () => {
            if (lastPage > page) {
                const {scrollTop, scrollHeight, clientHeight} = commentsRef.current;
                console.log(scrollTop + clientHeight >= scrollHeight - 5)
                if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
                    setPage(prevPage => prevPage + 1);
                }
            }
        }

        if (commentsRef.current) {
            commentsRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (commentsRef.current) {
                commentsRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [isLoading]);

    useEffect(() => {
        if (page > 1) {
            fetchComments(page);
        }
    }, [page, fetchComments]);

    const handleSubmit = async e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const dataa = Object.fromEntries(form.entries())
        const {
            success,
            successMessage,
            errorMessage
        } = await sendPostRequest('POST', `/story/comment/${storyId}`, dataa)
        if (success) {
            addToast({
                title: 'ثبت شد',
                description: successMessage,
                color: "success"
            })
            const comment = {
                body: dataa.body,
                is_liked: false,
                likes_count: 0,
                name: seller?.name,
                profile_image: seller?.profile
            }
            setComments(prev => ([comment, ...prev]))
            e.target.reset()
        } else {
            addToast({
                title: "ثبت نشد",
                description: errorMessage,
                color: 'danger'
            })
        }
    }

    return (
        <div dir='rtl'
             className={`absolute z-10 bottom-0 left-0 w-full h-2/3 bg-white bg-opacity-40 backdrop-blur-[40px] text-black rounded-t-lg transition-transform duration-300 ${showComments ? "translate-y-0" : "translate-y-full"}`}>
            <div className="flex flex-col px-4 py-3 h-full overflow-y-auto scrollbar-hide" ref={commentsRef}>
                <div className="w-full centerOfParent cursor-pointer"
                     onClick={() => setShowComments(!showComments)}>
                    <Down className='fill-white'/>
                </div>
                <div className="flex flex-col gap-6 pb-10">
                    <div className="flex flex-col gap-2 h-full">
                        <p className="text-primary-950 text-lg font-semibold">دیدگاه ها</p>
                        <ul className="flex flex-col gap-4">
                            {comments.map((comment, index) => (
                                <li key={comment.id} className="flex flex-col gap-2 items-stretch">
                                    <div className="flex items-stretch justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            <Image width={100} height={100}
                                                   className='w-8 h-8 rounded-full object-cover'
                                                   src={comment.profile_image || '/images/avatar.jpg'}
                                                   alt='person'/>
                                            <p className="text-xs font-semibold">{comment.name}</p>
                                            <div className="bg-[#F5F7F8] w-2 h-2 rounded-full"></div>
                                            <p className="text-[10px] text-white">{timeAgo(comment.created_at || Date.now())}</p>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 overflow-hidden">
                                            <Like isLike={comment.is_liked} justToggle={!comment.id} url="/comment"
                                                  id={comment.id}
                                                  className="fill-white [&>svg]:w-4 [&>svg]:h-4"/>
                                            <span className='text-white text-xs'>{comment.likes_count}</span>
                                        </div>
                                    </div>
                                    <p className='text-white text-xs whitespace-break-spaces'>{comment.body}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Textarea
                            dir="auto"
                            minRows={1}
                            maxRows={6}
                            isDisabled={load}
                            size='sm'
                            startContent={<Person/>}
                            endContent={<button disabled={load}
                                                className="text-primary-950 text-xs font-semibold">ارسال</button>}
                            type="text"
                            name="body"
                            placeholder="نظر خود را بنویسید"
                            classNames={{
                                input: 'h-10 scrollbar-hide',
                                inputWrapper: 'h-auto !rounded-b-none',
                                base: 'fixed bottom-0 left-0 right-0 px-4',

                            }}/>
                    </form>
                </div>
            </div>
        </div>
    )
        ;
};

export default StoryComments;