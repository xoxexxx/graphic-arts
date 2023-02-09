import React from "react";
import { useSelector } from "react-redux";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";

import './Projects.less';

export const Projects: React.FC = () => {
    const drop = useSelector((state: boolean | any) => state.dropReducer.drop)
    return(
        <>
        {!drop && <div className="projects">
        <JoinNavigation />
        <div className="projects__box">
            <h1>Not found 404</h1>
        </div>
    </div>}
    </>
    )
}