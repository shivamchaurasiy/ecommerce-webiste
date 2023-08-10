import Header from './Header'
import Footer from './Footer'
import './css/Home.css'
const Home = () => {
    return (
        <>
            <Header />
            <div class="container-fluid m-0 p-0">
                <div id="demo" class="carousel slide" data-bs-ride="carousel">

                    {/* Indicators/dots */}
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>

                    {/* <!-- The slideshow/carousel --> */}
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/carousel-1.png" alt="Los Angeles" class="d-block" style={{ width: 1370, height: 575 }} />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/carouse-2.jpg" alt="Chicago" class="d-block" style={{ width: 1370, height: 575 }} />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/carouse-3.jpg" alt="New York" class="d-block" style={{ width: 1370, height: 575 }} />
                        </div>
                    </div>

                    {/* Left and right controls/icons */}
                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
                {/* end of carousel */}
            </div>
            {/* ................................................end of container */}

        <div class="container mt-5">
            <div className='row'>
                <div className='col-4'>
                    <div className='card shadow'>
                        <img src='/images/jeans1.jpg'/>
                        <div className='card-body'>
                        <h1>Jeans-1</h1>
                            <p class="fw-bold">Price 3000</p>
                            <button class="btn btn-primary   ">BUY</button>

                        </div>
                    </div>
                </div>
                <div className='col-4'>
                <div className='card shadow'>
                        <img src='/images/jeans2.jpg'/>
                        <div className='card-body'>
                        <h1>Jeans-2</h1>
                            <p class="fw-bold">Price 5000</p>
                            <button class="btn btn-primary   ">BUY</button>

                        </div>
                    </div>
                </div>
                <div className='col-4 shadow'>
                <div class='card'>
                        <img src='/images/jeans3.jpg'/>
                        <div className='card-body'>
                            <h1>Jeans-3</h1>
                            <p class="fw-bold">Price 4000</p>
                            <button class="btn btn-primary   ">BUY</button>

                        </div>
                    </div>
                </div>

            </div>{/* end row-1 */}

            <div className='row mt-5'>
                <div className='col-4'>
                    <div className='card shadow'>
                        <img src='/images/jeans4.jpg'/>
                        <div className='card-body'>
                        <h1>Jeans-4</h1>
                            <p class="fw-bold">Price 600</p>
                            <button class="btn btn-primary   ">BUY</button>

                        </div>
                    </div>
                </div>
                <div className='col-4'>
                <div className='card shadow'>
                        <img src='/images/jeans6.jpg'/>
                        <div className='card-body'>
                        <h1>Jeans-5</h1>
                            <p class="fw-bold">Price 800</p>
                            <button class="btn btn-primary   ">BUY</button>

                        </div>
                    </div>
                </div>
                <div className='col-4 shadow'>
                <div class='card'>
                        <img src='/images/jeans8.jpg'/>
                        <div className='card-body'>
                            <h1>Jeans-6</h1>
                            <p class="fw-bold">Price 1000</p>
                            <button class="btn btn-primary   ">BUY</button>

                        </div>
                    </div>
                </div>

            </div>{/* end row-2 */}
            <div className='row mt-5'>
                <div className='col-4'>
                    <div className='card shadow'>
                        <img src='/images/mob1.jpg'/>
                        <div className='card-body'>
                        <h1>i-phone</h1>
                            <p class="fw-bold">Price 40000</p>
                            <button class="btn btn-primary   ">BUY</button>

                        </div>
                    </div>
                </div>
                <div className='col-4'>
                <div className='card shadow'>
                        <img src='/images/mob2.jpg'/>
                        <div className='card-body'>
                        <h1>i-phone 13</h1>
                            <p class="fw-bold">Price 70000</p>
                            <button class="btn btn-primary   ">BUY</button>

                        </div>
                    </div>
                </div>
                <div className='col-4 shadow'>
                <div class='card'>
                        <img src='/images/mob3.jpg'/>
                        <div className='card-body'>
                            <h1>i-phone 11</h1>
                            <p class="fw-bold">Price 40000</p>
                            <button class="btn btn-primary   ">BUY</button>

                        </div>
                    </div>
                </div>

            </div>{/* end row-3 */}
            <div className='row mt-5'>
                <div className='col-4'>
                    <div className='card shadow'>
                        <img src='/images/mob4.jpg'/>
                        <div className='card-body'>
                        <h1>TECNO</h1>
                            <p class="fw-bold">Price 11000</p>
                            <button class="btn btn-primary   ">BUY</button>

                        </div>
                    </div>
                </div>
                <div className='col-4'>
                <div className='card shadow'>
                        <img src='/images/mob5.jpg'/>
                        <div className='card-body'>
                        <h1>Realme C33</h1>
                            <p class="fw-bold">Price 1300</p>
                            <button class="btn btn-primary   ">BUY</button>

                        </div>
                    </div>
                </div>
                <div className='col-4 shadow'>
                <div class='card'>
                        <img src='/images/mob6.jpg'/>
                        <div className='card-body'>
                            <h1>Realme 9</h1>
                            <p class="fw-bold">Price 1100</p>
                            <button class="btn btn-primary   ">BUY</button>

                        </div>
                    </div>
                </div>

            </div>{/* end row-4 */}
        </div>{/* end container */}









            <Footer />
        </>
    )
}

export default Home