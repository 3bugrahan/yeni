import React, { useEffect, useState } from "react";
import TodoList from './TodoList';

export default function Form({ baslik }) {

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, [])

  useEffect(() => {
    saveJobs();
  }, [jobs])


  const addItem = (e) => {
    e.preventDefault();

    setJobs([...jobs, { text: job, id: Math.random() }
    ]);
    setJob("")
  };

  const saveJobs = () => {
    localStorage.setItem("jobs", JSON.stringify(jobs))
  }

  const getJobs = () => {
    if (localStorage.getItem("jobs") === null) {
      setJobs([]);
    } else { 
      setJobs(JSON.parse(localStorage.getItem("jobs"))); 
    }
  }

  return (
    <>
      <h1>{baslik}</h1>
      <form >
        <input value={job} onChange={e => setJob(e.target.value)} />
        <button onClick={addItem}> Ekle </button>
      </form>
      <TodoList
        jobs={jobs}
        setJobs={setJobs} />
    </>
  )
}
