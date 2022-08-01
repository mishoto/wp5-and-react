
const paginate = (data) => {
  const itemsPerPage = 4;
  const pages = Math.ceil(data.length / itemsPerPage);

  const newSlicedData = Array.from({length: pages}, (_,index)=>{
    const start = index * itemsPerPage;
    return data.slice(start, start+itemsPerPage)
  })
  return newSlicedData;

};

export default paginate;
