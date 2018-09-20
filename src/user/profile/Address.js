import React,{Component} from 'react';
import { Icon } from 'antd';

class Address extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <div className="address-details col-md-3" >
                <h4>{this.props.type}</h4><Icon type="edit" style={{"cursor":"pointer","fontSize":"18px","marginLeft":"5px"}}/>
                <p>address</p>
                <Icon type="mobile"/>8000092239<br/>
                <Icon type="mail"/>mahendra.gohel@outlook.com
            </div>
        );
    }

}
export default Address;