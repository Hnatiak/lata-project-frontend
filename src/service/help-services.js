import axios from 'axios';

export const sendEmail = async commentData => {
    await axios.post('api/auth/help', commentData);
};