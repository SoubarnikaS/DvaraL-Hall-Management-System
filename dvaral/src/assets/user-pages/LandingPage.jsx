
import Navbar from "./Navbar";

import { Carousel } from "@material-tailwind/react";

import '../css/LandingPage.css';

import LandingPageImg from '../images/LandingPageImg.avif';

const LandingPage = () => {

    return (
        <>
            <Navbar />
            <div className="landing-page-body">
                <div className="lp-body">
                    <div className="carousel-container">
                        <div className="img-container">
                            <img src={LandingPageImg} alt="Landing Page" />
                        </div>
                        <div className="carousel-content" style={{ maxWidth: "40vw" }}>
                            {/* <img src = { "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3NtYWxsZGVzaWduY29tcGFueTAxX3ZpYnJhbnRfY29sb3JfYV9ob2xvZ3JhcGh5X2JsdWVfYnJ1c2hfc3Ryb19kOGY2NzA1MS04Zjc2LTQxOGEtYjFiNC01NjgyYTQ4MmQzYWQuanBn.jpg"}/> */}
                            {/* <img src = { "https://static.vecteezy.com/system/resources/previews/035/590/085/non_2x/ai-generated-vibrant-blue-watercolor-brush-strokes-isolated-on-transparent-background-free-png.png"}/> */}
                            <Carousel
                                transition={{ duration: 2 }}
                                className="width-[20vw]"
                                autoplay={true}

                                interval={3000}
                            >

                                <div className="carousel-text">
                                    <p style={{ fontSize: '5vh', fontWeight: '900' }}>Looking for a space that fits your vision?</p>
                                    
                                </div>
                                <div className="carousel-text">
                                    <p style={{ fontSize: '5vh', fontWeight: '900' }}>Relax, we’ve got you covered with top-notch options.</p>
                                </div>
                                <div className="carousel-text">
                                    <p style={{ fontSize: '5vh', fontWeight: '900' }}>From planning to perfection—your event, our passion.</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="lp-content">

                    </div>
                </div>
            </div>
            
        </>
    );
}

export default LandingPage;