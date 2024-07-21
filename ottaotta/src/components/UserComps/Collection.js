//3 steps for uploading, 2 need complete, 3 need to show all details
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import videoData from '../../datas/videoData';
import VideoCard from './CollectionCard';


function Collection() {
  const [accordionItems, setAccordionItems] = useState([
    { id: 1, name: 'Gaming', content: 'This is my Collection for gaming videos', videos: videoData.slice(0, 5) },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [showHelpText, setShowHelpText] = useState(false);
  const [formData, setFormData] = useState({ id: null, name: '', content: '', videos: [] });

  const handleShowModal = (item = null) => {
    setCurrentItem(item);
    if (item) {
      setFormData(item);
    } else {
      setFormData({ id: null, name: '', content: '', videos: [] });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ id: null, name: '', content: '', videos: [] });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentItem) {
      setAccordionItems(accordionItems.map(item => item.id === formData.id ? formData : item));
    } else {
      setAccordionItems([...accordionItems, { ...formData, id: Date.now() }]);
    }
    handleCloseModal();
  };

  const handleRemoveVideo = (videoIndex) => {
    setFormData({
      ...formData,
      videos: formData.videos.filter((_, index) => index !== videoIndex),
    });
  };

  const toggleHelpText = () => setShowHelpText(!showHelpText);

  return (
    <div className="col-10">
      <header className="d-flex justify-content-between align-items-center pt-5 mb-4">
        <div className="d-flex align-items-center">
          <h1 className="me-3">Collection</h1>
          <i
            className="bi bi-question-circle-fill"
            style={{ fontSize: '1.75rem', cursor: 'pointer' }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#0d6efd')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
            onClick={toggleHelpText}
          ></i>
        </div>
        <Button variant="primary" onClick={() => handleShowModal()}>Add Collection</Button>
      </header>
      {showHelpText && (
        <div className="alert alert-info" role="alert">
          You can add and edit your Collection here. Click the collection title for details.
        </div>
      )}

      <div className="card my-2">
        <div className="card-body">
          <div className="accordion" id="Collection">
            {accordionItems.map(item => (
              <div className="accordion-item" key={item.id}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${item.id}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${item.id}`}>
                    {item.name}
                  </button>
                </h2>
                <div id={`panelsStayOpen-collapse${item.id}`} className="accordion-collapse collapse">
                  <div className="accordion-body text-start fs-4">
                    <div className="row">
                      <div className="col">
                        <strong className='text-start me-3'>{item.content}</strong>
                      </div>
                      <div className="col-auto">
                        <Button variant="primary" style={{ marginLeft: 'auto' }} onClick={() => handleShowModal(item)}>Edit</Button>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="row">
                        {item.videos.map((video, index) => (
                          <div className="col-md-4 mb-3" key={index}>
                            <VideoCard video={video} />
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentItem ? 'Edit Collection' : 'Add Collection'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formAccordionName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleFormChange} required />
            </Form.Group>
            <Form.Group controlId="formAccordionContent">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="content" value={formData.content} onChange={handleFormChange} required />
            </Form.Group>

            <Form.Group controlId="formAccordionVideos">
              <Form.Label>Videos</Form.Label>
              {formData.videos.map((video, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                  <span>{video.title}</span>
                  <Button variant="danger" size="sm" onClick={() => handleRemoveVideo(index)}>Remove</Button>
                </div>
              ))}
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              {currentItem ? 'Update' : 'Add'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Collection;
