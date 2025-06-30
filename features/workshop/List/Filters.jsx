import Dropdown from '@/components/Dropdown/DropDown';
import useGetRequest from '@/hooks/useGetRequest';
import React, {useRef, useState} from 'react';
import RangeSlider from '@/components/Range';
import {
    Autocomplete, AutocompleteItem,
    AutocompleteSection,
    Checkbox,
    CheckboxGroup,
    Input,
    Radio,
    RadioGroup,
    Skeleton, Switch
} from "@heroui/react";
import {useRouter} from "next/router";

import FilterIcon from '@icons/filter.svg';
import Search from '@icons/search.svg';
import SortList from './sort.json'
import weekDays from '@/func/Calendar.json'

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

    const [data] = useGetRequest(false, `/workshop-reserve/get-filter${filters.city ? `?city_id=${filters.city}` : ""}`)
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
                               type="text" classNames={{clearButton: '!p-px',}} isClearable placeholder='جستجو کلاس'
                               variant='bordered' radius='sm'
                               startContent={
                                   <button type='submit' className="bg-white centerOfParent"><Search
                                       className='fill-natural_gray-600'/></button>
                               }/>
                    </form>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const {value} = searchRef.current
                            const {search, ...query} = queries
                            router.replace({
                                pathname: router.asPath.split('?')[0],
                                query: value.trim().length ? {...query, professor: value} : {...query},
                            }, undefined, {shallow: true})
                            handleFilter('professor', value)
                        }}>
                        <Input defaultValue={filters.professor ? filters.professor[0].value : null} ref={searchRef}
                               type="text" classNames={{clearButton: '!p-px',}} isClearable placeholder='جستجو استاد'
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
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>سطح</label>
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
                    <Autocomplete
                        variant='bordered'
                        radius='sm'
                        selectedKey={filters.subject_id}
                        onSelectionChange={e => handleFilter('subject_id', e)}
                        label="هدف از ورکشاپ"
                        placeholder='هدف از ورکشاپ'
                        labelPlacement="outside"
                        isClearable={false}
                        classNames={{
                            input: 'text-xs',
                            trigger: 'bg-white',
                            listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3',
                        }}
                        inputProps={{
                            classNames: {label: 'mb-4 font-semibold'}
                        }}
                    >
                        {data.learning_goals.map(obj =>
                            <AutocompleteSection
                                classNames={{
                                    base: 'text-right'
                                }}
                                showDivider key={obj.goal_id} title={obj.goal_title}>
                                {obj.subgoals.map(subgoal => (
                                    <AutocompleteItem
                                        classNames={{
                                            selectedIcon: '[&>svg]:w-3 [&>svg]:h-3'
                                        }}
                                        key={subgoal.value}
                                        title={subgoal.name}/>
                                ))}
                            </AutocompleteSection>
                        )}
                    </Autocomplete>
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
                    <RangeSlider {...{filters, handleFilter, data: data.price_range, title: 'مبلغ'}} />
                    <div className="flex flex-col gap-4">
                        <label className='font-semibold'>جنسیت مدرس</label>
                        <RadioGroup
                            aria-label=" "
                            orientation="horizontal"
                            defaultValue={filters.gender ? filters.gender[0]?.value : undefined}
                            style={{
                                "--heroui-default-500": "196 94% 25%",
                            }}
                            color='default'
                            onValueChange={(e) => handleFilter('gender', e)}
                        >
                            {data.genders.map(e =>
                                <Radio key={e.value} value={e.value.toString()}>{e.name}</Radio>
                            )}
                        </RadioGroup>
                    </div>
                    <Dropdown
                        array={location ? location.countries : []} isLoading={loading} name='country'
                        defaultValue={Array.isArray(filters.country) ? filters.country[0].value : filters.country}
                        Searchable label="کشور" setState={(e, v) => {
                        handleFilter(e, v)
                        setCountry(v)
                        setLocation(prev => ({...prev, city: []}))
                    }}
                        placeHolder='کشور'
                        className='!px-3 !py-2 border border-natural_gray-200 rounded-lg bg-white'/>
                    <Dropdown
                        array={location ? location.city : []} isLoading={loading}
                        defaultValue={Array.isArray(filters.city) ? filters.city[0].value : filters.city}
                        Searchable label="شهر" setState={handleFilter} name="city" placeHolder='شهر'
                        className='!px-3 !py-2 border border-natural_gray-200 rounded-lg bg-white'/>
                    <Dropdown
                        array={data.direction ?? []}
                        defaultValue={Array.isArray(filters.direction) ? filters.direction[0].value : filters.direction}
                        Searchable label="جهت جغرافیایی" setState={handleFilter} name="direction" placeHolder="جهت"
                        className='!px-3 !py-2 border border-natural_gray-200 rounded-lg bg-white'/>
                    <Dropdown
                        array={data.region ?? []}
                        defaultValue={Array.isArray(filters.region) ? filters.region[0].value : filters.region}
                        Searchable label="منطقه" setState={handleFilter} name="region" placeHolder="منطقه"
                        className='!px-3 !py-2 border border-natural_gray-200 rounded-lg bg-white'/>
                    <Switch isSelected={filters.near ? filters.near[0]?.value : undefined}
                            color="success"
                            onValueChange={e => handleFilter('near', e)}>نزدیکترین زمان تشکیل
                        ورکشاپ</Switch>
                </div>
                : <Skeleton className="rounded-lg h-full">
                    <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
            }
        </>
    );
};

export default React.memo(Filters);