import React from 'react';


export default function TodoListItem({ item, jobs, setJobs}) {


const deleteHandler = () => {
    setJobs(jobs.filter(job => job.id !== item.id ));
}

const checkHandler = () => {
    setJobs(jobs.map(job => {
        if (job.id === item.id) {
            return {...job, done: true};
        }
        return job;
    }));
}

return (
<div >
<li className={item.done && "checkJob"}>{item.text}</li>
{!item.done &&
<button onClick={checkHandler}> Yapıldı </button>}
<button onClick={deleteHandler}> Sil </button>
</div>
)
}