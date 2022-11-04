import './FileUpload.scss';
// import pdficon from '../../assets/icons/pdf-icon.png';
import cancelIcon from '../../assets/icons/cancel-icon.png';
import completeIcon from '../../assets/icons/check-icon.png';
import { ImageConfig } from '../../config/ImageConfig';

const FileUpload = ({ file }) => {
    return (
        <div className='file-upload'>
            <img className='file-upload__type-icon' alt='pdf/text icon' src={ImageConfig[file.type.split('/')[1]]|| ImageConfig['default']} />
            <div className='file-upload__details'>
                <div className='file-upload__details-text'>
                    <h3 className='file-upload__details-text-name'>{file.name}</h3>
                    <h4 className='file-upload__details-text-upload'>96%</h4>
                </div>
                <div className='file-upload__details-progress'>
                    <div className='file-upload__details-progress-bar' />
                </div>
            </div>
            <img className='file-upload__action-icon' src={cancelIcon} alt='' />
        </div>
    )
}

export default FileUpload;