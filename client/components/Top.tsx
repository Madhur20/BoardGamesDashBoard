import React from 'react';
import ButtonAppBar from './AppBar';
import CenteredTabs from './MenuBar';

export default function Top(props: any) {
    return (
        <div>
            <div >
                <div >
                    <ButtonAppBar />
                </div>
                <div >
                    <CenteredTabs page={props.page} />
                </div>
            </div>
        </div>
    )
}