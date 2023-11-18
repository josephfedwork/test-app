import React,{ useState } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import dateIcon from './Image/date.svg'

import './CustomDatepicker.css';

function CustomInput({value, onClick}) {
    return(
        <div className='input-group'>
            <input type='text' className='form-control' value={value} onClick={onClick} readOnly placeholder='Select' />
            <div className='input-group-append'>
                <span className='input-group-text'>
                    <img src={dateIcon}  alt="dateIcon" />
                </span>
            </div>
        </div>
    );
}

function CustomDatepicker() {
    const [selectedDate, setDate] = useState(null);
    return (
        <div className='CustomDatepicker'>
            <label className='datepicker-holder'><Datepicker selected={selectedDate} onChange={date=>setDate(date)} customInput={ <CustomInput /> } /></label>
        </div>
    );
  }
  
  export default CustomDatepicker;