import React from 'react';
import './Blogs.css'; // Assuming you have a separate CSS file for styles

const Blogs = () => {
    return (
        <div>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        {/* Blog list Start */}
                        <div className="col-lg-8">
                            <div className="row g-5">
                                {[...Array(4)].map((_, index) => (
                                    <div className="col-md-6 wow slideInUp" key={index} data-wow-delay={`${0.1 + index * 0.5}s`}>
                                        <div className="blog-item bg-light rounded overflow-hidden">
                                            <div className="blog-img position-relative overflow-hidden">
                                                <img className="img-fluid" src={`https://via.placeholder.com/600x400?text=Blog+Post+${index + 1}`} alt={`Blog Post ${index + 1}`} />
                                                <a className="position-absolute top-0 start-0 bg-dark text-white rounded-end mt-5 py-2 px-4" href="">Community Event</a>
                                            </div>
                                            <div className="p-4">
                                                <div className="d-flex mb-3">
                                                    <small className="me-3"><i className="far fa-user text-dark me-2"></i>Admin</small>
                                                    <small><i className="far fa-calendar-alt text-dark me-2"></i>{new Date().toLocaleDateString()}</small>
                                                </div>
                                                <h4 className="mb-3">How to Report Community Issues</h4>
                                                <p>Learn how you can effectively report issues in your community to drive change.</p>
                                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                        {/* Blog End */}

                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            {/* Search Form Start */}
                            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                <div className="input-group">
                                    <input type="text" className="form-control p-3" placeholder="Search Reports" />
                                    <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                                </div>
                            </div>
                            {/* Search Form End */}

                            {/* Category Start */}
                            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 className="mb-0">Categories</h3>
                                </div>
                                <div className="link-animated d-flex flex-column justify-content-start">
                                    {['Waste Management (3)', 'Safety Concerns (2)', 'Community Events (1)', 'Health Issues (4)', 'Education (5)'].map((category, index) => (
                                        <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#" key={index}>
                                            <i className="bi bi-arrow-right me-2"></i>{category}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            {/* Category End */}

                            {/* Recent Post Start */}
                            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 className="mb-0" style={{ color: 'black' }}>Recent Posts</h3>
                                </div>
                                {/* Example of a recent post */}
                                <div className="d-flex rounded overflow-hidden mb-3" style={{ backgroundColor: 'white' }}>
                                    <img className="img-fluid" src="https://via.placeholder.com/100x100?text=Recent+Post" style={{ width: '100px', height: '100px', objectFit: 'cover', filter: 'grayscale(100%)' }} alt="Recent Post" />
                                    <a href="" className="h5 fw-semi-bold d-flex align-items-center" style={{ backgroundColor: 'white', color: 'black', padding: '10px', border: '1px solid black' }}>
                                        How We Can Improve Our Neighborhood
                                    </a>
                                </div>
                                {/* Add more recent posts here as needed */}
                            </div>
                            {/* Recent Post End */}
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;