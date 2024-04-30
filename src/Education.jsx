import React from 'react';
import EducationCard from './EducationCard';


function Education() {

    const educationData = [
        {
            year: '2021-2023',
            educationLevel: 'MSc.Computer Science',
            educationInstitute: 'Pondicherry University',
            
        },
        {
            year: '2018-2021',
            educationLevel: 'BSc.Computer Science',
            educationInstitute: 'Calicut University',
        },
        {
            year: '2016-2018',
            educationLevel: 'Higher Secondary Education',
            educationInstitute: 'GHSS Athavanad',
        }
    ];

    return (
        
            <>
                 <h1 className='heading'>My Qualifications</h1>
                
                    <div className='ps-5'>
                       
                        {educationData.map((entry, index) => (
                            <EducationCard key={index} {...entry} />
                        ))}
                    </div>
                    
                
                {/* <Col md={5}>
                    <img src={edu} alt="" className='edu-image p-5'/>
                </Col> */}
            </>
       
    );
}

export default Education;
