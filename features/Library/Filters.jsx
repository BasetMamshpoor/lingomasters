import useGetRequest from '@/hooks/useGetRequest';
import React, {useRef, useState} from 'react';
import RangeSlider from '@/components/Range';
import {
    Checkbox,
    CheckboxGroup,
    Input,
    Radio,
    RadioGroup,
    Skeleton,
} from "@heroui/react";
import {useRouter} from "next/router";

import FilterIcon from '@icons/filter.svg';
import Search from '@icons/search.svg';
import SortList from './sort.json'
import weekDays from '@/func/Calendar.json'
import Dropdown from "@/components/Dropdown/DropDown";

const Filters = ({setCurrentPage}) => {
    const searchRef = useRef(null)
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
    const [country, setCountry] = useState(Array.isArray(filters.country) ? filters.country[0].value : filters.country)

    const [data] = useGetRequest(true, `/library/get-filter${filters.city ? `?city_id=${filters.city}` : ""}`)
    const [location, setLocation, Q, W, E, loading] = useGetRequest(false, `/countries?country=${country}`)

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
            if (i > 0) {
                str = str + '-' + (typeof f === "object" ? f.value : f)
            } else if (i === 0) {
                str = typeof f === "object" ? f.value : f
            } else {
                str = null
            }
        }) : str = value
        if (str === null) {
            const {[name]: O, slug, ...query} = router.query
            router.replace({pathname: router.asPath.split('?')[0], query: {...query},},
                undefined,
                {shallow: true}
            );
        } else {
            const {slug, ...query} = router.query
            router.replace({pathname: router.asPath.split('?')[0], query: {...query, [name]: str},},
                undefined,
                {shallow: true}
            );
        }
    }

    return (
        <>
            {data ?
                <div
                    className='flex flex-col gap-6 lg:border border-natural_gray-100 rounded-xl bg-white lg:py-6 pb-6 lg:px-4'
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
                            handleFilter('search', value)
                        }}>
                        <Input defaultValue={filters.search ? filters.search[0].value : null} ref={searchRef}
                               type="text" classNames={{clearButton: '!p-px',}} isClearable placeholder='جستجو کتاب'
                               variant='bordered' radius='sm'
                               startContent={
                                   <button type='submit' className="bg-white centerOfParent"><Search
                                       className='fill-natural_gray-600'/></button>
                               }/>
                    </form>
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>ترتیب</label>
                        <div className='grid grid-cols-2 gap-y-2'>
                            {SortList.sort.map(c =>
                                <Checkbox
                                    style={{
                                        "--heroui-success": "196 94% 25%",
                                    }}
                                    color='success'
                                    isSelected={Array.isArray(filters.sort) ? filters.sort[0].value : filters.sort === c.key}
                                    onValueChange={e => handleFilter('sort', c.key)}
                                    classNames={{icon: 'text-white'}} key={c.key}
                                    value={c.key}>{c.title}</Checkbox>)}
                        </div>
                    </div>
                    <Dropdown
                        array={data.language}
                        defaultValue={Array.isArray(filters.language) ? filters.language[0].value : filters.language}
                        Searchable label="انتخاب زبان" setState={handleFilter} name="language"
                        placeHolder='زبان هدف'
                        className='!px-3 !py-2 border border-natural_gray-200 rounded-lg bg-white'/>
                    <Dropdown
                        array={data.subject}
                        defaultValue={Array.isArray(filters.subject) ? filters.subject[0].value : filters.subject}
                        Searchable label="موضوع کتاب" setState={handleFilter} name="subject" placeHolder="موضوع"
                        className='!px-3 !py-2 border border-natural_gray-200 rounded-lg bg-white'/>
                    <Dropdown
                        array={data.publisher}
                        defaultValue={Array.isArray(filters.publisher) ? filters.publisher[0].value : filters.publisher}
                        Searchable label="انتشارات" setState={handleFilter} name="publisher" placeHolder="انتشارات"
                        className='!px-3 !py-2 border border-natural_gray-200 rounded-lg bg-white'/>
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>سطح کتاب</label>
                        <RadioGroup
                            aria-label=" "
                            orientation="horizontal"
                            defaultValue={filters.languageLevels ? filters.languageLevels[0].value : undefined}
                            style={{
                                "--heroui-default-500": "196 94% 25%",
                            }}
                            color='default'
                            classNames={{wrapper: 'grid grid-cols-2'}}
                            onValueChange={(e) => handleFilter('languageLevels', e)}
                        >
                            {data.languageLevels?.map(a => <Radio key={a.value}
                                                                  value={a.value.toString()}>{a.name}</Radio>)}
                        </RadioGroup>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>گروه سنی کتاب</label>
                        <RadioGroup
                            aria-label=" "
                            orientation="horizontal"
                            defaultValue={filters.age_group ? filters.age_group[0].value : undefined}
                            style={{
                                "--heroui-default-500": "196 94% 25%",
                            }}
                            color='default'
                            onValueChange={(e) => handleFilter('age_group', e)}
                        >
                            {data.age_group?.map(a => <Radio key={a.value} value={a.value.toString()}>{a.name}</Radio>)}
                        </RadioGroup>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>نوع کتاب</label>
                        <RadioGroup
                            aria-label=" "
                            orientation="horizontal"
                            defaultValue={filters.book_type ? filters.book_type[0].value : undefined}
                            style={{
                                "--heroui-default-500": "196 94% 25%",
                            }}
                            color='default'
                            onValueChange={(e) => handleFilter('book_type', e)}
                        >
                            {data.book_type?.map(a => <Radio key={a.value} value={a.value.toString()}>{a.name}</Radio>)}
                        </RadioGroup>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>تعداد جلد</label>
                        <RadioGroup
                            aria-label=" "
                            orientation="horizontal"
                            defaultValue={filters.volume ? filters.volume[0].value : undefined}
                            style={{
                                "--heroui-default-500": "196 94% 25%",
                            }}
                            color='default'
                            onValueChange={(e) => handleFilter('volume', e)}
                        >
                            {[{name: 'تک جلدی', value: '1'}, {name: 'چند جلدی', value: '2'},].map(a => <Radio
                                key={a.value} value={a.value.toString()}>{a.name}</Radio>)}
                        </RadioGroup>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>ویرایش</label>
                        <CheckboxGroup
                            aria-label=" "
                            orientation="horizontal"
                            style={{
                                "--heroui-success": "196 94% 25%",
                            }}
                            color='success'
                            value={filters.edit && (typeof filters.edit[0] === "object") ? filters.edit.map(e => e.value) : filters.edit}
                            onValueChange={(value) => handleFilter('edit', value)}
                            classNames={{wrapper: 'grid grid-cols-2'}}
                        >
                            {data.edit?.map(c =>
                                <Checkbox
                                    classNames={{icon: 'text-white'}} key={c.id}
                                    value={c.id}>{c.name}</Checkbox>)}
                        </CheckboxGroup>
                    </div>
                    <RangeSlider {...{filters, handleFilter, data: data.price_range, title: 'قیمت کتاب'}} />
                </div>
                : <Skeleton className="rounded-lg h-full">
                    <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
            }
        </>
    );
};

export default React.memo(Filters);