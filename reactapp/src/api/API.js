const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const doPost = (payload) =>
    fetch(`${api}/evaluate`, {
        "crossDomain": true,
        method: 'POST',
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });




