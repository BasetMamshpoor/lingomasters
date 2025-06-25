import React, {useContext, useState} from 'react';
import Link from "next/link";
import {Language} from "@/providers/languageProvider";
import Image from "next/image";

const SubMenu = ({setSidebarOpen, Item, i}) => {
    const {languages} = useContext(Language)
    const [isSubmenuOpen, setSubmenuOpen] = useState(false);
    const toggleSubmenu = () => {
        setSubmenuOpen(!isSubmenuOpen);
    };
    return (
        <>
            <button
                type="button"
                onClick={toggleSubmenu}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-300 rounded-lg group hover:bg-gray-50 mb-2"
            >
                <span className="flex-1 text-left whitespace-nowrap">
                    <Item i={i} isSubmenuOpen={isSubmenuOpen}/>
                </span>
            </button>
            {isSubmenuOpen && (
                <ul className="px-4 flex flex-col border border-natural_gray-200 rounded max-h-64 overflow-y-auto">
                    {i.items === null ?
                        languages?.languages.map(e => (
                            <li onClick={() => setSidebarOpen(false)} key={e.id}>
                                <Link href={`/private-class?language=${e.id}`}
                                      className='flex items-center gap-1 py-1 border-b'>
                                    <Image
                                        src={e.flag} width={24} height={24}
                                        alt={e.language}/> {e.language}
                                </Link>
                            </li>
                        ))
                        : i.items.map(e => (
                            <li onClick={() => setSidebarOpen(false)} key={e.id}>
                                <Link href={e.link} className='flex items-center gap-1 py-1 border-b'>{e.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            )}
        </>
    );
};

export default SubMenu;