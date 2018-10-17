import React from 'react';

const Contacts = (props) => {
    return(
        <section className="bg-dark text-white">

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="section-heading"> Are you still here? Drop me a line!</h2>
                        <hr className="my-4"/>
                            <p className="mb-5">Ready to start your next dream project with me? That's great! Give me a call or send me an email and I will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-4 ml-auto text-center">
                        <i className="fa fa-phone fa-3x mb-3 sr-contact-1" ></i>
                        <p>206-715-9559</p>
                    </div>
                    <div className="col-lg-4 col-sm-4 ml-auto text-center">
                        <a className="text-white" target="_blank" href="/files/ElmazKhussainovDeveloper2018.pdf" ><i className="fa fa-file fa-3x mb-3 sr-contact-1" ></i></a>

                        <p>Resume</p>
                    </div>
                    <div className="col-lg-4 4 col-sm-4 mr-auto text-center">
                        <i className="fa fa-envelope fa-3x mb-3 sr-contact-2" ></i>
                        <p>
                            <a className="text-white" href="mailto:dremdzhe@gmail.com">dremdzhe@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Contacts;