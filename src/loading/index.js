import React from 'react'
import imgGirl from "../folderStudy/img/khanh.jpg";
export default function Loading() {
    return (
        <div>
            <div className="loading">
                <img src={imgGirl} width={300} height={300}/>
            </div>
        </div>
    )
}
