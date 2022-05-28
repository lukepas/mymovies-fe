async function getAll() {
    const response = await fetch('http://localhost:5000/movies');
    const result = await response.json();
    return result;
}

async function getById(id) {
    const response = await fetch(`http://localhost:5000/movies/${id}`);
    const result = await response.json();
    return result;
}

const moviesRepository = {
    getAll,
    getById,
};

export default moviesRepository;
