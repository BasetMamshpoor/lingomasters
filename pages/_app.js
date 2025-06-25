import "@/styles/globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {HeroUIProvider, ToastProvider} from "@heroui/react";
import axios from "axios";
import {useRouter} from "next/router";
import Sidebar from "@/features/profile/Sidebar/Sidebar";
import HeaderProfile from "@/features/profile/HeaderProfile";
import Right from "@icons/chevron-right.svg";
import InformationProvider, from "@/providers/InformationProvider";
import LanguageProvider from "@/providers/languageProvider";
import {useState} from "react";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`

export default function App({Component, pageProps}) {
    const {push, pathname, back} = useRouter();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [title, setTitle] = useState('')
    const open = pathname.includes('/profile')

    const isAuthPage = (pathname === "/auth/login") || (pathname === "/auth/register");
    const isProfileRoute = pathname.startsWith('/profile');

    return (
        <HeroUIProvider navigate={push}>
            <ToastProvider
                placement='top-right'
                toastProps={{
                    dir: 'rtl',
                    timeout: 3000,
                    shouldShowTimeoutProgress: true,
                }}/>
            {isAuthPage ? (
                    <div className='max-w-[1440px] mx-auto' dir={'rtl'}>
                        <Component {...pageProps} />
                    </div>)
                :
                <InformationProvider>
                    <LanguageProvider>
                        {isProfileRoute ?
                            <div
                                className='max-w-[1440px] mx-auto py-6 sm:px-6 px-2 gap-6 overflow-x-hidden flex min-h-screen relative'
                                dir='rtl'>
                                <Sidebar mobileOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}
                                         setTitle={setTitle}/>
                                <div className="flex-grow flex flex-col gap-12 w-full">
                                    <HeaderProfile setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen}
                                                   title={title} setTitle={setTitle}/>
                                    <div className='flex flex-col gap-6'>
                                        {open && <div
                                            onClick={back}
                                            className='flex items-center text-primary-700 gap-2 mr-5 cursor-pointer'>
                                            <Right className='fill-primary-700 w-5 h-5'/>
                                            بازگشت
                                        </div>}
                                        <Component {...pageProps}/>
                                    </div>
                                </div>
                            </div> :
                            <div className='max-w-[1440px] mx-auto'>
                                <Header setTitle={setTitle}/>
                                <Component {...pageProps} />
                                <Footer/>
                            </div>}
                    </LanguageProvider>
                </InformationProvider>
            }
        </HeroUIProvider>
    );
}