import './UploadPage.scss';
import axios from 'axios';
import { Component } from 'react';
import FileUpload from '../FileUpload/FileUpload';
import uploadCloud from '../../assets/icons/cloud-upload.png';

export const API_URL = 'http://localhost:8080';

class UploadPage extends Component {
    state = {
        fileList: [],
        progress: 0

    }

    componentDidMount() {
        axios.get(`${API_URL}/files`)
        .then((response) => {
            ;
        })
    }


    render() {
        return (
            <div className='upload-page'>
                <div className='upload-page__upload'>
                    <h1 className='upload-page__upload-title'>UPLOAD FILES</h1>
                    <h2 className='upload-page__upload-sub-title'>Upload documents you want to share with your team.</h2>
                    <div 
                        className='upload-page__upload-dragndrop'>
                        <div className='upload-page__upload-dragndrop-label'>
                            <img src={uploadCloud} alt='arrow in cloud' className='upload-page__upload-dragndrop-icon' />
                            <p className='upload-page__upload-dragndrop-text'>Drag & Drop your files here</p>
                            <p className='upload-page__upload-dragndrop-text'>OR</p>
                            <button className='upload-page__upload-dragndrop-button'>Browse Files</button>
                        </div>
                        <input type='file' value=''  />
                    </div>
                </div>
                <section className='upload-page__uploaded'>
                    <h2 className='upload-page__uploaded-title'>Uploaded files</h2>
                        {
                            fileList.map((file, index) => 
                                <FileUpload key={index} file={file} />
                            )
                        }
                    </section>
                </div>
        )
    }
}

export default UploadPage;