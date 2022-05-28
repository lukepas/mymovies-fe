async function login(email, password) {
    const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        credentials: 'include',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const result = await response.json();
    return result;
}

async function register(data) {
    const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        credentials: 'include',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
}

const userServices = {
    login,
    register,
};

export default userServices;
