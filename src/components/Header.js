import React from 'react';
import FloatingImages from "./FloatingImages";

const Header = (props) => {
    return(
        <div>
            <header className="masthead text-center text-white d-flex">
                <FloatingImages/>
            <div className="container my-auto">


                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase  text-faded">
                            <strong>Your mind is a forest of great ideas</strong>
                        </h1>

                    </div>
                    <div className="col-lg-8 mx-auto">
                        <p className="text-faded mb-5">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>

                    </div>
                </div>
            </div>
            </header>
        </div>
    );
};

export default Header;