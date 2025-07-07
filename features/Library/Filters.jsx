import useGetRequest from '@/hooks/useGetRequest';
import React, {useRef} from 'react';
import RangeSlider from '@/components/Range';
import {
    Autocomplete,
    AutocompleteItem,
    AutocompleteSection,
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
import Dropdown from "@/components/Dropdown/DropDown";
import useFiltersFromUrl from "@/hooks/useFiltersFromUrl";
import {changeUrl} from "@/func/ChangeUrl";

const Filters = ({setCurrentPage}) => {
    const searchRef = useRef(null)
    const router = useRouter()
    const [data, , , , , isLoading] = useGetRequest(true, `/library/GetFilter`)

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
            {!isLoading ? data &&
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
                               placeholder='جستجو کتاب'
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
                        className='!px-3 !py-2 border-2 border-natural_gray-200 rounded-lg bg-white'/>
                    <Dropdown
                        array={data.publication}
                        defaultValue={Array.isArray(filters.publication) ? filters.publication[0].value : filters.publication}
                        Searchable label="انتشارات" setState={handleFilter} name="publication" placeHolder="انتشارات"
                        className='!px-3 !py-2 border-2 border-natural_gray-200 rounded-lg bg-white'/>
                    <Autocomplete
                        variant='bordered'
                        radius='sm'
                        selectedKey={filters.learning_goals ? filters.learning_goals[0]?.value : undefined}
                        onSelectionChange={e => handleFilter('learning_goals', e)}
                        label="موضوع کتاب"
                        placeholder='موضوع کتاب'
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
                        <label className='font-semibold'>سطح کتاب</label>
                        <RadioGroup
                            aria-label=" "
                            orientation="horizontal"
                            defaultValue={filters.level ? filters.level[0].value : undefined}
                            style={{
                                "--heroui-default-500": "196 94% 25%",
                            }}
                            color='default'
                            classNames={{wrapper: 'grid grid-cols-2'}}
                            onValueChange={(e) => handleFilter('level', e)}
                        >
                            {data.level?.map(a => <Radio key={a.value} value={a.value.toString()}>{a.name}</Radio>)}
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
                            classNames={{wrapper: 'grid grid-cols-2'}}
                            onValueChange={(e) => handleFilter('age_group', e)}
                        >
                            {data.age_group?.map(a => <Radio key={a.value} value={a.value.toString()}>{a.name}</Radio>)}
                        </RadioGroup>
                    </div>
                    {/*<div className="flex flex-col gap-4">*/}
                    {/*    <label className='font-semibold'>نوع کتاب</label>*/}
                    {/*    <RadioGroup*/}
                    {/*        aria-label=" "*/}
                    {/*        orientation="horizontal"*/}
                    {/*        defaultValue={filters.book_type ? filters.book_type[0].value : undefined}*/}
                    {/*        style={{*/}
                    {/*            "--heroui-default-500": "196 94% 25%",*/}
                    {/*        }}*/}
                    {/*        color='default'*/}
                    {/*        onValueChange={(e) => handleFilter('book_type', e)}*/}
                    {/*    >*/}
                    {/*        {data.book_type?.map(a => <Radio key={a.value} value={a.value.toString()}>{a.name}</Radio>)}*/}
                    {/*    </RadioGroup>*/}
                    {/*</div>*/}
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
                            classNames={{wrapper: 'grid grid-cols-2'}}
                            onValueChange={(e) => handleFilter('volume', e)}
                        >
                            {data.Dimensions?.map(a => <Radio
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
                            value={filters.time_of_print && (typeof filters.time_of_print[0] === "object") ? filters.time_of_print.map(e => e.value) : filters.time_of_print}
                            onValueChange={(value) => handleFilter('time_of_print', value)}
                            classNames={{wrapper: 'grid grid-cols-3'}}
                        >
                            {data.time_of_print?.map(c =>
                                <Checkbox
                                    classNames={{icon: 'text-white'}} key={c.value}
                                    value={c.value.toString()}>{c.name}</Checkbox>)}
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