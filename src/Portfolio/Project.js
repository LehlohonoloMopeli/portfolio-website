import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import './Project.css'

function Project({url, title, github, weblink, description}) {
    return (
        <Card className='project'>
            <CardContent>
                <h2 className='project__title'>{title}</h2>
                <img className='project__image' src={url} alt=''/>
                <h2 className='project__description__tag'>Description</h2>
                <Card className='project__description'>
                    <CardContent>
                        <p>{description}</p>
                    </CardContent>
                </Card>
                <div className='project__links'>
                    <h4 className='project__github__link'>Github link : <a href=''>{github}</a></h4>
                    <h4 className='project__hosted__link'>Live link : <a href=''>{weblink}</a></h4>
                </div>
                
            </CardContent>
        </Card>
    )
}

export default Project
