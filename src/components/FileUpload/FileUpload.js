import './FileUpload.scss';
import cancelIcon from '../../assets/icons/cancel-icon.png';
import { ImageConfig } from '../../config/ImageConfig';

const FileUpload = ({ file, progress }) => {
    return (
        <div className='file-upload'>
            <img className='file-upload__type-icon' alt='pdf/text icon' src={ImageConfig[file.fileType.split('/')[1]]|| ImageConfig['default']} />
            <div className='file-upload__details'>
                <div className='file-upload__details-text'>
                    <h3 className='file-upload__details-text-name'>{file.fileName}</h3>
                    <h4 className='file-upload__details-text-upload'>...%</h4>
                </div>
                <div className='file-upload__details-progress'>
                    <progress value={progress} max="100" className='file-upload__details-progress--bar' />
                </div>
            </div>
            <img 
                className='file-upload__action-icon' 
                src={cancelIcon} alt='delete' />
        </div>
    )
}

export default FileUpload;