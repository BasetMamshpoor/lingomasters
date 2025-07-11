import {
    Breadcrumbs,
    BreadcrumbItem,
    Popover,
    PopoverTrigger,
    PopoverContent,
    addToast,
    RadioGroup, Radio
} from "@heroui/react";
//icons
import Eye from '@icons/eye-right.svg'
import Alert from '@icons/info-circle.svg'
import RuleOfCancle from '@/components/RuleOfCancle';
import React, {useEffect} from "react";
import Like from "@/components/Like";
import formatNumber from "@/helpers/formatNumber";
import Image from "next/image";
import Rate from "@/components/Rate";
import {useRouter} from "next/router";
import Share from "@/components/Share";

const Hero = ({data = {}, id}) => {
    const {query, asPath, replace} = useRouter()
    const {
        name,
        rate,
        teaching_types,
        is_like,
        views_count,
        city,
        genders,
        language_levels,
        age_groups,
        rate_count
    } = data

    const handleChange = (value) => {
        replace({pathname: asPath.split('?')[0], query: {...query, language: value}},
            undefined,
            {shallow: true}
        );
    }
    useEffect(() => {
        handleChange(data.languages[0].id)
    }, []);

    return (
        <>
            <div className="hidden lg:block mb-20">
                <div className="container">
                    <div className="relative bg-gradient-to-t from-[#2D59C826] to-[#89C9FF14] h-[294px] py-8 px-10">
                        <div className="">
                            <div className="flex items-center justify-between mb-10">
                                <Breadcrumbs
                                    separator='/'
                                    classNames={{list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600'}}
                                    itemClasses={{
                                        separator: "px-2 text-natural_gray-600"
                                    }}>
                                    <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                                    <BreadcrumbItem href={`/private-class`}>کلاس های خصوصی</BreadcrumbItem>
                                    <BreadcrumbItem>{name}</BreadcrumbItem>
                                </Breadcrumbs>
                                <Share title={name}/>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <h1 className='text-2xl font-semibold'>{name}</h1>
                                    <span className='text-natural_gray-600 text-xs'>(کد استاد: {id})</span>
                                </div>
                                <div className="flex flex-col items-end gap-3">
                                    <Like id={id} isLike={is_like} url='/private-reserve'/>
                                    <div className="centerOfParent gap-1">
                                        <div className="centerOfParent"><Eye className='w-4 h-4 fill-primary-700'/>
                                        </div>
                                        <span className="text-sm">{formatNumber(views_count)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <RadioGroup
                                    value={query.language}
                                    onValueChange={handleChange}
                                    color='success'
                                    style={{"--heroui-success": "196 94% 25%"}}
                                    orientation="horizontal">
                                    {data.languages.map(e => (
                                        <Radio value={e.id.toString()} key={e.id}
                                               classNames={{label: 'flex items-center gap-2'}}>
                                            <div className="centerOfParent w-fit">
                                                <Image width={24} height={24} alt='flag'
                                                       src={e.flag}/></div>
                                            <span>{e.title}</span>
                                        </Radio>
                                    ))}
                                </RadioGroup>
                                <div className="flex items-center gap-1">
                                    <Rate rate={rate} id={id} url='/private-reserve'/>
                                    <div className="flex items-center gap-1 text-xs">
                                        <strong>{rate}</strong>
                                        از {rate_count} نفر
                                    </div>
                                </div>
                            </div>
                            <Popover backdrop='blur'
                                     className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[40vw]'>
                                <PopoverTrigger>
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        <div className="centerOfParent"><Alert/></div>
                                        <span
                                            className='text-rose-700 text-xs'>مشاهده قوانین لغو کلاس توسط زبان آموز</span>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent><RuleOfCancle/></PopoverContent>
                            </Popover>
                        </div>
                        <div className="w-full absolute -bottom-5 left-0 flex gap-4 items-center px-10">
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>نوع تدریس</p>
                                <h4 className='text-sm font-semibold'>{!!teaching_types?.length && teaching_types.join(' | ')}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>شهر</p>
                                <h4 className='text-sm font-semibold'>{city}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>تدریس برای</p>
                                <h4 className='text-sm font-semibold'>{!!genders?.length && genders.join(' | ')}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>سطح زبان</p>
                                <h4 className='text-sm font-semibold'>{!!language_levels?.length && language_levels.join(' | ')}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>رده سنی</p>
                                <h4 className='text-sm font-semibold'>{!!age_groups?.length && age_groups.join(' | ')}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;