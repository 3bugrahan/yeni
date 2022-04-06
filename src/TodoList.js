import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList({jobs, setJobs}) {

    return (
        <>
            <ul>
                {jobs.map((item) => (
                    <TodoListItem
                    item = {item}
                    key = {item.id}
                    jobs = {jobs}
                    setJobs = {setJobs}
                    />
                ))}
            </ul>
        </>
    );
};