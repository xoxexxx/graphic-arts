import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";


export const Projects: React.FC = () => {
     // @ts-ignore
    const drop = useSelector((state) => state.dropReducer.drop)

    // useEffect(() => {
    //     document.title = `Проекты Creatiqa `
    // },[])

    return(
        <>
        {!drop && <div className="w-full flex my-0 mx-auto ">
        <JoinNavigation />
        <div className="flex justify-center items-center w-full my-0 mx-6">
            <h1 className="text-center text[#000000]/60 font-medium">Not found 404</h1>
        </div>
    </div>}
    </>
    )
}