import React, {useContext, useRef, useState} from 'react';
import {
    Checkbox,
    Input,
} from "@heroui/react";
import {useRouter} from "next/router";
import FilterIcon from '@icons/filter.svg';
import Search from '@icons/search.svg';
import SortList from './sort.json'
import Dropdown from "@/components/Dropdown/DropDown";
import {Language} from "@/providers/languageProvider";

const Filters = ({setCurrentPage}) => {
    const searchRef = useRef(null)
    const router = useRouter()
    const {language} = useContext(Language)
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
                           type="text" classNames={{clearButton: '!p-px',}} isClearable placeholder='جستجو وبلاگ'
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
                    array={language?.language || []} defaultValue={filters['language']}
                    Multiple Searchable label="انتخاب زبان" setState={handleFilter} name="language"
                    placeHolder='زبان هدف'
                    className='!px-3 !py-2 border border-gray-400 rounded-lg bg-white'/>
            </div>
        </>
    );
};

export default React.memo(Filters);