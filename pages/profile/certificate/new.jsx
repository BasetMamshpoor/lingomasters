import React, {useContext, useState} from 'react';
import {
    addToast,
    Autocomplete,
    AutocompleteItem,
    Button,
    Checkbox,
    CheckboxGroup,
    Input,
    Select,
    SelectItem
} from "@heroui/react";
import {Language} from "@/providers/languageProvider";
import Image from "next/image";
import useGetRequest from "@/hooks/useGetRequest";
import usePostRequest from "@/hooks/usePostRequest";
import Progress from "@/components/Progress";
import CertificateCheckout from "@/features/CertificateCheckout";

const classes = [
    {key: 'webinar', name: 'وبینار'},
    {key: 'workshop', name: 'ورکشاپ'},
    {key: 'group', name: 'کلاس های گروهی'},
    {key: 'private', name: 'کلاس های خصوصی'},
]
const stepList = ['انتخاب نوع گواهینامه', 'تاییدیه', 'پرداخت']
const NewCertificate = () => {
    const {languages} = useContext(Language)
    const [step, setStep] = useState(1)
    const [state, setState] = useState({type: 'webinar', delivery_type: 'online'})
    const [data, , , , , loading] = useGetRequest(true, `/student/certificate/class?type=${state.type}`);
    const {sendPostRequest, isLoading} = usePostRequest()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const Data = Object.fromEntries(formData.entries());
        const {
            success,
            successMessage,
            errorMessage,
            data
        } = await sendPostRequest("POST", '/student/certificate/store', {...Data, class: state.class})
        if (success) {
            addToast({
                title: 'ثبت شد',
                description: successMessage,
                color: 'success'
            })
            setState(p => ({...p, id: data.response.data}))
            setStep(2)
        } else {
            addToast({
                title: 'خطا',
                description: errorMessage,
                color: 'danger'
            });
        }
    }

    return (
        <div className="flex flex-col gap-8">
            <Progress steps={stepList} withBreadcrumb={false} active={step}/>
            {step === 2 ? <CertificateCheckout state={state}/>
                : <form className="py-10 px-6 border border-natural_gray-200 rounded-xl bg-white flex flex-col gap-14"
                        onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        <p className="">اطلاعات گواهینامه درخواستی را وارد کنید.</p>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                            <Input
                                isRequired
                                errorMessage=' '
                                name="name_fa"
                                label="نام به فارسی"
                                labelPlacement="outside"
                                placeholder="نام به فارسی"
                                radius="sm"
                                variant='bordered'
                            />
                            <Input
                                isRequired
                                errorMessage=' '
                                name="name_en"
                                label="نام به لاتین"
                                labelPlacement="outside"
                                placeholder="نام به لاتین"
                                radius="sm"
                                variant='bordered'
                            />
                            <Select
                                isRequired
                                errorMessage=' '
                                name="language"
                                label="زبان"
                                labelPlacement="outside"
                                placeholder="زبان"
                                radius="sm"
                                variant='bordered'
                                classNames={{
                                    listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3',
                                    trigger: 'bg-white',
                                    label: 'text-xs text-natural_gray-950 font-semibold',
                                }}
                            >
                                {languages?.languages.map(e => <SelectItem
                                    startContent={<Image src={e.flag} width={24} height={24} alt={e.language}/>}
                                    key={e.id}
                                    className="flex-row-reverse"
                                    textValue={e.language}>
                                    <p className="flex items-center justify-end w-full">{e.language}</p>
                                </SelectItem>)}
                            </Select>
                            <CheckboxGroup
                                isRequired
                                errorMessage=' '
                                orientation="horizontal"
                                label="نوع گواهینامه"
                                name="delivery_type"
                                color="success"
                                value={state.delivery_type ? [state.delivery_type] : undefined}
                                onValueChange={e => setState(p => ({...p, delivery_type: e[e.length - 1]}))}
                                style={{
                                    "--heroui-success": "196 94% 25%",
                                }}
                                classNames={{wrapper: " gap-10"}}
                            >
                                <Checkbox classNames={{icon: 'text-white'}} radius="sm" value="physical">گواهینامه
                                    چاپی</Checkbox>
                                <Checkbox classNames={{icon: 'text-white'}} radius="sm" value="online">گواهینامه
                                    الکترونیکی</Checkbox>
                            </CheckboxGroup>
                            <Select
                                isRequired
                                errorMessage=' '
                                name="type"
                                label="نوع کلاس"
                                labelPlacement="outside"
                                placeholder="نوع کلاس"
                                selectedKeys={[state.type]}
                                onChange={e => setState(prev => ({...prev, type: e.target.value}))}
                                radius="sm"
                                variant='bordered'
                                classNames={{
                                    listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3',
                                    trigger: 'bg-white',
                                    label: 'text-xs text-natural_gray-950 font-semibold',
                                }}
                            >
                                {classes?.map(e => <SelectItem
                                    key={e.key}
                                    className="flex-row-reverse"
                                    textValue={e.name}>
                                    <p className="flex items-center justify-end w-full">{e.name}</p>
                                </SelectItem>)}
                            </Select>
                            <Autocomplete
                                isRequired
                                errorMessage=' '
                                labelPlacement="outside"
                                label="انتخاب کلاس"
                                name='class'
                                items={data || []}
                                isLoading={loading}
                                onSelectionChange={e => setState(prev => ({...prev, class: e}))}
                                variant="bordered"
                                radius="sm"
                            >
                                {(item => (
                                    <AutocompleteItem key={item.id} className="flex-row-reverse"
                                                      textValue={item.title}>
                                        <p className="flex items-center justify-end w-full">{item.title}</p>
                                    </AutocompleteItem>
                                ))}
                            </Autocomplete>
                        </div>
                        {state.delivery_type === 'online' ?
                            <div className="flex flex-col gap-6">
                                <p className="">اطلاعات الکترونیکی خود را برای ارسال گواهینامه وارد کنید.</p>
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                    <Input
                                        isRequired
                                        errorMessage=' '
                                        name="mobile"
                                        label="تلفن همراه"
                                        labelPlacement="outside"
                                        placeholder="تلفن همراه"
                                        radius="sm"
                                        variant='bordered'
                                    />
                                    <Input
                                        isRequired
                                        errorMessage=' '
                                        name="email"
                                        label="ایمیل"
                                        labelPlacement="outside"
                                        placeholder="ایمیل"
                                        type="email"
                                        radius="sm"
                                        variant='bordered'
                                    />
                                </div>
                            </div>
                            : state.delivery_type === 'physical' && <div className="flex flex-col gap-6">
                            <p className="">آدرس خود را برای ارسال گواهینامه وارد کنید.</p>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                <Input
                                    isRequired
                                    errorMessage=' '
                                    name="city"
                                    label="شهر محل سکونت"
                                    labelPlacement="outside"
                                    placeholder="شهر محل سکونت"
                                    radius="sm"
                                    variant='bordered'
                                />
                                <Input
                                    isRequired
                                    errorMessage=' '
                                    name="region"
                                    label="منطقه محل سکونت"
                                    labelPlacement="outside"
                                    placeholder="منطقه محل سکونت"
                                    radius="sm"
                                    variant='bordered'
                                />
                                <Input
                                    isRequired
                                    errorMessage=' '
                                    name="address"
                                    label="آدرس محل سکونت"
                                    labelPlacement="outside"
                                    placeholder="آدرس محل سکونت"
                                    radius="sm"
                                    variant='bordered'
                                />
                                <Input
                                    isRequired
                                    errorMessage=' '
                                    name="postal_code"
                                    label="کدپستی"
                                    labelPlacement="outside"
                                    placeholder="کدپستی"
                                    type='number'
                                    radius="sm"
                                    variant='bordered'
                                />
                            </div>
                        </div>
                        }
                        <div className="self-end">
                            <Button className="bg-primary-600 text-white sm:!min-w-32 min-w-full w-full" type='submit'
                                    isLoading={isLoading}
                                    radius='sm'>ادامه</Button>
                        </div>
                    </div>
                </form>}
        </div>
    );
};

export default NewCertificate;