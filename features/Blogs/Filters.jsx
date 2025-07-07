import React, {useContext, useRef} from 'react';
import {
    Checkbox,
    Input, Radio, RadioGroup,
} from "@heroui/react";
import {useRouter} from "next/router";
import FilterIcon from '@icons/filter.svg';
import Search from '@icons/search.svg';
import SortList from './sort.json'
import {Language} from "@/providers/languageProvider";
import useFiltersFromUrl from "@/hooks/useFiltersFromUrl";
import {changeUrl} from "@/func/ChangeUrl";

const Filters = ({setCurrentPage}) => {
    const searchRef = useRef(null)
    const router = useRouter()
    const {languages} = useContext(Language)

    const [filters, setFilters] = useFiltersFromUrl();
    const handleFilter = (name, value) => {
        setFilters(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
        changeUrl(router, name, value)
        setCurrentPage(1)
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
                        const form = new FormData(e.target);
                        const {search} = Object.fromEntries(form.entries())
                        handleFilter('search', search)
                    }}>
                    <Input defaultValue={filters.search ? filters.search[0].value : null} ref={searchRef}
                           type="text" name="search" classNames={{clearButton: '!p-px',}} isClearable
                           placeholder='جستجو وبلاگ'
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
                                isSelected={Array.isArray(filters.sort) ? filters.sort[0].value === c.key.toString() : filters.sort === c.key}
                                onValueChange={e => handleFilter('sort', c.key)}
                                classNames={{icon: 'text-white'}} key={c.key}
                                value={c.key.toString()}>{c.title}</Checkbox>)}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                <label className='font-semibold'>انتخاب زبان</label>
                    <RadioGroup
                        aria-label=" "
                        orientation="horizontal"
                        defaultValue={filters.language ? filters.language[0]?.value : undefined}
                        style={{
                            "--heroui-default-500": "196 94% 25%",
                        }}
                        color='default'
                        onValueChange={(e) => handleFilter('language', e)}
                    >
                        {languages?.languages.map(a => <Radio key={a.id} classNames={{base: "w-1/2 max-w-1/2"}}
                                                              value={a.id}>{a.language}</Radio>)}
                    </RadioGroup>
                </div>
            </div>
        </>
    );
};

export default React.memo(Filters);