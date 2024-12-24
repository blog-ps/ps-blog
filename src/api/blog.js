import instance from './request';

export async function getUserBlogs() {
  return await instance({
    method: 'get',
    url: '/blog/front/getBlogs',
    data: null,
  });
}
