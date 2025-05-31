export const fetchPostData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (res.ok) {
      return await res.json();
    } else throw new Error('Error fetching data');
};
