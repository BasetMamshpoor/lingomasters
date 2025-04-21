import {useContext, useState} from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input, Button, Avatar} from "@heroui/react";
import Link from "next/link";
import Search from '@icons/search.svg'
import Down from '@icons/arrow-down.svg'
import Arrow from '@icons/arrow-down.svg'
import Menu from '@icons/menu.svg'
import Logout from '@icons/logout.svg'
import User from '@icons/user-tick.svg'
import Close from '@icons/close.svg'
import Iran from '@icons/Flags/Country=Iran, Style=Flag, Radius=On.svg'
import {Information} from "@/providers/InformationProvider";
import {Language} from "@/providers/languageProvider";
import links from "@/db/headerLnks";
import Image from "next/image";
import {useRouter} from "next/router";

const Item = ({i, isSubmenuOpen}) => <div className="flex items-center justify-between gap-1">
    {i.icon}{i.text}<Down className={`w-4 h-4 transform transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`}/>
</div>


const Header = () => {
    const {push} = useRouter()
    const {student, logout} = useContext(Information)
    const {languages} = useContext(Language)
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isSubmenuOpen, setSubmenuOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Function to toggle the submenu
    const toggleSubmenu = () => {
        setSubmenuOpen(!isSubmenuOpen);
    };

    return (
        <>
            <header className="sm:py-6 py-3 sticky top-0 bg-[#FBFCFE] z-[50] border-b" dir="rtl">
                <div className="container flex flex-col gap-6 sm :px-10">
                    <div className="flex items-center justify-between">
                        <div className="centerOfParent">
                            <div className="lg:flex hidden items-center justify-center">
                                <Dropdown dir="rtl">
                                    <DropdownTrigger className="cursor-pointer">
                                        <div className="flex items-center gap-1"><Iran/><Down className='w-4 h-4'/>
                                        </div>
                                    </DropdownTrigger>
                                    <DropdownMenu>
                                        <DropdownItem key="persian">
                                            <div className="flex items-center gap-3"><Iran/> فارسی</div>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <div className="lg:hidden centerOfParent cursor-pointer" onClick={toggleSidebar}>
                                {isSidebarOpen ?
                                    <Close className='border-[1.5px] rounded border-primary-600 fill-primary-700'/> :
                                    <Menu className='border-[1.5px] rounded border-primary-600 fill-primary-700'/>}
                            </div>
                        </div>
                        <Link href='/' className="centerOfParent"><h1
                            className="font-Metal sm:text-3xl tetx-xl">{process.env.NEXT_PUBLIC_LOGO}</h1></Link>
                        <div className="centerOfParent gap-4">
                            <div className="lg:hidden centerOfParent">
                                <Dropdown>
                                    <DropdownTrigger><Iran/></DropdownTrigger>
                                    <DropdownMenu>
                                        <DropdownItem key="persian"><Iran/></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            {!student ? <>
                                <div className="sm:hidden">
                                    <Dropdown dir='rtl'>
                                        <DropdownTrigger>
                                            <button
                                                className="effect-2 px-4 py-2 sm:hidden flex items-center justify-center bg-primary-600 text-white rounded text-sm">ورود
                                                به پنل
                                            </button>
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="Static Actions">
                                            <DropdownItem key="new" href="/auth/login">ورود زبان آموز</DropdownItem>
                                            <DropdownItem key="new2"
                                                          href='https://professor.lingomasters.ir/auth/login'>ورود
                                                استاد</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <div className="sm:flex hidden items-center gap-4">
                                    <Link href='/auth/login'
                                          className="effect-2 mr-6 px-4 py-2 centerOfParent bg-primary-600 text-white rounded text-sm">ورود
                                        زبان ‌آموز</Link>
                                    <Link href='https://professor.lingomasters.ir/auth/login'
                                          className="effect-1 px-4 py-2 centerOfParent border-1.5 rounded border-secondary-500 text-secondary-500 text-sm">
                                        ورود استاد
                                    </Link>
                                </div>
                            </> : <div className="centerOfParent">
                                <Dropdown
                                    placement="bottom-start"
                                    classNames={{content: 'rounded'}}>
                                    <DropdownTrigger>
                                        <div className="flex items-center gap-2">
                                            <Avatar
                                                showFallback
                                                as="button"
                                                className="transition-transform w-10 h-10"
                                                src={student?.profile}
                                            />
                                            <div
                                                className={`centerOfParent duration-300 ${open.profile ? 'rotate-180' : ''}`}>
                                                <Arrow className={'w-3 h-3'}/>
                                            </div>
                                        </div>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Profile Actions"
                                        variant="bordered">
                                        <DropdownItem key="profile" href='/profile' onPress={() => setTitle('پروفایل')}>
                                            <div className='flex items-center gap-4 justify-end'>
                                                <span>پروفایل کاربری</span>
                                                <div className="centerOfParent"><User/>
                                                </div>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem key="logout" onPress={logout}>
                                            <div className='flex items-center gap-4 justify-end'>
                                                <span>خروج از حساب</span>
                                                <div className="centerOfParent"><Logout/>
                                                </div>
                                            </div>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>}
                        </div>
                    </div>
                    <div className="lg:flex items-center justify-center hidden w-full">
                        <Input radius="sm" placeholder="جستجو استاد، دوره آموزشی و ..." isClearable variant="bordered"
                               className="max-w-[628px] bg-white"
                               startContent={<Search className="fill-natural_gray-600"/>}/>
                    </div>
                    <div className="lg:block hidden">
                        <ul className="list-none flex items-center justify-between">
                            {links.map((i, o) => {
                                return (
                                    <li key={o}
                                        className="[&>a]:flex [&>a]:items-center [&>a]:gap-3 cursor-pointer">{i.underMenu ?
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <div><Item i={i}/></div>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                className="max-h-64 overflow-y-auto scrollbar-hide scrollbar scrollbar-w-8 scrollbar-thumb-natural_gray-800 scrollbar-track-white">
                                                {i.items === null ? languages?.languages.map(c =>
                                                        <DropdownItem key={c.link}
                                                                      onPress={() => push(`/private-class?language=${c.id}`)}>
                                                            <div className='flex items-center gap-1'>
                                                                <Image
                                                                    src={c.flag} width={24} height={24}
                                                                    alt={c.language}/> {c.language}
                                                            </div>
                                                        </DropdownItem>) :
                                                    i.items.map(c =>
                                                        <DropdownItem key={c.link}
                                                                      onPress={() => push(c.link)}>
                                                            {c.text}
                                                        </DropdownItem>)}
                                            </DropdownMenu>
                                        </Dropdown>
                                        : <Link href={i.link} className="text-black">{i.icon}{i.text}</Link>}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </header>
            <div
                className={`z-[9] fixed lg:hidden top-0 bottom-0 w-full duration-300 backdrop-blur-sm ${isSidebarOpen ? 'right-0' : '-right-full'}`}
                onClick={(e) => e.target === e.currentTarget ? setSidebarOpen(false) : null}>
                <aside dir="rtl"
                       className={`fixed z-10 top-0 right-0 w-64 h-screen pt-[90px] duration-300 ${isSidebarOpen ? '-right-1' : '!-right-full'} sm:translate-x-0 bg-white border-l border-gray-200`}>
                    <div className="h-full px-3 py-4 overflow-y-auto bg-white">
                        <ul className="flex flex-col gap-2 font-medium">
                            {links.map((i, o) => {
                                return (
                                    <li key={o} className="[&>a]:flex [&>a]:items-center [&>a]:gap-3 cursor-pointer"
                                        onClick={i.underMenu ? () => {
                                        } : () => setSidebarOpen(false)}>
                                        {i.underMenu ?
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={toggleSubmenu}
                                                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-300 rounded-lg group hover:bg-gray-50"
                                                >
                                                    <span className="flex-1 text-left whitespace-nowrap">
                                                        <Item i={i} isSubmenuOpen={isSubmenuOpen}/>
                                                    </span>
                                                </button>
                                                {isSubmenuOpen && (
                                                    <ul className="pr-8 flex flex-col gap-1">

                                                    </ul>
                                                )}
                                            </>
                                            : <Link className="p-2 duration-300 hover:bg-gray-50" href={i.link}>
                                                {i.icon}{i.text}
                                            </Link>
                                        }
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default Header;