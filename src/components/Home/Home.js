import './Home.scss';
import { Component } from 'react';
import cloud from '../../assets/icons/cloud.png';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='home__upload'>
                    <img src={cloud} alt='purple cloud' className='home__upload-cloud' />
                    <h1 className='home__upload-title'>UPLOAD FILES</h1>
                    <h2 className='home__upload-sub-title'>Upload documents you want to share with your team.</h2>
                    <div className='home__upload-dragndrop'>
                        
                    </div>
                </div>
                <section className='home__uploaded'>
                    <h2 className='home__uploaded-title'>Uploaded files</h2>
                </section>
            </div>
        )
    }
}

export default Home;

