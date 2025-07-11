import Dropdown from '@/components/Dropdown/DropDown';
import useGetRequest from '@/hooks/useGetRequest';
import React, {useRef} from 'react';
import RangeSlider from '@/components/Range';
import {
    Autocomplete, AutocompleteItem,
    AutocompleteSection,
    Checkbox,
    Input,
    Radio,
    RadioGroup,
    Skeleton, Switch
} from "@heroui/react";
import {useRouter} from "next/router";

import FilterIcon from '@icons/filter.svg';
import Search from '@icons/search.svg';
import SortList from './sort.json'
import {changeUrl} from "@/func/ChangeUrl";
import useFiltersFromUrl from "@/hooks/useFiltersFromUrl";

const Filters = ({setCurrentPage}) => {
    const searchRef = useRef(null)
    const router = useRouter()
    const [filters, setFilters] = useFiltersFromUrl();

    const [data] = useGetRequest(true, `/webinar-reserve/get-filter`)

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
                            const form = new FormData(e.target);
                            const {search} = Object.fromEntries(form.entries())
                            handleFilter('search', search)
                        }}>
                        <Input defaultValue={filters.search ? filters.search[0].value : null} ref={searchRef}
                               type="text" name="search" classNames={{clearButton: '!p-px',}} isClearable
                               placeholder='جستجو کلاس'
                               variant='bordered' radius='sm'
                               startContent={
                                   <button type='submit' className="bg-white centerOfParent"><Search
                                       className='fill-natural_gray-600'/></button>
                               }/>
                    </form>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const form = new FormData(e.target);
                            const {professor} = Object.fromEntries(form.entries())
                            handleFilter('professor', professor)
                        }}>
                        <Input defaultValue={filters.professor ? filters.professor[0].value : null} ref={searchRef}
                               type="text" name="professor" classNames={{clearButton: '!p-px',}} isClearable
                               placeholder='جستجو استاد'
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
                        selectedKey={filters.subject_id ? filters.subject_id[0]?.value : undefined}
                        onSelectionChange={e => handleFilter('subject_id', e)}
                        label="هدف از وبینار"
                        placeholder='هدف از وبینار'
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
                    <Switch isSelected={filters.near ? filters.near[0]?.value : undefined}
                            color="success"
                            onValueChange={e => handleFilter('near', e)}>نزدیکترین زمان تشکیل
                        وبینار</Switch>
                </div>
                : <Skeleton className="rounded-lg h-full">
                    <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
            }
        </>
    );
};

export default React.memo(Filters);