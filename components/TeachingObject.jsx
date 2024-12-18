import {
  Tabs,
  Tab,
  Card,
  CardBody,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

import React, { useState } from "react";

export default function TeachingObject() {
  const [selected, setSelected] = useState("english");
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Tabs
          classNames={{ tab: "[&>span]:hidden" }}
          aria-label="Tabs variants"
          variant="underlined"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab
            key="english"
            title={
              <div className="flex items-center space-x-2">
                <RadioGroup
                  value={selected}
                  color="default"
                  style={{ "--nextui-default-500": "196 94% 25%" }}
                  aria-label=" "
                >
                  <Radio value="english" name="language"></Radio>
                </RadioGroup>
                <span>انگلیسی</span>
              </div>
            }
          >
            <Card>
              <CardBody>
                <div className="flex w-full flex-col">
                  <Tabs aria-label="Options" variant="underlined">
                    <Tab key="languageOfSkills" title="فنون زبان">
                      <Card>
                        <CardBody>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="skills" title="مهارت ها">
                      <Card>
                        <CardBody>
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfSchool" title="زبان مدرسه">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfUniversity" title=" زبان دانشگاه">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfExam" title=" زبان کنکور">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="translate" title="ترجمه">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="exams" title="آزمون ها">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="jobs" title="مشاغل">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="germany"
            title={
              <div className="flex items-center space-x-2">
                <RadioGroup label=" " color="default" value={selected} style={{ "--nextui-default-500": "196 94% 25%" }}>
                  <Radio value="germany" name="language"></Radio>
                </RadioGroup>
                <span>آلمانی</span>
              </div>
            }
          >
            <Card>
              <CardBody><div className="flex w-full flex-col">
                  <Tabs aria-label="Options" variant="underlined">
                    <Tab key="languageOfSkills" title="فنون زبان">
                      <Card>
                        <CardBody>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="skills" title="مهارت ها">
                      <Card>
                        <CardBody>
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfSchool" title="زبان مدرسه">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfUniversity" title=" زبان دانشگاه">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfExam" title=" زبان کنکور">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="translate" title="ترجمه">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="exams" title="آزمون ها">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="jobs" title="مشاغل">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div></CardBody>
            </Card>
          </Tab>
          <Tab
            key="spanish"
            title={
              <div className="flex items-center space-x-2">
                <RadioGroup label=" " color="default" value={selected} style={{ "--nextui-default-500": "196 94% 25%" }}>
                  <Radio value="spanish" name="language"></Radio>
                </RadioGroup>
                <span>اسپانیا</span>
              </div>
            }
          >
            <Card>
              <CardBody><div className="flex w-full flex-col">
                  <Tabs aria-label="Options" variant="underlined">
                    <Tab key="languageOfSkills" title="فنون زبان">
                      <Card>
                        <CardBody>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="skills" title="مهارت ها">
                      <Card>
                        <CardBody>
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfSchool" title="زبان مدرسه">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfUniversity" title=" زبان دانشگاه">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="languageOfExam" title=" زبان کنکور">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="translate" title="ترجمه">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="exams" title="آزمون ها">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="jobs" title="مشاغل">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div></CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>

      <div
        className="TIMCBM-detail-card-container w-100 tab-pane fade"
        id="learning-objective"
        role="tabpanel"
      >
        <div className="TIMCBM-detail-card-learning-objective TIMCBM-detail-card w-100 flex flex-col">
          <div className="TIMCBM-detail-card-header w-100 flex items-center">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 12C7.5 11.4477 7.94772 11 8.5 11H16.5C17.0523 11 17.5 11.4477 17.5 12C17.5 12.5523 17.0523 13 16.5 13H8.5C7.94772 13 7.5 12.5523 7.5 12Z"
                fill="currentColor"
              />
              <path
                d="M8.5 16C7.94772 16 7.5 16.4477 7.5 17C7.5 17.5523 7.94772 18 8.5 18H16.5C17.0523 18 17.5 17.5523 17.5 17C17.5 16.4477 17.0523 16 16.5 16H8.5Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.5 1C5.29086 1 3.5 2.79086 3.5 5V19C3.5 21.2091 5.29086 23 7.5 23H17.5C19.7091 23 21.5 21.2091 21.5 19V9.08615C21.5 8.1504 21.1719 7.24427 20.5729 6.52541L17.1678 2.43926C16.4078 1.52729 15.282 1 14.0949 1H7.5ZM5.5 5C5.5 3.89543 6.39543 3 7.5 3H13.5V6C13.5 8.20914 15.2909 10 17.5 10H19.5V19C19.5 20.1046 18.6046 21 17.5 21H7.5C6.39543 21 5.5 20.1046 5.5 19V5ZM19.1794 8C19.1359 7.93274 19.0882 7.86786 19.0364 7.80578L15.6313 3.71963C15.5897 3.66966 15.5458 3.622 15.5 3.57674V6C15.5 7.10457 16.3954 8 17.5 8H19.1794Z"
                fill="currentColor"
              />
            </svg>
            <h5>هدف از یادگیری</h5>
          </div>
          <div className="TIMCBM-detail-card-radios w-100" role="tablist">
            <div
              className="TPBCSI-item-radio active"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#TIMCBM-detail-card-learning-objective-tab-content-item-container-english"
            >
              <input
                type="radio"
                id="learning-objective-lang-english"
                name="learning-objective-lang"
                checked
              />
              <label
                for="learning-objective-lang-english"
                className="second-label"
              >
                <svg></svg>
              </label>
              <label for="learning-objective-lang-english">
                <img
                  src="flag radius on/Country=United Kingdom, Style=Flag, Radius=On.svg"
                  alt="#"
                />
                <span>انگلیسی</span>
              </label>
            </div>
            <div
              className="TPBCSI-item-radio"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#TIMCBM-detail-card-learning-objective-tab-content-item-container-germany"
            >
              <input
                type="radio"
                id="learning-objective-lang-germany"
                name="learning-objective-lang"
                checked
              />
              <label
                for="learning-objective-lang-germany"
                className="second-label"
              >
                <svg></svg>
              </label>
              <label for="learning-objective-lang-germany">
                <img
                  src="flag radius on/Country=Germany, Style=Flag, Radius=On.svg"
                  alt="#"
                />
                <span>آلمانی</span>
              </label>
            </div>
            <div
              className="TPBCSI-item-radio"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#TIMCBM-detail-card-learning-objective-tab-content-item-container-spanish"
            >
              <input
                type="radio"
                id="learning-objective-lang-spanish"
                name="learning-objective-lang"
                checked
              />
              <label
                for="learning-objective-lang-spanish"
                className="second-label"
              >
                <svg></svg>
              </label>
              <label for="learning-objective-lang-spanish">
                <img
                  src="flag radius on/Country=Spain, Style=Flag, Radius=On.svg"
                  alt="#"
                />
                <span>اسپانیا</span>
              </label>
            </div>
          </div>
          <div
            className="TIMCBM-detail-card-learning-objective-tab-content-container w-100 tab-content"
            role="tablist"
          >
            <div
              className="TIMCBM-detail-card-learning-objective-tab-content-item-container tab-pane fade show active w-100"
              role="tabpanel"
              id="TIMCBM-detail-card-learning-objective-tab-content-item-container-english"
            >
              <div className="TIMCBM-detail-card-learning-objective-tab-content-item w-100 flex flex-col">
                <div
                  className="TIMCBM-detail-card-navbar TIMCBM-detail-card-learning-objective-navbar flex w-100"
                  role="tablist"
                >
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line active"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-language-tickniques-english"
                      role="tab"
                      type="button"
                    >
                      <p>فنون زبان</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-skills-english"
                      role="tab"
                      type="button"
                    >
                      <p>مهارت ها</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-school-languages-english"
                      role="tab"
                      type="button"
                    >
                      <p>زبان مدرسه</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-university-language-english"
                      role="tab"
                      type="button"
                    >
                      <p>زبان دانشگاه</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-Entrance-language-english"
                      role="tab"
                      type="button"
                    >
                      <p>زبان کنکور</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-translation-english"
                      role="tab"
                      type="button"
                    >
                      <p>ترجمه</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-texts-english"
                      role="tab"
                      type="button"
                    >
                      <p>آزمون ها</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-jobs-english"
                      role="tab"
                      type="button"
                    >
                      <p>مشاغل</p>
                    </button>
                  </div>
                </div>

                <div
                  className="tab-content TIMCBM-detail-card-content w-100"
                  role="tablist"
                >
                  <div
                    className="TIMCBM-detail-card-content-language-tickniques-container w-100 tab-pane fade show active"
                    id="TIMCBM-detail-card-content-language-tickniques-english"
                  >
                    <div className="TIMCBM-detail-card-content-language-tickniques">
                      <ul className="TIMCBM-detail-card-content-language-tickniques-list TIMCBM-detail-card-list w-100">
                        <li>
                          <p>لغت</p>
                        </li>
                        <li>
                          <p>مکالمه</p>
                        </li>
                        <li>
                          <p>مصاحبه</p>
                        </li>
                        <li>
                          <p>تقویت لهجه</p>
                        </li>
                        <li>
                          <p>ضرب المثل</p>
                        </li>
                        <li>
                          <p>اصطلاحات عامیانه</p>
                        </li>
                        <li>
                          <p>تربیت مدرس (TTC)</p>
                        </li>
                        <li>
                          <p>قواعد دستوری/ نگارش/ گرامر</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-skills-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-skills-english"
                  >
                    <div className="TIMCBM-detail-card-content-skills">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-skills-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>مهارت های گفتاری</p>
                          </li>
                          <li>
                            <p>مهارت های نوشتاری</p>
                          </li>
                          <li>
                            <p>مهارت های شنیداری</p>
                          </li>
                          <li>
                            <p>مهارت های خواندن و درک متون</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-school-languages-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-school-languages-english"
                  >
                    <div className="TIMCBM-detail-card-content-school-languages">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>ابتدایی</h6>
                        </div>
                        <ul className="TIMCBM-detail-card-content-school-languages-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>اول</p>
                          </li>
                          <li>
                            <p>دوم</p>
                          </li>
                          <li>
                            <p>سوم</p>
                          </li>
                          <li>
                            <p>چهارم</p>
                          </li>
                          <li>
                            <p>پنجم</p>
                          </li>
                          <li>
                            <p>ششم</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>متوسطه اول</h6>
                        </div>
                        <ul className="TIMCBM-detail-card-content-school-languages-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>هفتم</p>
                          </li>
                          <li>
                            <p>هشتم</p>
                          </li>
                          <li>
                            <p>نهم</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>متوسطه دوم</h6>
                        </div>
                        <ul className="TIMCBM-detail-card-content-school-languages-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>دهم</p>
                          </li>
                          <li>
                            <p>یازدهم</p>
                          </li>
                          <li>
                            <p>دوازدهم</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-university-language-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-university-language-english"
                  >
                    <div className="TIMCBM-detail-card-content-university-language">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-university-language-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>پیش</p>
                          </li>
                          <li>
                            <p>عمومی</p>
                          </li>
                          <li>
                            <p>تخصصی</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-Entrance-language-container w-100  tab-pane fade"
                    id="TIMCBM-detail-card-content-Entrance-language-english"
                  >
                    <div className="TIMCBM-detail-card-content-Entrance-language">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-Entrance-language-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>کاردانی</p>
                          </li>
                          <li>
                            <p>کاردانی</p>
                          </li>
                          <li>
                            <p>کاردانی</p>
                          </li>
                          <li>
                            <p>کاردانی</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-translation-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-translation-english"
                  >
                    <div className="TIMCBM--cardetaild-content-translation">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-translation-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-texts-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-texts-english"
                  >
                    <div className="TIMCBM-detail-card-content-texts">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>داخل ایران</h6>
                          <span>(انگلیسی)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list in-iran-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>بین المللی</h6>
                          <span>(انگلیسی)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-english-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>بین المللی</h6>
                          <span>(فرانسه)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-germany-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>بین المللی</h6>
                          <span>(فرانسه)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-french-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>داخل ایران</h6>
                          <span>(انگلیسی)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-in-plus-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>داخل ایران</h6>
                          <span>(انگلیسی)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-out-plus-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-jobs-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-jobs-english"
                  >
                    <div className="TIMCBM-detail-card-content-jobs">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-jobs-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="TIMCBM-detail-card-learning-objective-tab-content-item-container tab-pane fade w-100"
              role="tabpanel"
              id="TIMCBM-detail-card-learning-objective-tab-content-item-container-germany"
            >
              <div className="TIMCBM-detail-card-learning-objective-tab-content-item w-100 flex flex-col">
                <div
                  className="TIMCBM-detail-card-navbar TIMCBM-detail-card-learning-objective-navbar flex w-100"
                  role="tablist"
                >
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line active"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-language-tickniques-germany"
                      role="tab"
                      type="button"
                    >
                      <p>فنون زبان</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-skills-germany"
                      role="tab"
                      type="button"
                    >
                      <p>مهارت ها</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-school-languages-germany"
                      role="tab"
                      type="button"
                    >
                      <p>زبان مدرسه</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-university-language-germany"
                      role="tab"
                      type="button"
                    >
                      <p>زبان دانشگاه</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-Entrance-language-germany"
                      role="tab"
                      type="button"
                    >
                      <p>زبان کنکور</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-translation-germany"
                      role="tab"
                      type="button"
                    >
                      <p>ترجمه</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-texts-germany"
                      role="tab"
                      type="button"
                    >
                      <p>آزمون ها</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-jobs-germany"
                      role="tab"
                      type="button"
                    >
                      <p>مشاغل</p>
                    </button>
                  </div>
                </div>

                <div
                  className="tab-content TIMCBM-detail-card-content w-100"
                  role="tablist"
                >
                  <div
                    className="TIMCBM-detail-card-content-language-tickniques-container w-100 tab-pane fade show active"
                    id="TIMCBM-detail-card-content-language-tickniques-germany"
                  >
                    <div className="TIMCBM-detail-card-content-language-tickniques">
                      <ul className="TIMCBM-detail-card-content-language-tickniques-list TIMCBM-detail-card-list w-100">
                        <li>
                          <p>لغت</p>
                        </li>
                        <li>
                          <p>مکالمه</p>
                        </li>
                        <li>
                          <p>مصاحبه</p>
                        </li>
                        <li>
                          <p>تقویت لهجه</p>
                        </li>
                        <li>
                          <p>ضرب المثل</p>
                        </li>
                        <li>
                          <p>اصطلاحات عامیانه</p>
                        </li>
                        <li>
                          <p>تربیت مدرس (TTC)</p>
                        </li>
                        <li>
                          <p>قواعد دستوری/ نگارش/ گرامر</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-skills-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-skills-germany"
                  >
                    <div className="TIMCBM-detail-card-content-skills">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-skills-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>مهارت های گفتاری</p>
                          </li>
                          <li>
                            <p>مهارت های نوشتاری</p>
                          </li>
                          <li>
                            <p>مهارت های شنیداری</p>
                          </li>
                          <li>
                            <p>مهارت های خواندن و درک متون</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-school-languages-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-school-languages-germany"
                  >
                    <div className="TIMCBM-detail-card-content-school-languages">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>ابتدایی</h6>
                        </div>
                        <ul className="TIMCBM-detail-card-content-school-languages-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>اول</p>
                          </li>
                          <li>
                            <p>دوم</p>
                          </li>
                          <li>
                            <p>سوم</p>
                          </li>
                          <li>
                            <p>چهارم</p>
                          </li>
                          <li>
                            <p>پنجم</p>
                          </li>
                          <li>
                            <p>ششم</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>متوسطه اول</h6>
                        </div>
                        <ul className="TIMCBM-detail-card-content-school-languages-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>هفتم</p>
                          </li>
                          <li>
                            <p>هشتم</p>
                          </li>
                          <li>
                            <p>نهم</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>متوسطه دوم</h6>
                        </div>
                        <ul className="TIMCBM-detail-card-content-school-languages-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>دهم</p>
                          </li>
                          <li>
                            <p>یازدهم</p>
                          </li>
                          <li>
                            <p>دوازدهم</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-university-language-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-university-language-germany"
                  >
                    <div className="TIMCBM-detail-card-content-university-language">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-university-language-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>پیش</p>
                          </li>
                          <li>
                            <p>عمومی</p>
                          </li>
                          <li>
                            <p>تخصصی</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-Entrance-language-container w-100  tab-pane fade"
                    id="TIMCBM-detail-card-content-Entrance-language-germany"
                  >
                    <div className="TIMCBM-detail-card-content-Entrance-language">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-Entrance-language-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>کاردانی</p>
                          </li>
                          <li>
                            <p>کاردانی</p>
                          </li>
                          <li>
                            <p>کاردانی</p>
                          </li>
                          <li>
                            <p>کاردانی</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-translation-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-translation-germany"
                  >
                    <div className="TIMCBM--cardetaild-content-translation">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-translation-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>کتاب</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-texts-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-texts-germany"
                  >
                    <div className="TIMCBM-detail-card-content-texts">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>داخل ایران</h6>
                          <span>(انگلیسی)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list in-iran-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>بین المللی</h6>
                          <span>(انگلیسی)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-english-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>بین المللی</h6>
                          <span>(فرانسه)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-germany-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>بین المللی</h6>
                          <span>(فرانسه)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-french-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>داخل ایران</h6>
                          <span>(انگلیسی)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-in-plus-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>داخل ایران</h6>
                          <span>(انگلیسی)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-out-plus-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-jobs-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-jobs-germany"
                  >
                    <div className="TIMCBM-detail-card-content-jobs">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-jobs-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="TIMCBM-detail-card-learning-objective-tab-content-item-container tab-pane fade w-100"
              role="tabpanel"
              id="TIMCBM-detail-card-learning-objective-tab-content-item-container-spanish"
            >
              <div className="TIMCBM-detail-card-learning-objective-tab-content-item w-100 flex flex-col">
                <div
                  className="TIMCBM-detail-card-navbar TIMCBM-detail-card-learning-objective-navbar flex w-100"
                  role="tablist"
                >
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line active"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-language-tickniques-spanish"
                      role="tab"
                      type="button"
                    >
                      <p>فنون زبان</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-skills-spanish"
                      role="tab"
                      type="button"
                    >
                      <p>مهارت ها</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-school-languages-spanish"
                      role="tab"
                      type="button"
                    >
                      <p>زبان مدرسه</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-university-language-spanish"
                      role="tab"
                      type="button"
                    >
                      <p>زبان دانشگاه</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-Entrance-language-spanish"
                      role="tab"
                      type="button"
                    >
                      <p>زبان کنکور</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-translation-spanish"
                      role="tab"
                      type="button"
                    >
                      <p>ترجمه</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-texts-spanish"
                      role="tab"
                      type="button"
                    >
                      <p>آزمون ها</p>
                    </button>
                  </div>
                  <div className="nav-item text-nowrap" role="presentation">
                    <button
                      className="nav-link tab-line"
                      data-bs-toggle="tab"
                      data-bs-target="#TIMCBM-detail-card-content-jobs-spanish"
                      role="tab"
                      type="button"
                    >
                      <p>مشاغل</p>
                    </button>
                  </div>
                </div>

                <div
                  className="tab-content TIMCBM-detail-card-content w-100"
                  role="tablist"
                >
                  <div
                    className="TIMCBM-detail-card-content-language-tickniques-container w-100 tab-pane fade show active"
                    id="TIMCBM-detail-card-content-language-tickniques-spanish"
                  >
                    <div className="TIMCBM-detail-card-content-language-tickniques">
                      <ul className="TIMCBM-detail-card-content-language-tickniques-list TIMCBM-detail-card-list w-100">
                        <li>
                          <p>لغت</p>
                        </li>
                        <li>
                          <p>مکالمه</p>
                        </li>
                        <li>
                          <p>مصاحبه</p>
                        </li>
                        <li>
                          <p>تقویت لهجه</p>
                        </li>
                        <li>
                          <p>ضرب المثل</p>
                        </li>
                        <li>
                          <p>اصطلاحات عامیانه</p>
                        </li>
                        <li>
                          <p>تربیت مدرس (TTC)</p>
                        </li>
                        <li>
                          <p>قواعد دستوری/ نگارش/ گرامر</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-skills-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-skills-spanish"
                  >
                    <div className="TIMCBM-detail-card-content-skills">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-skills-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>مهارت های گفتاری</p>
                          </li>
                          <li>
                            <p>مهارت های نوشتاری</p>
                          </li>
                          <li>
                            <p>مهارت های شنیداری</p>
                          </li>
                          <li>
                            <p>مهارت های خواندن و درک متون</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-school-languages-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-school-languages-spanish"
                  >
                    <div className="TIMCBM-detail-card-content-school-languages">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>ابتدایی</h6>
                        </div>
                        <ul className="TIMCBM-detail-card-content-school-languages-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>اول</p>
                          </li>
                          <li>
                            <p>دوم</p>
                          </li>
                          <li>
                            <p>سوم</p>
                          </li>
                          <li>
                            <p>چهارم</p>
                          </li>
                          <li>
                            <p>پنجم</p>
                          </li>
                          <li>
                            <p>ششم</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>متوسطه اول</h6>
                        </div>
                        <ul className="TIMCBM-detail-card-content-school-languages-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>هفتم</p>
                          </li>
                          <li>
                            <p>هشتم</p>
                          </li>
                          <li>
                            <p>نهم</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>متوسطه دوم</h6>
                        </div>
                        <ul className="TIMCBM-detail-card-content-school-languages-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>دهم</p>
                          </li>
                          <li>
                            <p>یازدهم</p>
                          </li>
                          <li>
                            <p>دوازدهم</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-university-language-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-university-language-spanish"
                  >
                    <div className="TIMCBM-detail-card-content-university-language">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-university-language-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>پیش</p>
                          </li>
                          <li>
                            <p>عمومی</p>
                          </li>
                          <li>
                            <p>تخصصی</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-Entrance-language-container w-100  tab-pane fade"
                    id="TIMCBM-detail-card-content-Entrance-language-spanish"
                  >
                    <div className="TIMCBM-detail-card-content-Entrance-language">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-Entrance-language-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>کاردانی</p>
                          </li>
                          <li>
                            <p>کاردانی</p>
                          </li>
                          <li>
                            <p>کاردانی</p>
                          </li>
                          <li>
                            <p>کاردانی</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-translation-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-translation-spanish"
                  >
                    <div className="TIMCBM--cardetaild-content-translation">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-translation-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>کتاب</p>
                          </li>
                          <li>
                            <p>مقاله</p>
                          </li>
                          <li>
                            <p>رسمی</p>
                          </li>
                          <li>
                            <p>تخصصی</p>
                          </li>
                          <li>
                            <p>شفاهی</p>
                          </li>
                          <li>
                            <p>وبسایت</p>
                          </li>
                          <li>
                            <p>فیلم صوت</p>
                          </li>
                          <li>
                            <p>کاتالوگ و بروشور</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-texts-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-texts-spanish"
                  >
                    <div className="TIMCBM-detail-card-content-texts">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>داخل ایران</h6>
                          <span>(انگلیسی)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list in-iran-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>بین المللی</h6>
                          <span>(انگلیسی)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-english-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>بین المللی</h6>
                          <span>(فرانسه)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-germany-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>بین المللی</h6>
                          <span>(فرانسه)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-french-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>داخل ایران</h6>
                          <span>(انگلیسی)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-in-plus-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <div className="TIMCBM-detail-card-list-section-title">
                          <h6>داخل ایران</h6>
                          <span>(انگلیسی)</span>
                        </div>
                        <ul className="TIMCBM-detail-card-content-texts-list TIMCBM-detail-card-list international-out-plus-list w-100">
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                          <li>
                            <p>OTP</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="TIMCBM-detail-card-content-jobs-container w-100 tab-pane fade"
                    id="TIMCBM-detail-card-content-jobs-spanish"
                  >
                    <div className="TIMCBM-detail-card-content-jobs">
                      <div className="TIMCBM-detail-card-list-section w-100">
                        <ul className="TIMCBM-detail-card-content-jobs-list TIMCBM-detail-card-list w-100">
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                          <li>
                            <p>تجارت</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
