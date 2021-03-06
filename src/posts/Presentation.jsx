import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class Presentation extends Component {
    render() {
        return (
            <div className='post post-color'>
                <PostHeader title="Machine Learning Presentation"
                            link={this.props.link}
                            created="21 July 2017"
                />
                <div className="grid-wrapper div-nest">
                    <div className="grid-8">
                        <p>
                            I gave a presentation on the fundamentals of machine learning.
                            The material was borrowed heavily from the MOOC course "Learning from Data" taught at
                            CalTech by Professor Yaser Abu-Mostafa. I highly recommend taking this course though either
                            <a className="show-link" target="_blank"
                                href="https://work.caltech.edu/telecourse.html"> CalTech</a> or
                            <a className="show-link" target="_blank"
                                href="https://www.edx.org/"> edx</a>.
                        </p>
                        <p>
                            My presentation slides are available for download
                            <a className="show-link" target="_blank"
                                href="https://drive.google.com/file/d/0B9M8gvCUnx5_UWNSTkRzZy00Sjg/view?usp=sharing"> here</a>.
                        </p>
                    </div>
                    <div className="grid-4">
                        <img className="center" src="/img/datascience/learningfromdata.jpg"/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Presentation;
