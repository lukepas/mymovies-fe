async function getAll(token) {
    const response = await fetch('http://localhost:5000/api/movies', {
        method: 'GET',
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
    });

    const result = await response.json();
    return result;
}

async function getById(id, token) {
    const response = await fetch(`http://localhost:5000/api/movie/${id}`, {
        method: 'GET',
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
    });

    const result = await response.json();
    return result;
}

const moviesRepository = {
    getAll,
    getById,
};

export default moviesRepository;
