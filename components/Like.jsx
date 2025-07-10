import React, {useState} from 'react';
import usePostRequest from "@/hooks/usePostRequest";
import {addToast, Spinner} from "@heroui/react";
import Link from "next/link";
import Heart from "@icons/fill-heart.svg";
import HeartIcon from "@icons/heart.svg";
import {useRouter} from "next/router";

const Like = ({isLike, id, url, className}) => {
    const [is_like, setIs_like] = useState(isLike)
    const {isLoading, sendPostRequest} = usePostRequest()
    const {asPath} = useRouter()
    const handleLike = async () => {
        const {
            success,
            errorMessage,
            successMessage, status
        } = await sendPostRequest('POST', `${url}/like/${id}`)
        if (success) {
            addToast({
                description: successMessage,
                color: 'success',
            })
            setIs_like(!is_like)
        } else {
            addToast({
                description: errorMessage,
                color: 'danger',
                endContent: status === 401 &&
                    <Link href={`/auth/login?backUrl=${asPath}`}
                          className="border border-rose-600 text-sm whitespace-nowrap p-1 rounded">ورود</Link>
            })
        }
    }
    return (
        <>
            <div className={`centerOfParent cursor-pointer ${className}`} onClick={handleLike}>
                {!isLoading ? (is_like ? <Heart/> : <HeartIcon/>) : <Spinner color='success' size='sm'/>}
            </div>
        </>
    );
};

export default Like;