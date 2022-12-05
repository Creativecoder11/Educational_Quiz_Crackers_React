import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const LoadTopics = useLoaderData();
    const topics = LoadTopics.data;
    return (
        <div className='mt-4'>
            <h1>Select Programming Language Quiz</h1>
                <div className='topics-container '>
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
                </div>
        </div>
    );
};

export default Topics;