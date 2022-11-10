import './FileUpload.scss';
import cancelIcon from '../../assets/icons/cancel-icon.png';
import { ImageConfig } from '../../config/ImageConfig';

const FileUpload = ({ file, fileRemove }) => {

    return (
        <div className='file-upload'>
            <img className='file-upload__type-icon' alt='pdf/text icon' src={ImageConfig[file.type.split('/')[1]]|| ImageConfig['default']} />
            <div className='file-upload__details'>
                <div className='file-upload__details-text'>
                    <h3 className='file-upload__details-text-name'>{file.name}</h3>
                    <h4 className='file-upload__details-text-upload'>100%</h4>
                </div>
                <div className='file-upload__details-container'>
                    <div className='progress2 progress-moved'>
                        <div className='progress-bar2'></div>
                    </div>
                </div>
            </div>
            <img 
                className='file-upload__action-icon' 
                src={cancelIcon} alt='delete'
                onClick={() => fileRemove(file)} />
        </div>
    )
}

export default FileUpload;