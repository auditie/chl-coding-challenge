import './Home.scss';
import { useState, useRef} from 'react';
import FileUpload from '../FileUpload/FileUpload';
import uploadCloud from '../../assets/icons/cloud-upload.png';

const Home = props => {
    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.Ref.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <div className='home'>
            <div className='home__upload'>
                <h1 className='home__upload-title'>UPLOAD FILES</h1>
                <h2 className='home__upload-sub-title'>Upload documents you want to share with your team.</h2>
                <div 
                    className='home__upload-dragndrop'
                    ref={wrapperRef}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop} 
                >
                    <div className='home__upload-dragndrop-label'>
                        <img src={uploadCloud} alt='arrow in cloud' className='home__upload-dragndrop-icon' />
                        <p className='home__upload-dragndrop-text'>Drag & Drop your files here</p>
                        <p className='home__upload-dragndrop-text'>OR</p>
                        <button className='home__upload-dragndrop-button'>Browse Files</button>
                    </div>
                    <input type='file' value='' onChange={onFileDrop} />
                </div>
            </div>
            <section className='home__uploaded'>
                <h2 className='home__uploaded-title'>Uploaded files</h2>
                    {
                        fileList.map((file, index) => 
                            <FileUpload key={index} file={file} fileRemove={fileRemove} />
                        )
                    }
                </section>
            </div>
    )
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default Home;

