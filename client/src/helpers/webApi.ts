import qs from 'qs';

interface IRequestInit {
    endpoint: string;
    query?: object;
    method: string;
    skipAuthorization?: boolean;
    body?: object;
    parse?: boolean;
}

export default async (args: IRequestInit) => {
    try {
        const res: Response = await fetch(getUrl(args), getArgs(args));

        if (args.parse === undefined || args.parse) {
            return await res.json();
        }

        return res;
    } catch (err) {
        throw err;
    }
};

const getUrl = (args: IRequestInit): RequestInfo =>
    args.endpoint + (args.query ? `?${qs.stringify(args.query)}` : '');

const getArgs = (args: IRequestInit): object => {
    const headers: {
        Authorization?: string;
        'Content-Type'?: string;
        Accept?: string;
    } = {};

    const token = localStorage.getItem('token');
    if (token && !args.skipAuthorization) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    let body = {};

    if (args.body) {
        if (args.method === 'GET') {
            throw new Error('GET request does not support request body.');
        }
        body = JSON.stringify(args.body);
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = 'application/json';
    }

    return {
        method: args.method,
        headers,
        ...(args.method === 'GET' ? {} : { body })
    };
};