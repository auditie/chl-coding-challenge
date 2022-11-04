import './Home.scss';
import { Component } from 'react';
import FileUpload from '../FileUpload/FileUpload';
import uploadCloud from '../../assets/icons/cloud-upload.png';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='home__upload'>
                    <h1 className='home__upload-title'>UPLOAD FILES</h1>
                    <h2 className='home__upload-sub-title'>Upload documents you want to share with your team.</h2>
                    <div className='home__upload-dragndrop'>
                        <img src={uploadCloud} alt='arrow in cloud' className='home__upload-dragndrop-icon' />
                        <p className='home__upload-dragndrop-text'>Drag & Drop your files here</p>
                        <p className='home__upload-dragndrop-text'>OR</p>
                        <button className='home__upload-dragndrop-button'>Browse Files</button>
                    </div>
                </div>
                <section className='home__uploaded'>
                    <h2 className='home__uploaded-title'>Uploaded files</h2>
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                </section>
            </div>
        )
    }
}

export default Home;

