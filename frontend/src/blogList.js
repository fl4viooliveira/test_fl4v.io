// export const BlogList = () => {
//   const [ setData] = null;
//   const [ setLoading] = false;
//   const [ setError] = null;

//   useEffect(() => {
//     setLoading(true);
//     fetch('http://127.0.0.1:8000/api/blog/posts/')
//       .then(res => res.json())
//       .then(data => {
//           console.log(data);
//           setData(data);
//           setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       })
//   })
// } 

