export const object = [
    {
        path: '/api/object',
        permission: ['object.read'],
        method: 'GET'
    },
    {
        path: '/api/object/list',
        permission: ['object.read'],
        method: 'GET'
    },
    {
        path: '/api/object/export',
        permission: ['object.read'],
        method: 'GET'
    },
    {
        path: '/api/object',
        permission: ['object.write'],
        method: 'POST'
    },
    {
        path: '/api/object',
        permission: ['object.write'],
        method: 'DELETE'
    },
    {
        path: '/api/object/upload',
        permission: ['object.write'],
        method: 'POST'
    },
];