import React from 'react';
import UserNav from './UserNav';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Help = () => {
    const { t } = useTranslation();

    return (
        <div aria-live="polite"> {/* ARIA live region to announce changes in the content */}
            <header>
                <UserNav />
                <LanguageSwitcher />
            </header>
            <main className="container-xxxl mt-3">
                <div className="container-fluid">
                    <section aria-labelledby="main-heading">
                        <h1 id="main-heading" className='text-center'>{t('QA')}</h1>
                        <p className="fs-3 text-start">{t('This is a page where users can see common questions and answers about their channel.')}</p>
                    </section>
                    <section aria-labelledby="upload-heading">
                        <h2 id="upload-heading" className='text-start'>{t('1. How to upload my video?')}</h2>
                        <p className="fs-3 text-start">{t('You can upload video by clicking the upload button on your channel and following the steps to upload.')}</p>
                    </section>
                    <section aria-labelledby="modify-playlist-heading">
                        <h2 id="modify-playlist-heading" className='text-start'>{t('2. How to modify my playlist?')}</h2>
                        <p className="fs-3 text-start">{t('You can modify your playlist on your user page by clicking the editing button inside the playlist to modify the title, description, or videos inside it.')}</p>
                    </section>
                    <section aria-labelledby="parental-control-heading">
                        <h2 id="parental-control-heading" className='text-start'>{t('3. Where is the parental control function?')}</h2>
                        <p className="fs-3 text-start">{t('You can find the parental control module in the settings page. To enable or disable the function, you need to enter your password.')}</p>
                    </section>
                </div>
            </main>   
        </div>  
    );
};

export default Help;
