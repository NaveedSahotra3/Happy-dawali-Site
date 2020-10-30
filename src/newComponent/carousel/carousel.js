import React from 'react'
// import '../assets/css/bootstrap.min.css'
// import '../assets/css/font-awesome.min.css'
// import '../assets/css/global.css'
// import '../assets/css/owl.carousel.min.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// import '../../assets/css/bootstrap.css'
// import '../../resources/plugins/revolution/css/settings.css'c
// import '../../assets/plugins/revolution/css/layers.css'
// import '../../assets/plugins/revolution/css/navigation.css'
// import '../../assets/css/style.css'
// import '../../assets/css/responsive.css'
import './style.css'
import Navigation from  '../../components/navigation'
class Carousel extends React.Component {
    content = [
        {
            title: 'Finding love & Happiness has never been easier',
            // image: 'https://st.depositphotos.com/1017039/4272/i/950/depositphotos_42721459-stock-photo-boy-and-girl-teens-lying.jpg',
            image: '/assets/images/banner/1.png',
           
            className: 'img1 slider-content'

        },
        {
            title: 'Finding love & Happiness has never been easier',
            // image: 'https://st.depositphotos.com/1017039/4272/i/950/depositphotos_42721459-stock-photo-boy-and-girl-teens-lying.jpg',
            image: '/assets/images/banner/2.png',
           
            className: 'img2 slider-content'


        },
        {
            title: 'Finding love & Happiness has never been easier',
            image: '/assets/images/banner/3.png',
           
            className: 'img3 slider-content'


        },
        {
            title: 'Finding love & Happiness has never been easier',
            image: '../assets/images/banner/4.png',
           
            className: 'img4 slider-content'


        },
        {
            title: 'Finding love & Happiness has never been easier',
            image: '../assets/images/banner/5.png',
           
            className: 'img5 slider-content'

        }
    ]
    render() {
        return (
            <div>

<Navigation/>
                <Slider className="slider-wrapper" style={{
                    slider: 'slider',
                    previousButton: 'previousButton',
                    nextButton: 'nextButton',
                    buttonDisabled: 'disabled',
                    track: 'track',
                    slide: 'slide',
                    hidden: 'hidden',
                    previous: 'previous',
                    current: 'current',
                    next: 'next',
                    animateIn: 'animateIn',
                    
                }
            }
                autoplay='3000'
                infinite= 'true'
                >
                    {this.content.map((item, index) => (
                        <div
                            key={index}
                            className={item.className}
                            // style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                        </div>
                    ))}
                </Slider>

                {/* <div id="slider" class="slider">
                    <div class="overlay"></div>
                    <div class="owl-carousel owl-loaded owl-drag">	
                        <div class="item sliderOne" >
                            <div class="text">
                                <h2 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s"> Live Chat Psychic Readings</h2>
                                <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Finding love & Happiness has never been easier</h3>
                                <p class="wow fadeInUp hide" data-wow-duration="1s" data-wow-delay="1.5s">Psychic advisors on Keen help provide guidance and clarity in love, relationship, career and more.</p>
                                <div class="slider_form wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.8s">
                                    <form class="form-inline">
                                    <div class="form-group hide">
                                        <input type="text" class="form-control" id="email" placeholder="What's in your mind?"/>
                                    </div>
                                    <a href=""><button type="submit" class="btn btn-primary wow bounceInUp">Register Now</button></a>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="item" style={{backgroundImage:"url(../assets/images/banner/2.png)"}}>
                            <div class="text">
                                <h2 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s"> Live Chat Psychic Readings</h2>
                                <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Finding love & Happiness has never been easier</h3>
                                <p class="wow fadeInUp hide" data-wow-duration="1s" data-wow-delay="1.5s">Psychic advisors on Keen help provide guidance and clarity in love, relationship, career and more.</p>
                                <div class="slider_form wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.8s">
                                    <form class="form-inline">
                                    <div class="form-group hide">
                                        <input type="text" class="form-control" id="email" placeholder="What's in your mind?"/>
                                    </div>
                                    <a href=""><button type="submit" class="btn btn-primary wow bounceInUp">Register Now</button></a>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="item" style={{backgroundImage:"url(../assets/images/banner/3.png)"}}>
                            <div class="text">
                                <h2 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s"> Live Chat Psychic Readings</h2>
                                <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Finding love & Happiness has never been easier</h3>
                                <p class="wow fadeInUp hide" data-wow-duration="1s" data-wow-delay="1.5s">Psychic advisors on Keen help provide guidance and clarity in love, relationship, career and more.</p>
                                <div class="slider_form wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.8s">
                                    <form class="form-inline">
                                    <div class="form-group hide">
                                        <input type="text" class="form-control" id="email" placeholder="What's in your mind?"/>
                                    </div>
                                    <a href=""><button type="submit" class="btn btn-primary wow bounceInUp">Register Now</button></a>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="item" style={{backgroundImage:"url('../assets/images/banner/4.png')"}}>
                            <div class="text">
                                <h2 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s"> Live Chat Psychic Readings</h2>
                                <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Finding love & Happiness has never been easier</h3>
                                <p class="wow fadeInUp hide" data-wow-duration="1s" data-wow-delay="1.5s">Psychic advisors on Keen help provide guidance and clarity in love, relationship, career and more.</p>
                                <div class="slider_form wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.8s">
                                    <form class="form-inline">
                                    <div class="form-group hide">
                                        <input type="text" class="form-control" id="email" placeholder="What's in your mind?"/>
                                    </div>
                                    <a href=""><button type="submit" class="btn btn-primary wow bounceInUp">Register Now</button></a>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="item" style={{backgroundImage:"url(../assets/images/banner/5.png)"}}>
                            <div class="text">
                                <h2 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s"> Live Chat Psychic Readings</h2>
                                <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Finding love & Happiness has never been easier</h3>
                                <p class="wow fadeInUp hide" data-wow-duration="1s" data-wow-delay="1.5s">Psychic advisors on Keen help provide guidance and clarity in love, relationship, career and more.</p>
                                <div class="slider_form wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.8s">
                                    <form class="form-inline">
                                    <div class="form-group hide">
                                        <input type="text" class="form-control" id="email" placeholder="What's in your mind?"/>
                                    </div>
                                    <a href=""><button type="submit" class="btn btn-primary wow bounceInUp">Register Now</button></a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}
export default Carousel;