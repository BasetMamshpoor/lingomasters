import React from 'react';
import {Spinner} from "@heroui/react";
import Link from "next/link";

const Links = ({data = [], isLoading}) => {
    return (
        <>
            {isLoading ?
                <div className="centerOfParent w-ful h-[30vh]"><Spinner variant='dots' color='success' size="lg"/>
                </div> :
                <div className="flex flex-col gap-4">
                    {data.length ? data.map((f) => (
                        <div key={f.id} className="flex flex-col gap-2 px-4">
                            <p>{f.text}</p>
                            <Link target="_blank" href={f.link} className="text-primary-600"
                                  dir="ltr">{f.link}</Link>
                        </div>
                    )) : <p className="text-center text-sm  lg:col-span-4 col-span-3">هیچ فایلی وجود ندارد</p>}
                </div>}
        </>
    );
};

export default Links;