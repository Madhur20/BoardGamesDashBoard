import React from 'react';
import ButtonAppBar from './AppBar';
import CenteredTabs from './MenuBar';
import styles from '../styles/Home.module.css';

export default function Top() {
    return (
        <div className={styles.container1}>
            <div className={styles.container2}>
                <ButtonAppBar></ButtonAppBar>
            </div>
            <div className={styles.container2}>
                <CenteredTabs></CenteredTabs>
            </div>
        </div>
    )
}