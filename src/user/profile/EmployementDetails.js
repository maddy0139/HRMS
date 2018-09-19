import React,{Component} from 'react';

class EmployementDetails extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {

        };
    }
    render()
    {
        return(
            <div className="employement-details">
            {Object.keys(this.props.employeeDetails[0]).map((key,props) =>{
                return(
                    <div className="col-md-6" key={key}>
                        <label>{key} : </label>
                        <p>{this.props.employeeDetails[key]}</p>
                    </div>  
                ) 
            })}
            </div>
        );
    }
}
export default EmployementDetails;