import Dropdown from 'components/Dropdown/DropDown';
import useGetRequest from 'hooks/useGetRequest';
import React, { useRef, useState } from 'react';
import RangeSlider from 'components/Range';
import { Checkbox, CheckboxGroup, Input, Radio, RadioGroup, Skeleton } from "@heroui/react";
import { useRouter } from "next/router";

import FilterIcon from '@icons/filter.svg';
import Search from '@icons/search.svg';
import SortList from './sort.json'
import weekDays from 'func/Calendar.json'

const Filters = ({ setCurrentPage }) => {
    const searchRef = useRef(null)
    const router = useRouter()
    const { ...queries } = router.query

    const readUrl = () => {
        let object = {};
        for (const name in queries) {
            if (Object.hasOwnProperty.call(queries, name)) {
                let filter = []
                const value = queries[name];
                const newValue = value.split('-')
                newValue.forEach((f, i) => {
                    filter.push({ value: f, name: i })
                })
                object[name] = filter
            }
        }
        return object
    }
    const [filters, setFilters] = useState(readUrl() || {})

    const [data] = useGetRequest(`/professor/get-filter`)

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
            const { [name]: O, ...query } = router.query
            router.replace({ pathname: router.asPath.split('?')[0], query: { ...query }, },
                undefined,
                { shallow: true }
            );
        } else {
            const { ...query } = router.query
            router.replace({ pathname: router.asPath.split('?')[0], query: { ...query, [name]: str }, },
                undefined,
                { shallow: true }
            );
        }
    }

    return (
        <>
            {data ?
                <div className='flex flex-col gap-6 lg:border border-natural_gray-100 rounded-xl bg-white lg:py-6 pb-6 lg:px-4' dir='rtl'>
                    <div className='lg:flex hidden items-center gap-4 py-3'>
                        <div className="centerOfParent"><FilterIcon /></div>
                        <p className='text-lg font-semibold'>فیلتر ها</p>
                    </div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const { value } = searchRef.current
                            const { search, ...query } = queries
                            router.replace({
                                pathname: router.asPath.split('?')[0],
                                query: value.trim().length ? { ...query, search: value } : { ...query },
                            }, undefined, { shallow: true })
                        }}>
                        <Input defaultValue={filters.search ? filters.search[0].value : null} ref={searchRef}
                            type="text" classNames={{ clearButton: '!p-px', }} isClearable placeholder='جستجو' variant='bordered' radius='sm'
                            startContent={
                                <button className="bg-white centerOfParent"><Search className='fill-natural_gray-600' /></button>
                            } />
                    </form>
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>مرتب سازی بر اساس</label>
                        <CheckboxGroup
                            aria-label=" "
                            orientation="horizontal"
                            color='success'
                            style={{
                                "--heroui-success": "196 94% 25%",
                            }}
                            value={filters.sort ? [filters.sort] : 'newest'}
                            onValueChange={(e) => {
                                if (e.length === 0) {
                                    handleFilter('sort', null); // Handle unselecting all checkboxes
                                } else {
                                    handleFilter('sort', e[e.length - 1]); // Use the last selected value
                                }
                            }}
                            classNames={{ wrapper: 'grid grid-cols-2' }}
                        >
                            {SortList.sort.map(c => <Checkbox classNames={{ icon: 'text-white' }} key={c.key} value={c.key}>{c.title}</Checkbox>)}
                        </CheckboxGroup>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>نوع تدریس</label>
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
                            {data.teachingTypes?.map(a => <Radio key={a.value} value={a.value.toString()}>{a.name}</Radio>)}
                        </RadioGroup>
                    </div>
                    <Dropdown
                        array={data.language} defaultValue={filters['language']}
                        Multiple Searchable label="انتخاب زبان" setState={handleFilter} name="language" placeHolder='زبان هدف'
                        className='!px-3 !py-2 border border-gray-400 rounded-lg bg-white' />
                    <Dropdown
                        array={data.accent} defaultValue={filters['accent']}
                        Multiple Searchable label="لهجه" setState={handleFilter} name="accent" placeHolder='لهجه'
                        className='!px-3 !py-2 border border-gray-400 rounded-lg bg-white' />
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>ساعت تدریس</label>
                        <CheckboxGroup
                            aria-label=" "
                            orientation="horizontal"
                            style={{
                                "--heroui-success": "196 94% 25%",
                            }}
                            value={filters.time_of_day ? filters.time_of_day : undefined}
                            color='success'
                            onValueChange={(e) => handleFilter('time_of_day', e)}
                            classNames={{ wrapper: 'grid grid-cols-2' }}
                        >
                            {Object.keys(weekDays.periods).map(c => <Checkbox classNames={{ icon: 'text-white' }} key={c} value={c}>{c}</Checkbox>)}
                        </CheckboxGroup>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>سطح زبان</label>
                        <RadioGroup
                            aria-label=" "
                            orientation="horizontal"
                            defaultValue={filters.languageLevels ? filters.languageLevels[0].value : undefined}
                            style={{
                                "--heroui-default-500": "196 94% 25%",
                            }}
                            color='default'
                            onValueChange={(e) => handleFilter('languageLevels', e)}
                        >
                            {data.languageLevels?.map(a => <Radio key={a.value} value={a.value.toString()}>{a.name}</Radio>)}
                        </RadioGroup>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>گروه سنی</label>
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
                    <RangeSlider {...{ filters, handleFilter, data: data.price_range }} />
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>جنسیت مدرس</label>
                        <RadioGroup
                            aria-label=" "
                            orientation="horizontal"
                            defaultValue={filters.genders ? filters.genders[0].value : undefined}
                            style={{
                                "--heroui-default-500": "196 94% 25%",
                            }}
                            color='default'
                            onValueChange={(e) => handleFilter('genders', e)}
                        >
                            <Radio key={1} value={'مرد'}>مرد</Radio>
                            <Radio key={2} value={'زن'}>زن</Radio>
                        </RadioGroup>
                    </div>
                    <Dropdown
                        array={[]} defaultValue={filters['country']}
                        Multiple Searchable label="کشور" setState={handleFilter} name="country" placeHolder='کشور'
                        className='!px-3 !py-2 border border-gray-400 rounded-lg bg-white' />
                    <Dropdown
                        array={[]} defaultValue={filters['city']}
                        Multiple Searchable label="شهر" setState={handleFilter} name="city" placeHolder='شهر'
                        className='!px-3 !py-2 border border-gray-400 rounded-lg bg-white' />
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>تعیین سطح</label>
                        <CheckboxGroup
                            aria-label=" "
                            orientation="horizontal"
                            style={{
                                "--heroui-success": "196 94% 25%",
                            }}
                            value={filters.examLanguages ? filters.examLanguages : undefined}
                            color='success'
                            onValueChange={(e) => handleFilter('examLanguages', e)}
                            classNames={{ wrapper: 'grid grid-cols-2' }}

                        >
                            {[{ name: 'رایگان', value: '100' }, { name: '50% تخفیف', value: '50' }, { name: 'بدون تخفیف', value: '0' }].map(c => <Checkbox classNames={{ icon: 'text-white' }} key={c.value} value={c.value}>{c.name}</Checkbox>)}
                        </CheckboxGroup>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>کلاس آزمایشی</label>
                        <CheckboxGroup
                            aria-label=" "
                            orientation="horizontal"
                            style={{
                                "--heroui-success": "196 94% 25%",
                            }}
                            value={filters.testLanguages ? filters.testLanguages : undefined}
                            color='success'
                            onValueChange={(e) => handleFilter('testLanguages', e)}
                            classNames={{ wrapper: 'grid grid-cols-2' }}

                        >
                            {[{ name: 'رایگان', value: '100' }, { name: '50% تخفیف', value: '50' }, { name: 'بدون تخفیف', value: '0' }].map(c => <Checkbox classNames={{ icon: 'text-white' }} key={c.value} value={c.value}>{c.name}</Checkbox>)}
                        </CheckboxGroup>
                        <div className='px-3 py-5 flex flex-col gap-4'>
                            <div className='flex items-center justify-between'>
                                <label className="inline-flex items-center justify-between w-full cursor-pointer">
                                    <input type="checkbox" name="closest_time" id="is_usedField" checked={filters['closest_time'] ? true : false} className="sr-only peer"
                                        onChange={({ target }) => target.checked ? handleFilter('closest_time', true) : handleFilter('closest_time', null)} />
                                    <span className="text-sm text-natural_gray-950">نزدیک‌ترین زمان قبول کلاس</span>
                                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                : <Skeleton className="rounded-lg h-full">
                    <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
            }
        </>
    );
};

export default React.memo(Filters);