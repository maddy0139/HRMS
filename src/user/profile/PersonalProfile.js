import React,{Component} from 'react';
import { Avatar, Collapse, Icon } from 'antd';
import './Profile.css';
import EmployementDetails from './EmployementDetails';
import Address from './Address';
const Panel = Collapse.Panel;
const customPanelStyle = {
    background: '#c3c3c3',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };
const employeeDetails = [{
    "Date of Joining":"",
    "Date of Birth":"",
    "Designation":"",
    "Grade":"",
    "Department":"",
    "Job Category":"",
    "Job Description":"",
    "Experience":"",
    "Location":"",
    "Cost Center":"",
    "Status":"",
    "Employment Type":"",
    "Company":"",
    "Probation End Date":"",
    "Confirmation Date":"",
    "Function":"",
    "Sub-Department":"",
    "Region":"",
    "Current Experience":""
}]

class PersonalProfile extends Component
{
    render()
    {
        return(
            <div className="profile">
                <div className="user-profile">
                    <div className="user-details">
                        <div className="user-avatar">
                        <Avatar className="user-avatar-circle"
                            icon="user"
                            shape="square"
                        />
                        </div>
                        <div className="user-summary">
                            <div >Mahendra Kishorbhai Gohel</div>
                            <div >S1070423</div>
                            <div >
                                <span>Male</span> | <span>28 Yr(s)</span>
                            </div>
                            <div>
                                <span>Date of Birth: </span>16/09/1990<br/>
                                <span>Date of Joining: </span>05/03/2018
                            </div>
                        </div>
                    </div>
                    <div className="user-address">
                        <h4>Current Address</h4>
                        <p>B-1101, Green Olive Apartment,
                            Hinjewadi Phase 1, Rajiv Gandhi Infotech Park Pune, Maharashtra,
                            411057 India
                        </p>
                    </div>
                    <div className="user-address">
                        <h4>Contact Details</h4>
                        <span><Icon type="mobile"/> 8000092239</span><br/>
                        <span><Icon type="mail"/> mahendra.gohel@outlook.com</span>
                    </div>
                </div>
                <div className="employee-details">
                    <div className="employee-number">
                        <h4>Employee No</h4>
                        <span>S1070423</span>
                    </div>
                    <div className="job-desc">
                        <h4>Job Description</h4>
                        <span>Solution Developer</span>
                        <h4>Designation</h4>
                        <span>Solution Developer</span>
                    </div>
                    <div className="designation">
                        <h4>Department</h4>
                        <span>Delivery</span>
                        <h4>Location</h4>
                        <span>PUNE</span>
                    </div>
                </div>
                <div>
                    <Collapse bordered={false} defaultActiveKey="1">
                        <Panel header="Employment Details" icon="plus" key="1" style={customPanelStyle}>
                            <EmployementDetails employeeDetails = {employeeDetails}/>
                        </Panel>
                        <Panel header="Person Details" icon="plus" key="2" style={customPanelStyle}>
                            <p>text</p>
                        </Panel>
                        <Panel header="Contact Details" icon="plus" key="3" style={customPanelStyle}>
                            <Address type="Current Address"/>
                            <Address type="Permanent Address"/>
                            <Address type="Emergency Contact"/>
                        </Panel>
                        <Panel header="Education And Certification" icon="plus" key="4" style={customPanelStyle}>
                            <p>text</p>
                        </Panel>
                        <Panel header="Experience" icon="plus" key="5" style={customPanelStyle}>
                            <p>text</p>
                        </Panel>
                        <Panel header="Reporting Strucutre" icon="plus" key="6" style={customPanelStyle}>
                            <p>text</p>
                        </Panel>
                        <Panel header="Documents and Ids" icon="plus" key="7" style={customPanelStyle}>
                            <p>text</p>
                        </Panel>
                        <Panel header="Publications and Paper Presentation" icon="plus" key="8" style={customPanelStyle}>
                            <p>text</p>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default PersonalProfile;