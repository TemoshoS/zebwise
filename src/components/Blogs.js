import React from 'react';
import './style.css'; // Make sure to import your styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import $ from 'jquery'; // If you're using jQuery
import 'bootstrap'; // Ensure Bootstrap's JavaScript is included
import WOW from 'wowjs'; // Import WOW.js for animations

const Blogs = () => {
    React.useEffect(() => {
        new WOW.WOW().init(); // Initialize WOW.js for animations
    }, []);

    return (
        <div>
            {/* Blog Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        {/* Blog list Start */}
                        <div className="col-lg-8">
                            <div className="row g-5">
                                <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                                    <div className="blog-item bg-white rounded overflow-hidden shadow-sm">
                                        <div className="blog-img position-relative overflow-hidden">
                                            <img className="img-fluid" src="https://via.placeholder.com/400x200?text=Event" alt="Entrepreneurs Summit" />
                                            <a className="position-absolute top-0 start-0 bg-dark text-white rounded-end mt-5 py-2 px-4" href="">Event</a>
                                        </div>
                                        <div className="p-4">
                                            <div className="d-flex mb-3">
                                                <small className="me-3"><i className="far fa-user text-dark me-2"></i>John Doe</small>
                                                <small><i className="far fa-calendar-alt text-dark me-2"></i>01 Jan, 2045</small>
                                            </div>
                                            <h4 className="mb-3">Entrepreneurs Summit Highlights</h4>
                                            <p>Join us for the latest updates on the entrepreneurs summit, where innovative minds gather.</p>
                                            <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                                    <div className="blog-item bg-white rounded overflow-hidden shadow-sm">
                                        <div className="blog-img position-relative overflow-hidden">
                                            <img className="img-fluid" src="https://via.placeholder.com/400x200?text=Anniversary" alt="Tax and SARS increases" />
                                            <a className="position-absolute top-0 start-0 bg-dark text-white rounded-end mt-5 py-2 px-4" href="">Anniversary</a>
                                        </div>
                                        <div className="p-4">
                                            <div className="d-flex mb-3">
                                                <small className="me-3"><i className="far fa-user text-dark me-2"></i>John Doe</small>
                                                <small><i className="far fa-calendar-alt text-dark me-2"></i>01 Jan, 2045</small>
                                            </div>
                                            <h4 className="mb-3">Tax and SARS Increases</h4>
                                            <p>Stay informed about the recent changes in tax regulations affecting your business.</p>
                                            <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                                    <div className="blog-item bg-white rounded overflow-hidden shadow-sm">
                                        <div className="blog-img position-relative overflow-hidden">
                                            <img className="img-fluid" src="https://via.placeholder.com/400x200?text=Community" alt="Funding for start-ups" />
                                            <a className="position-absolute top-0 start-0 bg-dark text-white rounded-end mt-5 py-2 px-4" href="">Community</a>
                                        </div>
                                        <div className="p-4">
                                            <div className="d-flex mb-3">
                                                <small className="me-3"><i className="far fa-user text-dark me-2"></i>John Doe</small>
                                                <small><i className="far fa-calendar-alt text-dark me-2"></i>01 Jan, 2045</small>
                                            </div>
                                            <h4 className="mb-3">Funding for Start-ups</h4>
                                            <p>Explore the various funding options available for aspiring entrepreneurs.</p>
                                            <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                                    <div className="blog-item bg-white rounded overflow-hidden shadow-sm">
                                        <div className="blog-img position-relative overflow-hidden">
                                            <img className="img-fluid" src="https://via.placeholder.com/400x200?text=News" alt="Community News and Updates" />
                                            <a className="position-absolute top-0 start-0 bg-dark text-white rounded-end mt-5 py-2 px-4" href="">News</a>
                                        </div>
                                        <div className="p-4">
                                            <div className="d-flex mb-3">
                                                <small className="me-3"><i className="far fa-user text-dark me-2"></i>John Doe</small>
                                                <small><i className="far fa-calendar-alt text-dark me-2"></i>01 Jan, 2045</small>
                                            </div>
                                            <h4 className="mb-3">Latest Community News and Updates</h4>
                                            <p>Keep up with the latest news and updates from the community.</p>
                                            <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow slideInUp" data-wow-delay="0.1s">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination pagination-lg m-0">
                                            <li className="page-item disabled">
                                                <a className="page-link rounded-0" href="#" aria-label="Previous">
                                                    <span aria-hidden="true"><i className="bi bi-arrow-left"></i></span>
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link rounded-0" href="#" aria-label="Next">
                                                    <span aria-hidden="true"><i className="bi bi-arrow-right"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/* Blog list End */}

                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <h3 className="section-title">Search</h3>
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <button className="btn btn-primary" type="submit">Search</button>
                                    </div>
                                </form>

                                <h3 className="section-title">Categories</h3>
                                <div className="d-flex flex-column">
                                    <a className="text-body" href="">Event</a>
                                    <a className="text-body" href="">Anniversary</a>
                                    <a className="text-body" href="">Community</a>
                                    <a className="text-body" href="">News</a>
                                </div>

                                <h3 className="section-title">Follow Us</h3>
                                <div className="d-flex mb-2">
                                    <a className="btn-social btn-primary" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn-social btn-primary" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn-social btn-primary" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
            </div>
            {/* Blog End */}

            {/* Footer Start */}
            <div className="footer">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            © 2024 Your Company. All Rights Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <a href="#">Privacy Policy</a>
                            <span className="mx-2">|</span>
                            <a href="#">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </div>
    );
}

export default Blogs;
