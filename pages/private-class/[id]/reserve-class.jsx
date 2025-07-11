import Progress from '@/components/Progress';
import Image from 'next/image';
import React, {useState} from 'react';
import ChooseBook from '@/features/private-class/reserve/ChooseBook';
import {Input, Spinner, Textarea} from "@heroui/react";
import Link from 'next/link';
import Calendar from '@/features/private-class/reserve/Calendar';
import ReserveCheckout from '@/features/private-class/reserve/ProfessorReserve';
import useGetRequest from "@/hooks/useGetRequest";
import {useRouter} from "next/router";
import withAuth from "@/components/withAuth";
import TabClass from "@/features/private-class/reserve/TabClass";
import TabLanguage from "@/features/private-class/reserve/TabLanguage";
import TabAgeGroup from "@/features/private-class/reserve/TabAgeGroup";
import TabTeachingType from "@/features/private-class/reserve/TabTeachingType";
import TabPoint from "@/features/private-class/reserve/TabPoint";
import TabLevel from "@/features/private-class/reserve/TabLevel";

const stepsList = [
    'وارد کردن اطلاعات',
    'تقویم آموزشی',
    'تاییدیه',
    'پرداخت'
];

let previousQuery = null;
let previousResult = null;

function filterQuery(query) {
    const allowedKeys = ["language", "ageGroup", "subject_id", "level"];
    const filteredResult = Object.keys(query)
        .filter(key => allowedKeys.includes(key))
        .reduce((result, key) => {
            result[key] = query[key];
            return result;
        }, {});

    if (previousQuery && JSON.stringify(filteredResult) === JSON.stringify(previousResult)) {
        return previousResult; // Return the previous reference
    }

    previousQuery = query;
    previousResult = filteredResult;

    return filteredResult;
}

const Reserve = () => {
    const {query} = useRouter()
    const defaultState = {
        latitude: 35.699764715921205,
        longitude: 51.3380652666092,
        class_type: query.type,
        times: [],
    }
    const [steps, setSteps] = useState(1)
    const [state, setState] = useState(defaultState)
    const filteredQuery = filterQuery(state);
    const [data, s, r, p, so, isLoading] = useGetRequest(true, query.id && `/private-reserve/details/${query.id}`, 1, filteredQuery)


    const handleNext = (e) => {
        e.preventDefault()
        setSteps(steps + 1)
        window.scrollTo({top: 0, behavior: 'smooth'});

    }
    return (
        !isLoading ? (data && <>
            <main className='my-6' dir='rtl'>
                <div className="container">
                    <Progress title="کلاس خصوصی" link='private-class' active={steps} steps={stepsList}
                              page={data?.professor?.name}/>
                    <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-y-6 my-10">
                        {steps !== 3 && <div
                            className="col-span-1 h-fit lg:order-1 sm:p-4 py-4 px-3 rounded-lg border border-natural_gray-100 bg-white flex flex-col gap-10 items-center">
                            <div className="flex flex-col gap-6">
                                <div className="centerOfParent rounded-full overflow-hidden w-28 h-28">
                                    <Image src={data.professor?.profile || '/images/image 144.png'} width={0} height={0}
                                           sizes='100vw' alt={data.professor?.name || ''}
                                           className='w-full h-full object-cover'/>
                                </div>
                                <div className="flex flex-col gap-2 items-center">
                                    <h1 className='sm:text-xl text-base'>{data.professor?.name}</h1>
                                    <p className='text-natural_gray-600 text-xs'>(کد استاد: {data.professor?.id})</p>
                                </div>
                            </div>
                            <div className="flex items-center w-full justify-between py-2 px-3 bg-neutral-50">
                                <p className="text-xs text-natural_gray-950">جلسه ۲۵ دقیقه‌ای</p>
                                <div className="flex  justify-end gap-2">
                                    {data.professor?.price !== data.professor?.price_discount &&
                                        <div
                                            className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-xs">
                                            {data.professor?.discount}٪
                                        </div>}
                                    <div className="flex flex-col">
                                        {data.professor?.price !== data.professor?.price_discount && <del
                                            className="text-sm text-natural_gray-500 hasToman">{data.professor?.price?.toLocaleString()}</del>}
                                        <p className="text-sm hasToman text-green-600 hasToman">{data.professor?.price_discount?.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {steps === 3 ? <ReserveCheckout setSteps={setSteps} id={state.id}/>
                            : steps === 2 ?
                                <Calendar setState={setState} state={state} setSteps={setSteps} id={query.id}/>
                                : <form onSubmit={handleNext}
                                        className="col-span-3 py-6 sm:px-4 px-3 gap-10 border rounded-lg border-natural_gray-100 bg-white flex flex-col">
                                    <div className="flex flex-col gap-10">
                                        <TabLanguage data={data.languages} setSelected={setState}
                                                     defaultState={defaultState}
                                                     selected={state.language}/>
                                        <TabAgeGroup data={data.age_groups} setSelected={setState}
                                                     defaultState={defaultState}
                                                     selected={state.ageGroup}/>
                                        <TabLevel data={data.language_levels} setSelected={setState}
                                                  defaultState={defaultState}
                                                  selected={state.level}/>
                                        <TabTeachingType
                                            address={data.address}
                                            platforms={data.platform}
                                            data={data.teaching_types}
                                            setSelected={setState}
                                            selected={state}/>
                                        <TabPoint data={data.point.goals}
                                                  setSelected={setState}
                                                  selected={state.subject_id}>
                                            <TabPoint
                                                setSelected={setState}
                                                selected={state.subject_id}
                                                data={data.point.exams}
                                            /></TabPoint>
                                        <TabClass data={data.class_types_details} state={state} setState={setState}/>
                                        <ChooseBook data={data.books} setState={setState} state={state}/>
                                        <div className="flex flex-col gap-4">
                                            <p>در صورتی که پیامی برای استاد دارید بنویسید.</p>
                                            <div>
                                                <span className="font-semibold">نکته مهم:</span>
                                                <p className="whitespace-break-spaces text-sm leading-7">
                                                    نوشتن یک توضیح کوتاه در مورد هدف یا <b>اهداف کلی‌تون، دلیل انتخاب
                                                    این کلاس، زمینه‌هایی که در آن‌ها احساس آمادگی یا تسلط دارید،
                                                    چالش‌هایی که با آن‌ها روبه‌رو هستید، و همچنین مهارت یا مهارت‌هایی که
                                                    مایل به تقویت‌شون هستید</b> (حتی اگر بازه زمانی خاصی مد نظرتون هست)
                                                    <br/>
                                                    به استاد کمک می‌کنه تا طرح درسی رو دقیق‌تر و بر اساس نیازها و
                                                    خواسته‌های شما تنظیم کنه؛
                                                    <br/>
                                                    در نتیجه، در طول کلاس از زمان بهترین استفاده رو خواهید برد و یادگیری
                                                    مؤثرتری تجربه می‌کنید.
                                                </p>
                                            </div>
                                            <Textarea
                                                type="number"
                                                value={state.text}
                                                onValueChange={e => setState(p => ({...p, text: e}))}
                                                radius='sm'
                                                variant='bordered'/>
                                        </div>
                                    </div>
                                    <div className="flex items-end sm:self-end gap-6">
                                        <Link href='/private-class'
                                              className='sm:w-[140px] w-full effect-1 sm:text-base text-xs sm:flex-[1_0_0] sm:px-6 px-4 sm:py-4 py-2 rounded border-secondary-500 sm:border-[1.5px] border text-secondary-500 centerOfParent'>انصراف</Link>
                                        <button
                                            type="submit"
                                            className="w-full effect-2 sm:py-4 py-2 sm:px-6 px-4 sm:text-base text-xs rounded text-white bg-primary-600 sm:w-[140px] self-end">ارسال
                                        </button>
                                    </div>
                                </form>
                        }
                    </div>
                </div>
            </main>
        </>) : <div className="centerOfParent  h-[50vh] my-10"><Spinner color='success' size='lg'/></div>
    );
};

export default withAuth(Reserve, false, true);