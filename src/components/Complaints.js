import React from 'react'
import SidebarComponent from "./global-components/navbar";

export default function Complaints() {
    return (
        <>
            <SidebarComponent style={{marginRight: 500}}/>
            <div class='container'>
                <h1>Complaints</h1>
                <p>This is the Complaints content.</p>
            </div>
        </>

    )
}


