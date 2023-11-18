import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import upload from './Image/upload.svg'
import save from './Image/save.svg'
import parachute from './Image/parachute.svg';
import arrow from './Image/navtab-arrow.svg';
import CustomDatepicker from './CustomDatepicker/CustomDatepicker.js';
import ImageUpload from './ImageUpload/ImageUpload.js';

import './Content.css';


function Content() {
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedFormat, setIsCheckedFormat] = useState(true);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        if(event.target.checked) {
            document.querySelector(".custom-switch-wrap").classList.add('isChecked');
        } else {
            document.querySelector(".custom-switch-wrap").classList.remove('isChecked');
        }
    };

    const handleFormatCheckboxChange = (event) => {
        setIsCheckedFormat(event.target.checked);
        if(event.target.checked) {
            document.querySelector(".custom-switch-wrap-format").classList.add('isChecked');
        } else {
            document.querySelector(".custom-switch-wrap-format").classList.remove('isChecked');
        }
    };
    
    return (
        <div className='main-tab-content h-100'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="orgSetup">
                <div className='d-flex w-100 h-100'>
                    <div className='nav-tabs-holder'>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item >
                                <Nav.Link eventKey="serviceOffered">Service Offered</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="orgSetup">Org Setup</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <div className='arrow-button-holder'>
                            <button>
                                <img src={arrow}  alt="arrow" />
                            </button>
                        </div>
                    </div>
                    <div className='w-100 tab-content-main-holder'>
                        <Tab.Content>
                            <Tab.Pane eventKey="serviceOffered">
                            <div className='tab-section-holder'>
                                    <div className='section-title'>
                                        Service Offered
                                    </div>

                                    <div className='section-accordian-holder'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="orgSetup">
                                <div className='tab-section-holder'>
                                    <div className='section-title'>
                                        Org Setup
                                    </div>

                                    <div className='section-accordian-holder'>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div className='d-flex justify-content-between w-100'>
                                                    <div className='acc-title-holder'>
                                                        <div className='acc-title'>
                                                            Details
                                                        </div>

                                                        <div className='subtitle'>
                                                            Page to configure all the company details
                                                        </div>
                                                    </div>

                                                    <div className='button-holder'>
                                                        <button className='btn btn-bulk-upload'>
                                                            <img src={upload}  alt="upload" />
                                                            Bulk Upload
                                                        </button>

                                                        <button className='btn btn-save'>
                                                            <img src={save}  alt="upload" />
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className='accordian-body-holder'>
                                                    <Form>
                                                        <Row className='d-flex align-items-center'>
                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <ImageUpload />
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <div className='imageUploadInfo'>
                                                                    <div className='title'>Organisation Logo</div>
                                                                    <div className='subtitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                                                    <div className='image-format-info'>Preferred Image Size: 240px x 240px @ 72 DPI Maximum size of 1MB.</div>
                                                                </div>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>Org Id</Form.Label>
                                                                <Form.Control className='custom-input' type="number" placeholder="Enter Org Id" />
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>City Name</Form.Label>
                                                                <Form.Control className='custom-input' type="text" placeholder="Enter City Name" />
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>Org Name</Form.Label>
                                                                <Form.Control className='custom-input' type="text" placeholder="Enter Org Name" />
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>Team Name</Form.Label>
                                                                <Form.Control className='custom-input' type="text" placeholder="Enter Team Name" />
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>No. of Integrations</Form.Label>
                                                                <Form.Select aria-label="Default" placeholder='Select'>
                                                                    <option key='blankChoice' hidden value >Select</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>Team Count</Form.Label>
                                                                <Form.Control className='custom-input' type="text" placeholder="Enter Team Count" />
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>Similar Month</Form.Label>
                                                                <Form.Select aria-label="Default" placeholder='Select'>
                                                                    <option key='blankChoice' hidden value >Select</option>
                                                                    <option value="1">Month One</option>
                                                                    <option value="2">Month Two</option>
                                                                    <option value="3">Month Three</option>
                                                                </Form.Select>
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>Go Live Month</Form.Label>
                                                                <Form.Select aria-label="Default" placeholder='Select'>
                                                                    <option key='blankChoice' hidden value >Select</option>
                                                                    <option value="1">Month One</option>
                                                                    <option value="2">Month Two</option>
                                                                    <option value="3">Month Three</option>
                                                                </Form.Select>
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>Integration Months</Form.Label>
                                                                <Form.Select aria-label="Default" placeholder='Select'>
                                                                    <option key='blankChoice' hidden value >Select</option>
                                                                    <option value="1">Month One</option>
                                                                    <option value="2">Month Two</option>
                                                                    <option value="3">Month Three</option>
                                                                </Form.Select>
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>Integration Months</Form.Label>
                                                                <Form.Select aria-label="Default" placeholder='Select'>
                                                                    <option key='blankChoice' hidden value >Select</option>
                                                                    <option value="1">Integration One</option>
                                                                    <option value="2">Integration Two</option>
                                                                    <option value="3">Integration Three</option>
                                                                </Form.Select>
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>AI Cycle</Form.Label>
                                                                <Form.Select aria-label="Default" placeholder='Select'>
                                                                    <option key='blankChoice' hidden value >Select</option>
                                                                    <option value="1">AI Cycle One</option>
                                                                    <option value="2">AI Cycle Two</option>
                                                                    <option value="3">AI Cycle Three</option>
                                                                </Form.Select>
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>Integration date</Form.Label>
                                                                <CustomDatepicker />
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>ERP Date (Agreed)</Form.Label>
                                                                <CustomDatepicker />
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>ISP Date (Agreed)</Form.Label>
                                                                <CustomDatepicker />
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <Form.Label className='custom-label'>Active AI Time</Form.Label>
                                                                <CustomDatepicker />
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-27'>
                                                                <Form.Label className='custom-label'>Active AI QC Time</Form.Label>
                                                                <CustomDatepicker className='mar-bottom-16' />
                                                                <Form.Check aria-label="option 1" label="Monthly Cycles" className='monthly-cycle-checkbox' />
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <div className='custom-switch-wrap d-flex justify-content-between align-items-center'>
                                                                    <Form.Label className='custom-label'>ERP Module (N/Y)</Form.Label>
                                                                    <Form.Check type="switch" name="group" id="custom-switch" checked={isChecked} onChange={handleCheckboxChange}/>
                                                                </div>
                                                            </Col>

                                                            <Col sm="6" className='mar-bottom-16'>
                                                                <div className='custom-switch-wrap custom-switch-wrap-format isChecked d-flex justify-content-between align-items-center'>
                                                                    <Form.Label className='custom-label'>AI Format (N/Y)</Form.Label>
                                                                    <Form.Check type="switch" name="group1" id="custom-switch-2" checked={isCheckedFormat}  onChange={handleFormatCheckboxChange}/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                            <div className='acc-title-holder'>
                                                <div className='acc-title'>
                                                    Lock Setup
                                                </div>

                                                <div className='subtitle'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </div>
                                            </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                            <div className='acc-title-holder'>
                                                <div className='acc-title'>
                                                Integration Info
                                                </div>

                                                <div className='subtitle'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </div>
                                            </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                            <div className='acc-title-holder'>
                                                <div className='acc-title'>
                                                All Info
                                                </div>

                                                <div className='subtitle'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </div>
                                            </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                    <div className='parachute-image-holder'>
                                        <img src={parachute}  alt="parachute" />
                                    </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>


                    </div>
                </div>
            </Tab.Container>
        </div>
    );
}

export default Content;