import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="page">
                <div className='post'>
                    <div className="post-body">
                        <p className="center">
                             I am a Full Stack web developer working at OrderMyGear in Dallas. <br/>
                             I also enjoy playing guitar and eating sandwiches. <br/>
                             This website is a work in progress. Feel free to view the source code on
                             <a className="show-link" target="_blank"
                                 href="https://github.com/milmd90/PersonalSite"> GitHub</a>.
                         </p>
                     </div>
                 </div>
            </div>
        );
    }
};

export default Home;
