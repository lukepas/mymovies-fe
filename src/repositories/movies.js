async function getAll() {
    const response = await fetch('http://localhost:5000/movies');
    const result = await response.json();
    return result;
}

const moviesRepository = {
    getAll,
};

export default moviesRepository;
