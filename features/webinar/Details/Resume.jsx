//icons
import Media from '@icons/users.svg';
import Image from 'next/image';
import Link from "next/link";
import Skills from "@/features/private-class/Details/Skills";

const Resume = ({professor, profile, professor_id, skills}) => {
        return (
            <>
                <div
                    className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52"
                    id='professor'>
                    <div className="centerOfParent gap-2 w-fit">
                        <div className="centerOfParent"><Media className='w-5 h-5 fill-primary-800'/></div>
                        <span className='sm:text-base text-sm text-primary-950'>استاد</span>
                    </div>
                    <div className="rounded-lg bg-natural_gray-50 w-full flex items-center justify-between px-4 py-2.5">
                        <div className="flex items-center gap-4">
                            <div className="centerOfParent rounded-full w-[60px] h-[60px] overflow-hidden">
                                <Image src={profile || '/images/image 144.png'} width={0} height={0} sizes='100vw'
                                       className='w-full object-cover h-full'/>
                            </div>
                            <p className='sm:text-base text-xs'>{professor}</p>
                        </div>
                        <Link href={`/private-class/${professor_id}`} target='_blank'
                              className='rounded sm:text-base text-xs border-1.5 text-secondary-500 h-fit border-secondary-300 py-2 px-6 centerOfParent'>مشاهده
                        </Link>
                    </div>
                    <Skills data={skills}/>
                </div>
            </>
        );
    }
;

export default Resume;