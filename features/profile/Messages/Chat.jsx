"use client"

import React, {useState, useRef, useEffect, useContext} from 'react';
import MessageItem from "@/features/profile/Messages/MessageItem";
import Profile from "@/features/profile/Messages/Profile.jsx";
import Right from "@icons/chevron-right.svg";
import Close from "@icons/close.svg";
import {Avatar, Spinner} from "@heroui/react";
import useEcho from "@/lib/echo";
import {Information} from "@/providers/InformationProvider";
import useGetRequest from "@/hooks/useGetRequest";
import ChatInput from "@/features/profile/Messages/ChatInput";
import {useCheckScroll} from "@/hooks/useCheckScroll";

const Chat = ({user, onBack, onProfileClick, activeView}) => {
    const [messages, setMessages] = useState([]);
    const [page, setPage] = useState(1)
    const [replyTo, setReplyTo] = useState(null);
    const [pinned, setPinned] = useState(null);
    const bottomRef = useRef(null);
    const echo = useEcho();
    const {student} = useContext(Information)
    // const {query} = useRouter()
    // const messageId = query?.messageId

    let user1_id = Math.min(user?.id, student.user_id);
    let user2_id = Math.max(user?.id, student.user_id);

    const [chats, setChats, setReload, pagination, setP, isLoading] = useGetRequest(true, user && `/chat/messages/${user.id}`, page)
    const pages = Math.ceil(pagination?.total / pagination?.per_page) || 1

    const {containerRef, inAtEnd} = useCheckScroll('up');

    useEffect(() => {
        if (user && chats) {
            setMessages(prev => [...chats, ...prev])
            // setReplyTo(null);
            // setPinned(null);
        }
    }, [user, chats]);

    useEffect(() => {
        if (user) {
            setPage(1)
            setMessages([])
        }
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [user]);

    useEffect(() => {
        if (!user?.id || !echo) return;
        if (echo.connector.pusher.connection.state === 'disconnected') {
            echo.connector.pusher.connect();
        }
        const channel = echo.channel(`chat.${user1_id}-${user2_id}`);

        channel.listen('.message.sent', (event) => {
            setMessages(prev => [...prev, event]);
        });

        return () => {
            echo.leave(`chat.${user1_id}-${user2_id}`);
        };
    }, [echo, user]);

    const handleReply = (msg) => {
        setReplyTo(msg);
    };

    const handlePin = (msg) => {
        setPinned(msg);
    };

    if (!user) {
        return (
            <div
                className="flex items-center justify-center h-full text-gray-500 border border-natural_gray-200 rounded-xl">
                یک کاربر را برای چت انتخاب کنید.
            </div>
        );
    }

    const handleScroll = () => {
        if (inAtEnd()) {
            if (pages > 1 && page <= pages && !isLoading)
                setPage(p => p + 1)
        }
    };

    return (
        <>
            {activeView === 'profile' ?
                <Profile user={user} onBack={onBack}/> :
                <div
                    className="flex flex-col border border-natural_gray-200 rounded-xl overflow-hidden h-full relative">
                    <div
                        className="px-6 py-3 flex items-center justify-between border-b border-natural_gray-200 bg-primary-100 ">
                        <div className="flex items-center gap-2 text-primary-600">
                            <Right onClick={onBack} className='lg:hidden fill-primary-600'/>
                            <Avatar src={user.profile} showFallback/>
                            <p onClick={onProfileClick} className="font-semibold text-sm">{user.name}</p>
                        </div>
                        <button onClick={onProfileClick}
                                className="bg-white border-1.5 border-secondary-500 lg:flex hidden text-secondary-500 px-4 py-2 rounded text-sm">مشاهده
                            پروفایل
                        </button>
                    </div>

                    {/* پین شده */}
                    {pinned && (
                        <div
                            className="bg-yellow-100 text-yellow-800 px-4 py-2 text-sm border-b flex justify-between items-center">
                            <div>
                                <strong>پیام سنجاق‌شده:</strong> {pinned.text}
                            </div>
                            <button onClick={() => setPinned(null)} className="text-xs text-gray-600">
                                <Close/>
                            </button>
                        </div>
                    )}

                    {/* Messages */}


                    {messages.length > 0 &&
                        <div ref={containerRef}
                             onScroll={handleScroll}
                             className="grow p-4 overflow-y-auto bg-gray-50 max-h-[calc(100vh-136px)] flex flex-col-reverse">
                            <div className="flex flex-col gap-2 mt-auto w-full">
                                {pages > 1 && isLoading && <Spinner color="success" classNames={{base: 'mt-6'}}/>}
                                {messages && messages.map((msg) => (
                                    <MessageItem
                                        key={msg.id}
                                        message={msg}
                                        isSender={msg.sender_id === student.user_id}
                                        onReply={handleReply}
                                        onPin={handlePin}
                                    />
                                ))}
                            </div>
                        </div>}
                    {(page === 1 && isLoading) && <div className="grow flex-1 w-full centerOfParent">
                        <Spinner color="success" size="lg"/>
                    </div>}

                    {/* نمایش ریپلای فعال */}
                    {/*{replyTo && (*/}
                    {/*    <div className="px-4 py-2 bg-gray-100 border-t text-sm flex justify-between items-center">*/}
                    {/*        <div>*/}
                    {/*            <span className="font-medium text-gray-700">در حال پاسخ به:</span>{' '}*/}
                    {/*            <span className="italic text-gray-600 line-clamp-1">{replyTo.text}</span>*/}
                    {/*        </div>*/}
                    {/*        <button onClick={() => setReplyTo(null)} className="text-xs text-gray-500">*/}
                    {/*            لغو*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*)}*/}

                    <ChatInput
                        refView={bottomRef}
                        id={user.id}
                    />
                </div>
            }
        </>
    );
}
export default (Chat);