import React from 'react';
import s from "./User.module.css";

const User = () => {
    return (
        <div className={s.user_wrapper}>

            <div className={s.user_img}>
                <img src={"https://upload.wikimedia.org/wikipedia/ru/5/5c/Tupac_Shakur.jpg"} alt={"user"}/>
            </div>

            <b>Name</b>

        </div>
    );
};

export default User;
