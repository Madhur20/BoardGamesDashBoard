import React from 'react';
import ButtonAppBarLogout from './AppBarLogout';
import CenteredTabs from './MenuBar';

export default function Top(props: any) {
    return (
        <div>
            <div >
                <div >
                    <ButtonAppBarLogout />
                </div>
                <div >
                    <CenteredTabs page={props.page} />
                </div>
            </div>
        </div>
    )
}