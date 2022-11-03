import './FileUpload.scss';
import pdficon from '../../assets/icons/pdf-icon.png';
import cancelicon from '../../assets/icons/cancel-icon.png';

const FileUpload = () => {
    return (
        <div className='file-upload'>
            <img className='file-upload__type-icon' alt='pdf/text icon' src={pdficon} />
            <div className='file-upload__details'>
                <div className='file-upload__details-text'>
                    <h3 className='file-upload__details-text-name'>Portfolio Template.pdf</h3>
                    <h4 className='file-upload__details-text-progress'>96%</h4>
                </div>
                <div className='file-upload__details-progress-bar'></div>
            </div>
            <img className='file-upload__action-icon' src={cancelicon} alt='' />
        </div>
    )
}

export default FileUpload;