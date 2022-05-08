import React from 'react';
import error from '../../common/img/404.jpg';
import styles from './Error404.module.css'

export const Error404 = () => {
    const backImg = {
        backgroundImage: `url(${error})`,
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.backImg} style={backImg}>
                <div className={styles.text}>404 NOT FOUND</div>
                <a href="#" className={styles.previous}>&larr; Previous</a>
            </div>
        </div>
    );
};
