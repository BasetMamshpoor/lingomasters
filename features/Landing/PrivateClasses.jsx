import React, {useState} from 'react';
import useGetRequest from "@/hooks/useGetRequest";
import Slider from "@/features/Landing/Slider";
import Users from "@icons/users.svg";
import LanguageList from "@/features/Landing/LanguageList";
import PrivateCard from "@/features/Landing/PrivateCard";

const PrivateClasses = ({languages}) => {
    const [id, setId] = useState(1)
    const [data, , , , , isLoading] = useGetRequest(true, `/landing-page/class?lang=${id}`)
    return (
        <>
            <Slider
                Component={PrivateCard}
                isLoading={isLoading}
                data={data}
                Icon={Users}
                title='معرفی کلاس‌های خصوصی'
                loop
                to={`/private-class?language=${id}`}>
                <LanguageList data={languages} setId={setId} id={id}/>
            </Slider>
        </>
    );
};

export default PrivateClasses;