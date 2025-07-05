import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Avatar, Input, Spinner} from "@heroui/react";
import Search from "@icons/search.svg";
import useGetRequest from "@/hooks/useGetRequest";
import useEcho from "@/lib/echo";
import {Information} from "@/providers/InformationProvider";
import {useCheckScroll} from "@/hooks/useCheckScroll";

export default function UserList({activeUser, onSelectUser}) {
    const {student} = useContext(Information)
    const [page, setPage] = useState(1)
    const [usersList, setUsersList] = useState([])
    const [search, setSearch] = useState('');
    const echo = useEcho();

    const [users, setUsers, , pagination, setP, isLoading] = useGetRequest(true, '/chat/my-chats', page)
    const pages = Math.ceil(pagination?.total / pagination?.per_page) || 1

    useEffect(() => {
        if (users) {
            setUsersList(users)
        }
        if (!isLoading && users.length && page !== 1)
            setUsersList(prev => [...prev, ...users]);
    }, [users, page]);

    const filteredUsers = useMemo(() => {
        if (!usersList.length)
            return []
        const term = search.toLowerCase();
        return usersList.filter(user =>
            user.user_name?.toLowerCase().includes(term) ||
            user.last_message?.toLowerCase().includes(term)
        );
    }, [search, usersList]);

    function updateUsersList(prevUsers, updatedChat) {
        const index = prevUsers.findIndex(u => u.id === updatedChat.id);
        if (index !== -1) {
            const updatedUsers = [...prevUsers];
            updatedUsers[index] = {...prevUsers[index], ...updatedChat};
            const movedUp = [
                updatedUsers[index],
                ...updatedUsers.slice(0, index),
                ...updatedUsers.slice(index + 1)
            ];

            return movedUp;
        } else {
            return [updatedChat, ...prevUsers];
        }
    }

    const {containerRef, inAtEnd} = useCheckScroll();


    useEffect(() => {
        if (!echo) return;

        if (echo.connector.pusher.connection.state === 'disconnected') {
            echo.connector.pusher.connect();
        }

        const channel = echo.channel(`chat-updates.${student?.user_id}`);

        channel.listen('.chat.updated', (event) => {
            setUsers(prev => updateUsersList(prev, event));
        });

        return () => {
            echo.leave(`chat-updates.${student?.user_id}`);
        };
    }, [echo, student]);

    const handleScroll = () => {
        if (inAtEnd('down')) {
            if (pages > 1 && page <= pages && !isLoading)
                setPage(p => p + 1)
        }
    };

    return (
        <div className="flex flex-col border border-natural_gray-200 rounded-xl overflow-hidden h-full">
            {!isLoading ? <>
                <div className="py-4 px-6">
                    <Input
                        radius="sm"
                        startContent={<Search className="w-5 h-5 fill-natural_gray-600"/>}
                        placeholder="جستجو"
                        value={search}
                        onValueChange={setSearch}
                        variant="bordered"
                    />
                </div>

                <div ref={containerRef} onScroll={handleScroll}
                     className="grow flex flex-col max-h-[calc(100vh-72px)] overflow-y-auto">
                    {filteredUsers.length ? filteredUsers.map((user) => (
                        <div
                            key={user.id}
                            onClick={() => onSelectUser(user)}
                            className={`p-4 flex gap-4 items-center cursor-pointer border-b border-natural_gray-100 hover:bg-primary-50 duration-300 ${
                                activeUser?.id === user.id ? 'bg-primary-50' : ''
                            }`}
                        >
                            <Avatar src={user.user_image} showFallback size='sm'/>
                            <div className="flex-1 flex flex-col gap-1 ">
                                <div className="flex items-center justify-between gap-2">
                                    <p className='font-semibold text-sm'>{user.user_name}</p>
                                    <span className='text-[10px]'>{user.last_message_time}</span>
                                </div>
                                <p dir='auto' className="text-xs line-clamp-1 ">
                                    {user.last_message}
                                </p>
                            </div>
                        </div>
                    )) : <p className='text-center my-8'>موردی پیدا نشد</p>}
                    {pages > 1 && isLoading && <Spinner color="success" classNames={{base: 'mt-6'}}/>}
                </div>
            </> : <div className="my-8 w-full centerOfParent">
                <Spinner color="success" size="lg"/>
            </div>}
        </div>
    );
}
