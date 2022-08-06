import React from 'react';
import ButtonAppBar from './AppBar';
import CenteredTabs from './MenuBar';
import styles from '../styles/Home.module.css';

export default function Top(props: any) {
    return (
        <div>
            <div >
            {/* className={styles.container} */}
                <div >
                {/* className={styles.container2} */}
                    <ButtonAppBar></ButtonAppBar>
                </div>
                <div >
                {/* className={styles.container2} */}
                    <CenteredTabs page={props.page} />
                </div>
            </div>
        </div>
    )
}