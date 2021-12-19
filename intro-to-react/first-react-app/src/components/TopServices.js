import ServiceCard from './ServiceCard';

export default function TopServices() {
    return (
        <div className="page-section">
            <div className="container">
                <div className="row">
                    <ServiceCard />
                    <div className="col-lg-4">
                        <div className="card-service wow fadeInUp">
                            <div className="header">
                                <img src="../assets/img/services/service-2.svg" alt="" />
                            </div>
                            <div className="body">
                                <h5 className="text-secondary">Content Marketing</h5>
                                <p>We help you define your SEO objective & develop a realistic strategy with you</p>
                                <a href="service.html" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card-service wow fadeInUp">
                            <div className="header">
                                <img src="../assets/img/services/service-3.svg" alt="" />
                            </div>
                            <div className="body">
                                <h5 className="text-secondary">Keyword Research</h5>
                                <p>We help you define your SEO objective & develop a realistic strategy with you</p>
                                <a href="service.html" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}