import React from 'react';

import PageTitle from '../components/pagetitle/PageTitle';

import Project7 from '../components/project/Project7';

import dataProject2 from '../assets/fake-data/dataProject2';

function Sponsor(props) {
    return (
        <div className='page-roadmap wrapper'>

        <PageTitle title='Sponsors' desc="Our Supportive Partners" />

        <Project7 data={dataProject2} />
           
        </div>
    );
}

export default Sponsor;
