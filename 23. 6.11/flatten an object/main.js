function flattenAnObject() {
    const client = {
        id: 'fsfdsfsd3249809dihns',
        names: {
            first: 'alon',
            middle: '',
            last: 'cohen'
        },
        phone: {
            home: '035555555',
            mobile: '0527789658'
        },
        address: {
            country: 'Israel',
            city: 'haifa',
            geo: {
                latitude: 32.15,
                longitude: 34.4
            }
        },
        email: 'israel@gmail.com'
    };
    flatten(client);
}

function flatten(obj) {
    for (const property in obj) {
        if (typeof obj[property] !== 'object') {
            console.log(`${property} => ${obj[property]}`)
        } else {
            flatten(obj[property]);
        }
    }
}