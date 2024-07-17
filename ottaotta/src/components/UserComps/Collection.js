//3 steps for uploading, 2 need complete, 3 need to show all details
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useDragAndDrop from './DragDrop';
import Tooltip from '../Tooltips';

function Collection() {
  

  return (
    <div className="col-10">
      <header className="d-flex justify-content-between align-items-center pt-5 mb-4">
        <h1>Collection</h1>
      </header>

      <div className="card my-2">
        <div className="card-body">
        <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Created by</th>
            <th>Visibility</th>
            <th>Collects</th>
            <th>Collected on</th>
            <th>Video count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Default<br />add description</td>
            <td>User name</td>
            <td>Public</td>
            <td>200</td>
            <td>2024-06-23</td>
            <td>25</td>
          </tr>
          {/* Additional rows can be added here */}
        </tbody>
      </table>
        </div>
      </div>
    </div>
      
  );
}

export default Collection;
