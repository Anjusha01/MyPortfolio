import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { FaGraduationCap } from "react-icons/fa6";

function EducationCard({ year, educationLevel, educationInstitute, imgsrc }) {
  return (
    <div className=' w-100 rounded-4 p-4 my-4'>
        <Row>
            <Col md={2} className="d-flex justify-content-center align-items-center">
            <FaGraduationCap size="3rem"/>
            </Col>
            <Col md={10}>
                <div className='text-dark fw-light'>{year}</div>
                <div className='fs-4 fw-bolder '>{educationLevel}</div>
                <div className='fs-5 fw-bold text-muted'>{educationInstitute}</div>
            </Col>
        </Row>
    </div>
  );
}

export default EducationCard;
