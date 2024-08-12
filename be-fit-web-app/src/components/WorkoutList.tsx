import React from 'react';
import WorkoutCard from './WorkoutCard';

const WorkoutList = () => {
    return <div className="workout-list px-8 py-14 bg-primary font-poppins">
        <div className='workout-list_header flex flex-row justify-between items-center pb-14'>
            <h1 className='text-2xl font-bold text-white w-3/5'>Every exercise with detailed steps</h1>
            <button className='text-secondary p-2 border-2 border-secondary rounded-lg'>See More</button>
        </div>
        <WorkoutCard></WorkoutCard>
    </div>
}

export default WorkoutList;