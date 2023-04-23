import React from "react";
import img1 from '../img/certif/agile.png';
import img2 from '../img/certif/bigdata01.png';
import img3 from '../img/certif/bootstrap.png';
import img4 from '../img/certif/cloudComputing.png';
import img5 from '../img/certif/datacollectpython.png';
import img6 from '../img/certif/datascience.png';
import img7 from '../img/certif/datatools.png';
import img8 from '../img/certif/frontreact.png';
import img9 from '../img/certif/pythondatascience.png';
import img10 from '../img/certif/pythonfunctionsfilesd.png';

const Certificates = () => {
    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img1} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">DevOps, Cloud, and Agile Foundations</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: Mar 21, 2023</h6>
                            </div>
                        </div>
                    </div>
               
                
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img2} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">Big Data 101</h5>
                                <p class="card-text"> Cognitive Class</p>
                                <h6 class="card-text">Date: May 10, 2020</h6>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img3} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">Front-End Web UI Frameworks and Tools:Bootstrap 4</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date:Dec 29, 2022</h6>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img4} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">Introduction to Cloud Computing</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: Mar 21, 2023 </h6>
                            </div>
                        </div>
                    </div>
               
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img5} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">Data Collection and Processing with Python</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: May 14, 2022 </h6>
                            </div>
                        </div>
                    </div>
              
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img6} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">Python 101 for Data Science</h5>
                                <p class="card-text">cognitiveclass</p>
                                <h6 class="card-text">Date: May 30, 2020 </h6>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img7} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">Data Science Hands-On with Open Source Tools</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: June 6, 2020 </h6>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img8} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">Front-End Web Development with React</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: Dec 29, 2022</h6>
                            </div>
                        </div>
                    </div>
               
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img9} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">Python 101 for Data Science</h5>
                                <p class="card-text">Cognitive Class</p>
                                <h6 class="card-text">Date:May 30, 2020 </h6>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img10} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">Python Functions, Files, and Dictionaries</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: May 14, 2022</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Certificates;
