import React, {useMemo, useState} from 'react';
import {Avatar, Input} from "@heroui/react";
import Search from "@icons/search.svg";

const mockUsers = Array.from({length: 4}, (_, index) => ({
    id: index + 1,
    name: `کاربر ${index + 1}`,
    profile: '',
    time: `${10 + (index % 12)}:${(index % 60).toString().padStart(2, '0')} ${index % 2 === 0 ? 'AM' : 'PM'}`,
    lastMessage: `این یک پیام نمونه طولانی‌تر است که برای نمایش بهتر استفاده می‌شود ${index + 2}`,
}));

export default function UserList({activeUser, onSelectUser}) {
    const [search, setSearch] = useState('');

    const filteredUsers = useMemo(() => {
        const term = search.toLowerCase();
        return mockUsers.filter(user =>
            user.name.toLowerCase().includes(term) ||
            user.lastMessage.toLowerCase().includes(term)
        );
    }, [search, mockUsers]);

    return (
        <div className="flex flex-col border border-natural_gray-200 rounded-xl overflow-hidden h-full">
            {/* Search Bar */}
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

            {/* User List */}
            <div className="grow flex flex-col max-h-[calc(100vh-72px)] overflow-y-auto">
                {filteredUsers.length ? filteredUsers.map((user) => (
                    <div
                        key={user.id}
                        onClick={() => onSelectUser(user)}
                        className={`p-4 flex gap-4 items-center cursor-pointer border-b border-natural_gray-100 hover:bg-primary-50 duration-300 ${
                            activeUser?.id === user.id ? 'bg-primary-50' : ''
                        }`}
                    >
                        <Avatar src={user.profile} showFallback size='sm'/>
                        <div className="flex-1 flex flex-col gap-1 ">
                            <div className="flex items-center justify-between gap-2">
                                <p className='font-semibold text-sm'>{user.name}</p>
                                <span className='text-[10px]'>{user.time}</span>
                            </div>
                            <p dir='auto' className="text-xs line-clamp-1 ">
                                {user.lastMessage}
                            </p>
                        </div>
                    </div>
                )) : <p className='text-center my-8'>موردی پیدا نشد</p>}
            </div>
        </div>
    );
}
