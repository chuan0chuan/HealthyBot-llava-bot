import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import catImage from "../assets/cat01.png"; 
import BackgroundComponent from './BackgroundComponent';
import photo from "../assets/photo.png"; 

function PurrfessorHome() {
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFileChange = (event) => {
    // 处理文件选择
    if (event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      // 这里可以添加上传逻辑
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message);
    setMessage('');
  };

  return (
    <div className="content-container">
    <BackgroundComponent />
      <Form onSubmit={handleSubmit} className="input-form">
        <InputGroup className="input-group-custom">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="file-input"
              />
              <label htmlFor="file-input" style={{ marginBottom: 0 }} >
                <img src={photo} alt="Upload" style={{ cursor: 'pointer' }} className="upload-icon"/>
              </label>
          <Form.Control 
            type="text" 
            placeholder="Type your message here..." 
            value={message}
            onChange={handleMessageChange}
          />
          <Button variant="success" type="submit" className="btn-custom">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
            </svg>
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default PurrfessorHome;