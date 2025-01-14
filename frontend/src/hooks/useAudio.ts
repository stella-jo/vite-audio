import axios from 'axios';
import { useQuery } from 'react-query';

export const fetchPost = (audioId: string) =>
  axios.get(`/api/posts/${audioId}`).then((res) => res.data);
