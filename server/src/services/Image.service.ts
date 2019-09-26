import axios from 'axios';
import { imgurId } from '../config/imgur.config';

const uploadToImgur = async (file: any) => {
    try {
        const { data: { data } } = await axios.post(
            'https://api.imgur.com/3/upload',
            {
                image: file.buffer.toString('base64')
            }, {
                headers: { Authorization: `Client-ID ${imgurId}` }
            }
        );
        return {
            link: data.link,
            deleteHash: data.deletehash
        };
    } catch ({ response: { data: { status, data } } }) {
        return Promise.reject({ status, message: data.error });
    }
};

export const upload = async (file: any) => {
    const image = await uploadToImgur(file);
    return image;
};