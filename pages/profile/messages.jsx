"use client"
import React, {useEffect, useState} from 'react';
import Chat from '@/components/Messages/Chat';
import UserList from '@/components/Messages/UserList';
import Profile from "@/components/Messages/Profile";

const Messages = () => {
    const [activeUser, setActiveUser] = useState(null);
    const [activeView, setActiveView] = useState("list");

    const handleSelectUser = (user) => {
        setActiveUser(user);
        setActiveView("chat");
        window.history.pushState({view: "chat"}, '', '');
    };
    const handleShowProfile = () => {
        setActiveView("profile");
        window.history.pushState({view: "chat"}, '');
    };

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
                            user={activeUser}
                            onProfileClick={() => setActiveView("profile")}
                            onBack={handleBack}
                        />
                    )
                );
            case "profile":
                return (
                    activeUser && (
                        <Profile user={activeUser} onBack={handleBack}/>
                    )
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="lg:grid hidden grid-cols-9 gap-6 h-screen">
                <div className="lg:col-span-3">
                    <UserList activeUser={activeUser} onSelectUser={handleSelectUser}/>
                </div>
                <div className="lg:col-span-6">
                    <Chat user={activeUser} onBack={handleBack} onProfileClick={handleShowProfile}
                          activeView={activeView}/>
                </div>
            </div>

            <div className="lg:hidden h-screen">
                <div className="h-full">
                    {render()}
                </div>
            </div>
        </>
    );
};

export default Messages;
