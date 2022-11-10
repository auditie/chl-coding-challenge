import './UploadPage.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import FileUpload from '../FileUpload/FileUpload';
import uploadCloud from '../../assets/icons/cloud-upload.png';

export const API_URL = 'http://localhost:8080';

const UploadPage = () => {
    const [fileList, setFileList] = useState([]);
    const [progress, setProgress] = useState(0);


    useEffect(() => {
        axios.get(`${API_URL}/files`)
        .then((response) => {
            const currentFiles = response.data;
            setFileList(currentFiles);
        })
    })

    const handleFile = (e) => {
        console.log(e.target.files[0]);
        const newFile = e.target.files[0];

        const newFileUpload = {
            fileName: newFile.name,
            fileSize: newFile.size,
            fileType: newFile.type
        }

        const options = {
            onUploadProgress: (progressEvent) => {
                const {loaded, total} = progressEvent;
                let percent = Math.round( (loaded * 100) / total)
                console.log(`${loaded}kb of ${total}kb | ${percent}%`);

                if (percent < 100 ) {
                    setProgress(percent)
                }

            }
        }

        axios.post(`${API_URL}/files`, newFileUpload, options)
        .then((response) => {
            console.log("Success!")
            setProgress(100)
            console.log(progress);
        })
        .catch((error) => {
            console.log('Error: ', error)
        })
    }

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
                        <input type='file' value='' onChange={handleFile} />
                    </div>
                </div>
                <section className='upload-page__uploaded'>
                    <h2 className='upload-page__uploaded-title'>Uploaded files</h2>
                        {
                            fileList.map((file, index) => 
                                <FileUpload key={file.id} file={file} percent={progress} />
                            )
                        }
                    </section>
                </div>
        )
}

export default UploadPage;