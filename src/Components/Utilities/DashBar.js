import React from 'react';
import styles from '../../CompStyles/UtilitiesStyle/dashBar.module.css';

function DashBar() {
    return (
        <div className={styles.dashBar}>
            <ul>
            <li>lessons</li>
            <li>assignments</li>
            <li>live streaming</li>
            </ul>
        </div>
    )
}

export default DashBar
