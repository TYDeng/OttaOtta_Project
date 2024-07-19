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

function UploadVideo() {
  const [activeStep, setActiveStep] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const { file, onDragOver, onDrop, setFile } = useDragAndDrop();
  const [iconColor, setIconColor] = useState('grey');
  const [showTooltip, setShowTooltip] = useState(false);
  
  //steps
  const steps = ['Select Video', 'Fill video detail', 'Confirm Upload'];
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const toggleTooltip = () => {
    setShowTooltip((prev) => !prev);
    setIconColor((prev) => (prev === 'grey' ? 'blue' : 'grey'));
  };

  return (
    <div className="col-10">
      <header className="d-flex justify-content-between align-items-center pt-5 mb-4">
        <h1>Upload Video</h1>
      </header>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - your video is ready to be uploaded.
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="card my-2">
              <div className="card-body">
                {activeStep === 0 && (
                  <div className="mb-3">
                    <div className="upload-drop-zone" onDragOver={onDragOver} onDrop={onDrop} style={{ height: '500px' }}>
                      {/* QA */}
                      <i className="bi bi-info-circle" style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '24px', color: iconColor, cursor: 'pointer' }} onClick={toggleTooltip}></i>
                      <Tooltip text="Drag and drop your video here or click to upload" visible={showTooltip} />

                      <i class="bi bi-upload text-muted" style={{ fontSize: '200px' }}></i>
                      <p class="fs-5 text-muted">You can drag video here for upload</p>

                      <label className="btn btn-primary" style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        Click here to upload
                        <input type="file" className="form-control" onChange={e => setFile(e.target.files[0])} style={{ display: 'none' }} />
                      </label> 

                      {file && <p class="fs-3 text-primary"> Video is selected: {file.name}</p>}
                    </div>
                  </div>
                )}
                {activeStep === 1 && (
                  <div className="text-start">
                    {/* step 2 */}
                    <form className="mt-3">
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          // value={title}
                          // onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                          className="form-control"
                          id="description"
                          rows="3"
                          // value={description}
                          // onChange={(e) => setDescription(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="thumbnail" className="form-label">Thumbnail</label>
                        <input
                          type="file"
                          className="form-control"
                          id="thumbnail"
                          // onChange={(e) => setThumbnail(e.target.files[0])}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="tags" className="form-label">Tags</label>
                        <input
                          type="text"
                          className="form-control"
                          id="tags"
                          // value={tags}
                          // onChange={(e) => setTags(e.target.value)}
                          placeholder="Comma-separated tags"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="publish-date" className="form-label">Publish Date and Time: </label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          showTimeSelect
                          dateFormat="Pp"
                          minDate={new Date()}
                        />
                      </div>
                    </form>
                  </div>
                  
                  
                )}
                {activeStep === 2 && (
                  <Typography>Review your details and confirm upload.</Typography>
                )}
                <div className="actions mt-2">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={activeStep === 0 && !file}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>

      <footer className="mt-4">
        <p>
          By submitting your videos to OttaOtta, you acknowledge that you agree to OttaOtta's
          <br></br> 
          <a href="#" className="text-decoration-none">Terms of Service</a> and 
          <a href="#" className="text-decoration-none">Community Guidelines</a>.
          <br></br>  
          Please be sure not to violate others' copyright or privacy rights.
        </p>
      </footer>
    </div>
  );
}

export default UploadVideo;
