import React from 'react';
import GermanFlag from '../../images/German_Flag_Icon.svg';

import * as styles from './LanguageSwitcher.module.css';

const LanuageSwitcher: React.FC = () => {
    return (
        <div className={styles.switcher}>
            <img loading='lazy' alt='Language_Switcher' src={GermanFlag} />
        </div>
    );
};

export default LanuageSwitcher;