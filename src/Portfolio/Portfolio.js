import React from 'react';
import Project from './Project';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className='portfolio'>
            <h1 className='portfolio__title'>Portfolio</h1>
            <div className='portfolio__projects'>
                <Project
                    className='portfolio__project'
                    title='Covid-19 Tracker'
                    description='Displays worldwide covid 19 statistics'
                    github=''
                    weblink=''
                    url=''
                />
                <Project
                    className='portfolio__project'
                    title='Messaging App'
                    description='Real-time messaging application using react chat engine'
                    github=''
                    weblink=''
                    url=''
                />
                <Project
                    className='portfolio__project'
                    title='Tinder Clone'
                    description='Clone of the famous dating app'
                    github=''
                    weblink=''
                    url=''
                />
            </div>
            
        </div>
    )
}

export default Portfolio
