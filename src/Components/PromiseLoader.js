import React from "react";
import {usePromiseTracker} from "react-promise-tracker";
import ScaleLoader from 'react-spinners/ScaleLoader';
// import './PromiseLoader.css';

export const PromiseLoader = () => {
    const {promiseInProgress} = usePromiseTracker();
    return (
        promiseInProgress && (
            <div className="spinner">
                <ScaleLoader
                    size={200}
                    color={"#123abc"}
                    loading={true}
                />
            </div>
        )
    )
};
