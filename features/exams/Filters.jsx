import React, {useContext, useRef, useState} from 'react';
import {
    Input,
    Radio,
    RadioGroup,
} from "@heroui/react";
import {useRouter} from "next/router";

import FilterIcon from '@icons/filter.svg';
import Search from '@icons/search.svg';
import {Language} from "@/providers/languageProvider";

const Filters = ({setCurrentPage}) => {
    const searchRef = useRef(null)
    const {languages} = useContext(Language)
    const router = useRouter()
    const {...queries} = router.query

    const readUrl = () => {
        let object = {};
        for (const name in queries) {
            if (Object.hasOwnProperty.call(queries, name)) {
                let filter = []
                const value = queries[name];
                const newValue = value.split('-')
                newValue.forEach((f, i) => {
                    filter.push({value: f, name: i})
                })
                object[name] = filter
            }
        }
        return object
    }
    const [filters, setFilters] = useState(readUrl() || {})

    const handleFilter = (name, value) => {
        setFilters(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
        changeUrl(name, value)
        setCurrentPage(1)
    }

    const changeUrl = (name, value) => {
        let str = null;
        !!Array.isArray(value) ? value.forEach((f, i) => {
            const is_Array_String = typeof f === 'string'
            if (i > 0) {
                str = str + '-' + (is_Array_String ? f : f.value)
            } else if (i === 0) {
                str = is_Array_String ? f : f.value
            } else {
                str = null
            }
        }) : str = value
        if (str === null) {
            const {[name]: O, ...query} = router.query
            router.replace({pathname: router.asPath.split('?')[0], query: {...query},},
                undefined,
                {shallow: true}
            );
        } else {
            const {...query} = router.query
            router.replace({pathname: router.asPath.split('?')[0], query: {...query, [name]: str},},
                undefined,
                {shallow: true}
            );
        }
    }

    return (
        <>
            <div
                className='flex flex-col gap-6 lg:border border-natural_gray-100 rounded-xl bg-white lg:py-6 pb-6 lg:px-4 overflow-hidden'
                dir='rtl'>
                <div className='lg:flex hidden items-center gap-4 py-3'>
                    <div className="centerOfParent"><FilterIcon/></div>
                    <p className='text-lg font-semibold'>فیلتر ها</p>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const {value} = searchRef.current
                        const {search, ...query} = queries
                        router.replace({
                            pathname: router.asPath.split('?')[0],
                            query: value.trim().length ? {...query, search: value} : {...query},
                        }, undefined, {shallow: true})
                    }}>
                    <Input defaultValue={filters.search ? filters.search[0].value : null} ref={searchRef}
                           type="text" classNames={{clearButton: '!p-px',}} isClearable placeholder='جستجو آزمون'
                           variant='bordered' radius='sm'
                           startContent={
                               <button className="bg-white centerOfParent"><Search
                                   className='fill-natural_gray-600'/></button>
                           }/>
                </form>
                <div className="flex flex-col gap-4">
                    <label className='font-semibold'>انتخاب مقطع</label>
                    <RadioGroup
                        aria-label=" "
                        orientation="horizontal"
                        defaultValue={filters.teachingTypes ? filters.teachingTypes[0].value : undefined}
                        style={{
                            "--heroui-default-500": "196 94% 25%",
                        }}
                        color='default'
                        onValueChange={(e) => handleFilter('teachingTypes', e)}
                    >
                        {[{key:"",value:"دکتری"},{key:"",value:"ارشد"},{key:"",value:"زبان مدرسه"},].map(a => <Radio key={a.key} classNames={{base: "w-1/2 max-w-1/2"}}
                                                             value={a.value}>{a.value}</Radio>)}
                    </RadioGroup>
                </div>
                <div className="flex flex-col gap-4">
                    <label className='font-semibold'>انتخاب مقطع</label>
                    <RadioGroup
                        aria-label=" "
                        orientation="horizontal"
                        defaultValue={filters.teachingTypes ? filters.teachingTypes[0].value : undefined}
                        style={{
                            "--heroui-default-500": "196 94% 25%",
                        }}
                        color='default'
                        onValueChange={(e) => handleFilter('teachingTypes', e)}
                    >
                        {languages.languages.map(a => <Radio key={a.id} classNames={{base: "w-1/2 max-w-1/2"}}
                                                             value={a.language}>{a.language}</Radio>)}
                    </RadioGroup>
                </div>
                <div className="flex flex-col gap-4">
                    <label className='font-semibold'>انتخاب مقطع</label>
                    <RadioGroup
                        aria-label=" "
                        orientation="horizontal"
                        defaultValue={filters.teachingTypes ? filters.teachingTypes[0].value : undefined}
                        style={{
                            "--heroui-default-500": "196 94% 25%",
                        }}
                        color='default'
                        onValueChange={(e) => handleFilter('teachingTypes', e)}
                    >
                        {[{key:"",value:"عمومی"},{key:"",value:"تخصصی"},{key:"",value:"هردو"},].map(a => <Radio key={a.key} classNames={{base: "w-1/2 max-w-1/2"}}
                                                             value={a.value}>{a.value}</Radio>)}
                    </RadioGroup>
                </div>
            </div>
        </>
    );
};

export default (Filters);