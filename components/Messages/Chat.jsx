"use client"

import React, {useState, useRef, useEffect} from 'react';
import MessageItem from "@/components/Messages/MessageItem";
import Profile from "@/components/Messages/Profile.jsx";
import Right from "@icons/chevron-right.svg";
import Close from "@icons/close.svg";
import {Avatar, Textarea} from "@heroui/react";
import usePostRequest from "@/hooks/usePostRequest";
import useEcho from "@/lib/echo";

export default function Chat({user, onBack, onProfileClick, activeView}) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [replyTo, setReplyTo] = useState(null);
    const [pinned, setPinned] = useState(null);
    const bottomRef = useRef(null);
    const {sendPostRequest} = usePostRequest()
    const echo = useEcho();

    useEffect(() => {
        if (user) {
            setMessages([
                {id: 1, from: 'them', text: `سلام من ${user.name} هستم!`},
                {id: 2, from: 'me', text: 'سلام! خوش اومدی.'},
                {id: 3, from: 'me', text: 'سلام! خوش اومدی.'},
                {id: 4, from: 'them', text: `سلام من ${user.name} هستم!`},
                {id: 5, from: 'them', text: `سلام من ${user.name} هستم!`},
                {id: 6, from: 'them', text: `سلام من ${user.name} هستم!`},
                {id: 7, from: 'me', text: 'سلام! خوش اومدی.'},
                {id: 8, from: 'me', text: 'سلام! خوش اومدی.'},
                {id: 9, from: 'them', text: `سلام من ${user.name} هستم!`},
                {id: 10, from: 'them', text: `سلام من ${user.name} هستم!`},
            ]);
            setReplyTo(null);
            setPinned(null);
        }
    }, [user]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages]);

    useEffect(() => {
        if (!echo) return;
        console.log(echo.connector.pusher.connection.state);
        const channel = echo.public('chat.1');

        channel.listen('MessageSent', (event) => {
            setMessages(prev => [...prev, event.message]);
        });

        return () => {
            echo.leave('chat.1');
        };
    }, []);

    const sendMessage = async (e) => {
        e.preventDefault()
        // const formData = new FormData(e.target)
        // const data = Object.fromEntries(formData.entries())
        // const input = data.message;
        if (!input.trim()) return;

        const newMsg = {
            id: Date.now(),
            from: 'me',
            text: input,
            replyTo: replyTo,
        };

        setMessages([...messages, newMsg]);
        setInput('');
        setReplyTo(null);
    };

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

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            sendMessage({
                preventDefault: () => {
                }
            });
        }
    }

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
                            <p className="font-semibold text-sm">{user.name}</p>
                        </div>
                        <button onClick={onProfileClick}
                                className="bg-white border-1.5 border-secondary-500 text-secondary-500 px-4 py-2 rounded text-sm">مشاهده
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
                    <div className="grow p-4 overflow-y-auto bg-gray-50 max-h-[calc(100vh-136px)] flex">
                        <div className="flex flex-col gap-2 mt-auto w-full">
                            {messages.map((msg) => (
                                <MessageItem
                                    key={msg.id}
                                    message={msg}
                                    isSender={msg.from === 'me'}
                                    onReply={handleReply}
                                    onPin={handlePin}
                                />
                            ))}
                            <div ref={bottomRef}/>
                        </div>
                    </div>


                    {/* نمایش ریپلای فعال */}
                    {replyTo && (
                        <div className="px-4 py-2 bg-gray-100 border-t text-sm flex justify-between items-center">
                            <div>
                                <span className="font-medium text-gray-700">در حال پاسخ به:</span>{' '}
                                <span className="italic text-gray-600 line-clamp-1">{replyTo.text}</span>
                            </div>
                            <button onClick={() => setReplyTo(null)} className="text-xs text-gray-500">
                                لغو
                            </button>
                        </div>
                    )}

                    {/* Input */}
                    <form className="p-4 border-t bg-white flex gap-2 lg:text-base sm:text-sm text-xs"
                          onSubmit={sendMessage}>
                        <button type={'submit'}
                                className="bg-primary-700 text-white px-4 py-2 rounded-lg h-fit hover:bg-primary-900"
                        >
                            ارسال
                        </button>
                        <Textarea
                            name='message'
                            variant={'bordered'}
                            classNames={{input: "lg:text-base sm:text-sm text-xs"}}
                            radius="sm"
                            minRows={1}
                            maxRows={6}
                            className="flex-1"
                            placeholder="پیامت رو بنویس..."
                            value={input}
                            onKeyDown={onEnterPress}
                            onValueChange={e => setInput(e)}
                        />
                    </form>
                </div>}
        </>
    );
}
