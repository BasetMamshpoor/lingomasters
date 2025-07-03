import React, {useContext} from 'react';
import SidebarItem from './SidebarItem';
import ClassSubMenu from './ClassSubMenu';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useRouter} from "next/router";
import Link from "next/link";
import {sidebarItems} from "@/db/SidebarData";
import withAuth from "@/components/withAuth";
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger
} from "@heroui/react";
import {Language} from "@/providers/languageProvider";
import Arrow from "@icons/arrow-down.svg";
import Image from "next/image";

const Sidebar = ({mobileOpen, setSidebarOpen, setTitle}) => {
    const {pathname} = useRouter()
    const {languages, selectedLanguage, handleSelectLanguage} = useContext(Language)

    return (
        <>
            <div
                className={`lg:block hidden transition-all duration-300 w-full max-w-[249px]`}>
                <div
                    className="flex flex-col items-center gap-6 bg-white border border-natural_gray-200 rounded-2xl px-4 py-10">
                    <Link href='/'
                          className={`text-3xl duration-300 font-Metal`}>{process.env.NEXT_PUBLIC_LOGO}</Link>
                    <div className="flex flex-col w-full gap-4">
                        {sidebarItems.map((item) => {
                            const isActive = item.href
                                ? pathname === item.href
                                : item.subMenu?.some(sub => pathname.startsWith(sub.href));
                            return (
                                <div className='group' key={item.id}>
                                    <SidebarItem
                                        title={item.title}
                                        icon={item.icon}
                                        link={item.href}
                                        isActive={isActive}
                                        setSidebarOpen={setSidebarOpen}
                                        setTitle={setTitle}
                                    />
                                    {item.subMenu &&
                                        <ClassSubMenu
                                            items={item.subMenu || []}
                                            pathname={pathname}
                                            setTitle={setTitle}
                                            isActive={isActive}
                                            setSidebarOpen={setSidebarOpen}/>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Drawer size="full" dir="rtl" isOpen={mobileOpen} onOpenChange={setSidebarOpen}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader/>
                            <DrawerBody>
                                <div className="flex flex-col w-full gap-4 pb-4">
                                    {!!languages?.student_languages?.length&&<div className="sm:hidden items-center w-full flex">
                                        <Dropdown
                                            dir="rtl"
                                            placement="bottom-end"
                                            classNames={{
                                                content: 'rounded min-w-0 w-full',
                                                trigger: 'w-full justify-between',
                                            }}
                                        >
                                            <DropdownTrigger>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="centerOfParent">
                                                            <Image width={24} height={24}
                                                                   src={selectedLanguage?.flag}
                                                                   alt={selectedLanguage?.language}/></div>
                                                        <p>انتخاب زبان تدریس</p>
                                                    </div>
                                                    <div
                                                        className={`centerOfParent duration-300 ${open.lang ? 'rotate-180' : ''}`}>
                                                        <Arrow className={'w-3 h-3'}/>
                                                    </div>
                                                </div>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                classNames={{base: 'w-full'}}
                                                aria-label="langauge Actions"
                                                variant="bordered">
                                                {languages?.student_languages.map((lang) => {
                                                    return <DropdownItem key={lang.language}
                                                                         onPress={e => handleSelectLanguage(lang)}>
                                                        <div className="flex items-center gap-2">
                                                            <Image width={24} height={24} src={lang.flag}
                                                                   alt={lang.language}/>
                                                            <p>{lang.language}</p>
                                                        </div>
                                                    </DropdownItem>
                                                })}
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>}
                                    {sidebarItems.map((item) => {
                                        const isActive = item.href
                                            ? pathname === item.href
                                            : item.subMenu?.some(sub => pathname.startsWith(sub.href));
                                        return <div className='group' key={item.id}>
                                            <SidebarItem
                                                title={item.title}
                                                icon={item.icon}
                                                link={item.href}
                                                isActive={isActive}
                                                setSidebarOpen={onClose}
                                                setTitle={setTitle}
                                            />
                                            {item.subMenu &&
                                                <ClassSubMenu
                                                    setSidebarOpen={onClose}
                                                    items={item.subMenu || []}
                                                    pathname={pathname}
                                                    setTitle={setTitle}
                                                    isActive={isActive}/>}
                                        </div>
                                    })}
                                </div>
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}
export default withAuth(Sidebar, false, true);