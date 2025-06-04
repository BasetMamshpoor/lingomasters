"use client"
import React, {useEffect, useState} from 'react';
import Chat from '@/features/profile/Messages/Chat';
import UserList from '@/features/profile/Messages/UserList';
import Profile from "@/features/profile/Messages/Profile";
import useMediaQuery from "@/hooks/useMediaQuery";
import useGetRequest from "@/hooks/useGetRequest";
import {useRouter} from "next/router";

const Messages = () => {
    const {query} = useRouter()
    const [activeUser, setActiveUser] = useState(query.user ? {id: query.user} : null);
    const [activeView, setActiveView] = useState("list");
    const [user] = useGetRequest(true, activeUser && `/chat/user_details/${activeUser.id}`)


    const handleSelectUser = (user) => {
        setActiveUser(user);
        setActiveView("chat");
        window.history.pushState({view: "chat"}, '', '');
    };
    const handleShowProfile = () => {
        setActiveView("profile");
        window.history.pushState({view: "chat"}, '');
    };
    const isMatch = useMediaQuery('(max-width: 1023.98px)')

    const handleBack = () => {
        if (activeView === "profile") {
            setActiveView("chat");
        } else if (activeView === "chat") {
            setActiveUser(null);
            setActiveView("list");
        }
    };

    useEffect(() => {
        const handlePopState = (e) => {
            e.preventDefault();
            const state = e.state;
            if (state?.view === undefined) {
                setActiveView('list');
                setActiveUser(null)
                return
            }
            if (state?.view) {
                setActiveView(state.view);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const render = () => {
        switch (activeView) {
            case "list":
                return <UserList onSelectUser={handleSelectUser} activeUser={activeUser}/>;
            case "chat":
                return (
                    activeUser && (
                        <Chat
                            user={user}
                            onProfileClick={() => setActiveView("profile")}
                            onBack={handleBack}
                        />
                    )
                );
            case "profile":
                return (
                    activeUser && user && (
                        <Profile user={user} onBack={handleBack}/>
                    )
                );
            default:
                return null;
        }
    };

    return (
        <>
            {!isMatch ? <div className="lg:grid hidden grid-cols-9 gap-6 h-screen mb-8">
                    <div className="lg:col-span-3">
                        <UserList activeUser={activeUser} onSelectUser={handleSelectUser}/>
                    </div>
                    <div className="lg:col-span-6">
                        <Chat user={user} onBack={handleBack} onProfileClick={handleShowProfile}
                              activeView={activeView}/>
                    </div>
                </div>

                : <div className="h-screen">
                    <div className="h-full">
                        {render()}
                    </div>
                </div>}
        </>
    );
};

export default Messages;
