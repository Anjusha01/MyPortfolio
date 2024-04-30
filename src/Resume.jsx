import React, { useState } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import resume from './resume.pdf';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import './resume.css'

function Resume({align='text-start', title='Resume', subTitle='Download or view my resume'}) {
    const [showPDF, setShowPDF] = useState(false);

    const handleDownload = () => {
        const pdfPath = resume;
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'resume.pdf';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleViewResume = () => {
        setShowPDF(!showPDF);
    };

    return (
        <div className="container my-5 resume-container">
            <div className={align}>
                <h1 className="heading">{title}</h1>
                <h6 className='sub-heading'>{subTitle}</h6>
            </div>
            <div className="text-center">
                <button className=" view-btn border-0 shadow" onClick={handleViewResume}>
                    {showPDF ? 'Hide' : 'View'}
                </button>
                <button className=" download-btn border-0 shadow" onClick={handleDownload}>Download</button>
            </div>
            <div className="mt-5">
                {showPDF && (
                    <div style={{ height: '500px' }}>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
                            <Viewer fileUrl={resume} />
                        </Worker>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Resume;
