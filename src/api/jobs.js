import axios from "axios";

const url = 'http://localhost:3000/api/get_jobs/';

async function fetchJobs() {
    const {data} = await axios.get(url);

    return data;
}

export {fetchJobs};
