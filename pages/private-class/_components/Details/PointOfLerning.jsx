import {
  Tabs,
  Tab,
  Card,
  CardBody,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

import React, { useState } from "react";

import UnitedkingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import GermanyFlag from "@icons/Flags/Country=Germany, Style=Flag, Radius=On.svg";
import SpainFlag from "@icons/Flags/Country=Spain, Style=Flag, Radius=On.svg";
import User from "@icons/file.svg";

export default function PointOfLerning({ point }) {
  const [selected, setSelected] = useState("english");
  return (
    <>
      <div
        className="p-4 flex flex-col gap-4 bg-white border border-natural_gray-50 rounded-lg withYellowCircel scroll-m-24"
        id="target"
      >
        <div className="centerOfParent gap-2 w-fit">
          <div className="centerOfParent">
            <User className="w-5 h-5 fill-primary-700" />
          </div>
          <span className="sm:text-base text-sm text-primary-950">
            هدف از یادگیری
          </span>
        </div>
        <Tabs
          classNames={{
            cursor: "hidden",
            panel: "py-0 [&>div]:shadow-none [&>div>div]:!p-0",
          }}
          aria-label="Tabs variants"
          variant="underlined"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          {/* tab-english */}
          <Tab
            key="english"
            title={
              <div className="flex items-center space-x-1">
                <RadioGroup
                  value={selected}
                  color="default"
                  style={{ "--nextui-default-500": "196 94% 25%" }}
                  aria-label=" "
                >
                  <Radio classNames={{ hiddenInput: 'w-0' }} value="english" name="language">
                    <UnitedkingdomFlag />
                  </Radio>
                </RadioGroup>
                <span className="hidden sm:block">انگلیسی</span>
              </div>
            }
          >
            <Card>
              <CardBody>
                <div className="flex w-full flex-col">
                  <Tabs
                    classNames={{
                      panel: "[&>div]:shadow-none",
                      tabList: "pb-0 border-b",
                    }}
                    aria-label="Options"
                    variant="underlined"
                  >
                    <Tab key="languageOfSkills" title="فنون زبان">
                      <Card>
                        <CardBody className="text-right flex flex-row text-sm">
                          <ul className="flex items-center flex-wrap gap-2 [&>li]:min-w-[45%]">
                            <li>لغت</li>
                            <li>مکالمه</li>
                            <li>مصاحبه</li>
                            <li>تقویت لهجه</li>
                            <li>ضرب المثل</li>
                            <li>اصطلاحات عامیانه</li>
                            <li>تربیت مدرس (TTC)</li>
                            <li>قواعد دستوری/ نگارش/ گرامر</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="skills" title="مهارت ها">
                      <Card>
                        <CardBody className="text-right text-sm">
                          <ul className="space-y-4">
                            <li>مهارت های گفتاری</li>
                            <li>مهارت های نوشتاری</li>
                            <li>مهارت های شنیداری</li>
                            <li>مهارت های خواندن و درک متون</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfSchool" title="زبان مدرسه">
                      <Card>
                        <CardBody className="text-sm text-right">
                          <p className="mb-3">ابتدایی</p>
                          <ul className="text-sm grid grid-cols-2 gap-y-2 lg:grid-cols-6">
                            <li>اول</li>
                            <li>دوم</li>
                            <li>سوم</li>
                            <li>چهارم</li>
                            <li>پنجم</li>
                            <li>ششم</li>
                          </ul>
                          <p className="mt-4 mb-3">متوسطه اول</p>
                          <ul className="text-sm grid lg:grid-cols-6 grid-cols-2 gap-y-2">
                            <li>هفتم</li>
                            <li>هشتم</li>
                            <li>نهم</li>
                          </ul>
                          <p className="mt-4 mb-3">متوسطه دوم</p>
                          <ul className="text-sm grid lg:grid-cols-6 grid-cols-2 gap-y-2">
                            <li>دهم</li>
                            <li>یازدهم</li>
                            <li>دوازدهم</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfUniversity" title=" زبان دانشگاه">
                      <Card>
                        <CardBody className="text-right text-sm">
                          <ul className="space-y-4">
                            <li>پیش</li>
                            <li>عمومی</li>
                            <li>تخصصی</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfExam" title=" زبان کنکور">
                      <Card>
                        <CardBody className="text-sm text-right">
                          <ul className="flex gap-5">
                            <li>کاردانی</li>
                            <li>کاردانی</li>
                            <li>کاردانی</li>
                            <li>کاردانی</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="translate" title="ترجمه">
                      <Card>
                        <CardBody className="text-sm text-right grid grid-cols-2 ">
                          <ul className="space-y-4">
                            <li>کتاب</li>
                            <li>مقاله</li>
                            <li>رسمی</li>
                            <li>تخصصی</li>
                          </ul>
                          <ul className="space-y-4">
                            <li>شفاهی</li>
                            <li>وب سایت</li>
                            <li>فیلم صوت</li>
                            <li>کاتالوگ و بروشور</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="exams" title="آزمون ها">
                      <Card >
                        <CardBody className="text-right flex flex-col text-sm p-0">
                          <p className="mb-2.5">
                            داخل ایران
                            <span className="text-xs text-gray-500">
                              (انگلیسی)
                            </span>
                          </p>
                          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 my-2">
                            <li>EPT</li>
                            <li>MCHE</li>
                            <li>MRST</li>
                            <li>MHLE</li>
                            <li>UTEPT</li>
                            <li>TOLIMO</li>
                          </ul>
                          <p className="my-3">
                            بین المللی
                            <span className="text-xs text-gray-500">
                              (انگلیسی)
                            </span>
                          </p>
                          <ul className="grid lg:grid-cols-5 grid-cols-2 gap-2 my-2">
                            <li>BEC</li>
                            <li>CAE</li>
                            <li>CAEL</li>
                            <li>CPE</li>
                            <li>CELPIP</li>
                            <li>Duolingo</li>
                            <li>GMAT</li>
                            <li>GRE</li>
                            <li>FCE</li>
                            <li>IELTS</li>
                            <li>BPET</li>
                            <li>PTE</li>
                            <li>KET</li>
                            <li>OET</li>
                            <li>SAT</li>
                            <li>TOFEL</li>
                            <li>TKT</li>
                            <li>TOEIC</li>
                            <li>YLE</li>
                          </ul>
                          <p className="my-3">
                            بین المللی
                            <span className="text-xs text-gray-500">
                              (آلمانی)
                            </span>
                          </p>
                          <ul className="grid lg:grid-cols-3 grid-cols-2 gap-2 my-2">
                            <li>OSD</li>
                            <li>TKT</li>
                            <li>DSH</li>
                            <li>TsetDaf</li>
                          </ul>
                          <p className="my-3">
                            بین المللی
                            <span className="text-xs text-gray-500">
                              (فرانسه)
                            </span>
                          </p>
                          <ul className="grid lg:grid-cols-5 grid-cols-2 gap-2 my-2">
                            <li>TCF</li>
                            <li>DELF</li>
                            <li>DALF</li>
                          </ul>
                          <p className="my-3"> آزمون پلاس داخلی </p>
                          <ul className="grid lg:grid-cols-5 grid-cols-2 gap-2 my-2">
                            <li>متومسطه اول</li>
                            <li>متوسطه دوم</li>
                            <li>ارشد</li>
                            <li>دکتری</li>
                            <li>وزارت بهداشت</li>
                          </ul>
                          <p className="my-3"> آزمون پلاس بین المللی </p>
                          <ul className="grid lg:grid-cols-4 grid-cols-2 gap-2 my-2 [&>li]:whitespace-nowrap">
                            <li>IELTS GENERAL</li>
                            <li>IELTS Academic</li>
                            <li>IELTS Life Skills</li>
                            <li>GMAT</li>
                            <li>GRE</li>
                            <li>SAT</li>
                            <li>TOFEL IBT</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="jobs" title="مشاغل">
                      <Card>
                        <CardBody className="text-right text-sm p-0 overflow-y-hidden">
                          <ul className="grid grid-cols-2 gap-2">
                            <li>تجارت</li>
                            <li>صنعت</li>
                            <li>بانکداری</li>
                            <li>فناوری اطلاعات (IT)</li>
                            <li>صنایع نفت و گاز</li>
                            <li>ارتباط با مشتریان</li>
                            <li>بازاریابی و تبلیغات</li>
                            <li>داروسازی</li>
                            <li>حسابداری</li>
                            <li>خدمه پرواز</li>
                            <li>مدیران ارشد</li>
                            <li>منابع انسانی</li>
                            <li>سایر مشاغل</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </CardBody>
            </Card>
          </Tab>
          {/* tab-germany */}
          <Tab
            key="germany"
            title={
              <div className="flex items-center gap-1">
                <RadioGroup
                  aria-label=" "
                  color="default"
                  value={selected}
                  style={{ "--nextui-default-500": "196 94% 25%" }}
                >
                  <Radio classNames={{ hiddenInput: 'w-0' }} value="germany" name="language">
                    <GermanyFlag />
                  </Radio>
                </RadioGroup>
                <span className="hidden sm:block">آلمانی</span>
              </div>
            }
          >
            <Card>
              <CardBody>
                <div className="flex w-full flex-col">
                  <Tabs
                    classNames={{
                      panel: "[&>div]:shadow-none",
                      tabList: "pb-0 border-b",
                    }}
                    aria-label="Options"
                    variant="underlined"
                  >
                    <Tab key="languageOfSkills" title="فنون زبان">
                      <Card>
                        <CardBody className="text-right flex-row gap-20 text-sm">
                          <ul className="space-y-4">
                            <li className="">لغت</li>
                            <li className="">مکالمه</li>
                            <li className="">مصاحبه</li>
                            <li className="">تقویت لهجه</li>
                          </ul>
                          <ul className="space-y-4">
                            <li>ضرب المثل</li>
                            <li>اصطلاحات عامیانه</li>
                            <li>تربیت مدرس (TTC)</li>
                            <li>قواعد دستوری/ نگارش/ گرامر</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="skills" title="مهارت ها">
                      <Card>
                        <CardBody className="text-right text-sm">
                          <ul className="space-y-4">
                            <li>مهارت های گفتاری</li>
                            <li>مهارت های نوشتاری</li>
                            <li>مهارت های شنیداری</li>
                            <li>مهارت های خواندن و درک متون</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfSchool" title="زبان مدرسه">
                      <Card>
                        <CardBody className="text-sm text-right">
                          <p className="mb-3">ابتدایی</p>
                          <ul className="text-sm grid grid-cols-6">
                            <li>اول</li>
                            <li>دوم</li>
                            <li>سوم</li>
                            <li>چهارم</li>
                            <li>پنجم</li>
                            <li>ششم</li>
                          </ul>
                          <p className="mt-4 mb-3">متوسطه اول</p>
                          <ul className="text-sm grid grid-cols-6">
                            <li>هفتم</li>
                            <li>هشتم</li>
                            <li>نهم</li>
                          </ul>
                          <p className="mt-4 mb-3">متوسطه دوم</p>
                          <ul className="text-sm grid grid-cols-6">
                            <li>دهم</li>
                            <li>یازدهم</li>
                            <li>دوازدهم</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfUniversity" title=" زبان دانشگاه">
                      <Card>
                        <CardBody className="text-right text-sm">
                          <ul className="space-y-4">
                            <li>پیش</li>
                            <li>عمومی</li>
                            <li>تخصصی</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfExam" title=" زبان کنکور">
                      <Card>
                        <CardBody className="text-sm text-right">
                          <ul className="space-y-4">
                            <li>کاردانی</li>
                            <li>کاردانی</li>
                            <li>کاردانی</li>
                            <li>کاردانی</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="translate" title="ترجمه">
                      <Card>
                        <CardBody className="text-sm text-right grid grid-cols-2 ">
                          <ul className="space-y-4">
                            <li>کتاب</li>
                            <li>مقاله</li>
                            <li>رسمی</li>
                            <li>تخصصی</li>
                          </ul>
                          <ul className="space-y-4">
                            <li>شفاهی</li>
                            <li>وب سایت</li>
                            <li>فیلم صوت</li>
                            <li>کاتالوگ و بروشور</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="exams" title="آزمون ها">
                      <Card>
                        <CardBody className="text-right text-sm">
                          <p className="mb-2.5">
                            داخل ایران
                            <span className="text-xs text-gray-500">
                              (انگلیسی)
                            </span>
                          </p>
                          <ul className="grid grid-cols-5 my-2">
                            <li>EPT</li>
                            <li>MCHE</li>
                            <li>MRST</li>
                          </ul>
                          <ul className="grid grid-cols-5">
                            <li>MHLE</li>
                            <li>UTEPT</li>
                            <li>TOLIMO</li>
                          </ul>
                          <p className="my-3">
                            بین المللی
                            <span className="text-xs text-gray-500">
                              (انگلیسی)
                            </span>
                          </p>
                          <ul className="grid grid-cols-5 my-2">
                            <li>BEC</li>
                            <li>CAE</li>
                            <li>CAEL</li>
                            <li>CPE</li>
                            <li>CELPIP</li>
                          </ul>
                          <ul className="grid grid-cols-5 my-2">
                            <li>Duolingo</li>
                            <li>GMAT</li>
                            <li>GRE</li>
                            <li>FCE</li>
                            <li>IELTS</li>
                          </ul>
                          <ul className="grid grid-cols-5 my-2">
                            <li>BPET</li>
                            <li>PTE</li>
                            <li>KET</li>
                            <li>OET</li>
                            <li>SAT</li>
                          </ul>
                          <ul className="grid grid-cols-5 my-2">
                            <li>TOFEL</li>
                            <li>TKT</li>
                            <li>TOEIC</li>
                            <li>YLE</li>
                          </ul>
                          <p className="my-3">
                            بین المللی
                            <span className="text-xs text-gray-500">
                              (آلمانی)
                            </span>
                          </p>
                          <ul className="grid grid-cols-5 my-2">
                            <li>OSD</li>
                            <li>TKT</li>
                            <li>DSH</li>
                            <li>TsetDaf</li>
                          </ul>
                          <p className="my-3">
                            بین المللی
                            <span className="text-xs text-gray-500">
                              (فرانسه)
                            </span>
                          </p>
                          <ul className="grid grid-cols-5 my-2">
                            <li>TCF</li>
                            <li>DELF</li>
                            <li>DALF</li>
                          </ul>
                          <p className="my-3"> آزمون پلاس داخلی </p>
                          <ul className="grid grid-cols-5 my-2">
                            <li>متومسطه اول</li>
                            <li>متوسطه دوم</li>
                            <li>ارشد</li>
                            <li>دکتری</li>
                            <li>وزارت بهداشت</li>
                          </ul>
                          <p className="my-3"> آزمون پلاس بین المللی </p>
                          <ul className="grid grid-cols-5 my-2">
                            <li>IELTS GENERAL</li>
                            <li>IELTS Academic</li>
                            <li>IELTS Life Skills</li>
                            <li>GMAT</li>
                          </ul>
                          <ul className="grid grid-cols-5 my-2">
                            <li>GRE</li>
                            <li>SAT</li>
                            <li>TOFEL IBT</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="jobs" title="مشاغل">
                      <Card>
                        <CardBody className="text-right text-sm grid grid-cols-2">
                          <ul className="space-y-4">
                            <li>تجارت</li>
                            <li>صنعت</li>
                            <li>بانکداری</li>
                            <li>فناوری اطلاعات (IT)</li>
                            <li>صنایع نفت و گاز</li>
                            <li>ارتباط با مشتریان</li>
                            <li>بازاریابی و تبلیغات</li>
                          </ul>
                          <ul className="space-y-4">
                            <li>داروسازی</li>
                            <li>حسابداری</li>
                            <li>خدمه پرواز</li>
                            <li>مدیران ارشد</li>
                            <li>منابع انسانی</li>
                            <li>سایر مشاغل</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </CardBody>
            </Card>
          </Tab>
          {/* tab-spanish */}
          <Tab
            key="spanish"
            title={
              <div className="flex items-center gap-1">
                <RadioGroup
                  aria-label=" "
                  color="default"
                  value={selected}
                  style={{ "--nextui-default-500": "196 94% 25%" }}
                >
                  <Radio classNames={{ hiddenInput: 'w-0' }} value="spanish" name="language">
                    <SpainFlag />
                  </Radio>
                </RadioGroup>
                <span className="hidden sm:block">اسپانیا</span>
              </div>
            }
          >
            <Card>
              <CardBody>
                <div className="flex w-full flex-col">
                  <Tabs
                    classNames={{
                      panel: "[&>div]:shadow-none",
                      tabList: "pb-0 border-b",
                    }}
                    aria-label="Options"
                    variant="underlined"
                  >
                    <Tab key="languageOfSkills" title="فنون زبان">
                      <Card>
                        <CardBody className="text-right flex-row gap-20 text-sm">
                          <ul className="space-y-4">
                            <li className="">لغت</li>
                            <li className="">مکالمه</li>
                            <li className="">مصاحبه</li>
                            <li className="">تقویت لهجه</li>
                          </ul>
                          <ul className="space-y-4">
                            <li>ضرب المثل</li>
                            <li>اصطلاحات عامیانه</li>
                            <li>تربیت مدرس (TTC)</li>
                            <li>قواعد دستوری/ نگارش/ گرامر</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="skills" title="مهارت ها">
                      <Card>
                        <CardBody className="text-right text-sm">
                          <ul className="space-y-4">
                            <li>مهارت های گفتاری</li>
                            <li>مهارت های نوشتاری</li>
                            <li>مهارت های شنیداری</li>
                            <li>مهارت های خواندن و درک متون</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfSchool" title="زبان مدرسه">
                      <Card>
                        <CardBody className="text-sm text-right">
                          <p className="mb-3">ابتدایی</p>
                          <ul className="text-sm grid grid-cols-6">
                            <li>اول</li>
                            <li>دوم</li>
                            <li>سوم</li>
                            <li>چهارم</li>
                            <li>پنجم</li>
                            <li>ششم</li>
                          </ul>
                          <p className="mt-4 mb-3">متوسطه اول</p>
                          <ul className="text-sm grid grid-cols-6">
                            <li>هفتم</li>
                            <li>هشتم</li>
                            <li>نهم</li>
                          </ul>
                          <p className="mt-4 mb-3">متوسطه دوم</p>
                          <ul className="text-sm grid grid-cols-6">
                            <li>دهم</li>
                            <li>یازدهم</li>
                            <li>دوازدهم</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfUniversity" title=" زبان دانشگاه">
                      <Card>
                        <CardBody className="text-right text-sm">
                          <ul className="space-y-4">
                            <li>پیش</li>
                            <li>عمومی</li>
                            <li>تخصصی</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfExam" title=" زبان کنکور">
                      <Card>
                        <CardBody className="text-sm text-right">
                          <ul className="space-y-4">
                            <li>کاردانی</li>
                            <li>کاردانی</li>
                            <li>کاردانی</li>
                            <li>کاردانی</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="translate" title="ترجمه">
                      <Card>
                        <CardBody className="text-sm text-right grid grid-cols-2 ">
                          <ul className="space-y-4">
                            <li>کتاب</li>
                            <li>مقاله</li>
                            <li>رسمی</li>
                            <li>تخصصی</li>
                          </ul>
                          <ul className="space-y-4">
                            <li>شفاهی</li>
                            <li>وب سایت</li>
                            <li>فیلم صوت</li>
                            <li>کاتالوگ و بروشور</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="exams" title="آزمون ها">
                      <Card>
                        <CardBody className="text-right text-sm">
                          <p className="mb-2.5">
                            داخل ایران
                            <span className="text-xs text-gray-500">
                              (انگلیسی)
                            </span>
                          </p>
                          <ul className="grid grid-cols-5 my-2">
                            <li>EPT</li>
                            <li>MCHE</li>
                            <li>MRST</li>
                          </ul>
                          <ul className="grid grid-cols-5">
                            <li>MHLE</li>
                            <li>UTEPT</li>
                            <li>TOLIMO</li>
                          </ul>
                          <p className="my-3">
                            بین المللی
                            <span className="text-xs text-gray-500">
                              (انگلیسی)
                            </span>
                          </p>
                          <ul className="grid grid-cols-5 my-2">
                            <li>BEC</li>
                            <li>CAE</li>
                            <li>CAEL</li>
                            <li>CPE</li>
                            <li>CELPIP</li>
                          </ul>
                          <ul className="grid grid-cols-5 my-2">
                            <li>Duolingo</li>
                            <li>GMAT</li>
                            <li>GRE</li>
                            <li>FCE</li>
                            <li>IELTS</li>
                          </ul>
                          <ul className="grid grid-cols-5 my-2">
                            <li>BPET</li>
                            <li>PTE</li>
                            <li>KET</li>
                            <li>OET</li>
                            <li>SAT</li>
                          </ul>
                          <ul className="grid grid-cols-5 my-2">
                            <li>TOFEL</li>
                            <li>TKT</li>
                            <li>TOEIC</li>
                            <li>YLE</li>
                          </ul>
                          <p className="my-3">
                            بین المللی
                            <span className="text-xs text-gray-500">
                              (آلمانی)
                            </span>
                          </p>
                          <ul className="grid grid-cols-5 my-2">
                            <li>OSD</li>
                            <li>TKT</li>
                            <li>DSH</li>
                            <li>TsetDaf</li>
                          </ul>
                          <p className="my-3">
                            بین المللی
                            <span className="text-xs text-gray-500">
                              (فرانسه)
                            </span>
                          </p>
                          <ul className="grid grid-cols-5 my-2">
                            <li>TCF</li>
                            <li>DELF</li>
                            <li>DALF</li>
                          </ul>
                          <p className="my-3"> آزمون پلاس داخلی </p>
                          <ul className="grid grid-cols-5 my-2">
                            <li>متومسطه اول</li>
                            <li>متوسطه دوم</li>
                            <li>ارشد</li>
                            <li>دکتری</li>
                            <li>وزارت بهداشت</li>
                          </ul>
                          <p className="my-3"> آزمون پلاس بین المللی </p>
                          <ul className="grid grid-cols-5 my-2">
                            <li>IELTS GENERAL</li>
                            <li>IELTS Academic</li>
                            <li>IELTS Life Skills</li>
                            <li>GMAT</li>
                          </ul>
                          <ul className="grid grid-cols-5 my-2">
                            <li>GRE</li>
                            <li>SAT</li>
                            <li>TOFEL IBT</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="jobs" title="مشاغل">
                      <Card>
                        <CardBody className="text-right text-sm grid grid-cols-2">
                          <ul className="space-y-4">
                            <li>تجارت</li>
                            <li>صنعت</li>
                            <li>بانکداری</li>
                            <li>فناوری اطلاعات (IT)</li>
                            <li>صنایع نفت و گاز</li>
                            <li>ارتباط با مشتریان</li>
                            <li>بازاریابی و تبلیغات</li>
                          </ul>
                          <ul className="space-y-4">
                            <li>داروسازی</li>
                            <li>حسابداری</li>
                            <li>خدمه پرواز</li>
                            <li>مدیران ارشد</li>
                            <li>منابع انسانی</li>
                            <li>سایر مشاغل</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
