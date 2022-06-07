const getTodos = async () => {
  const response = await fetch("todos/angkring.json");

  if(response.status !== 200){
      throw new Error('cannot fetch data');
  }
  const data = response.json();
  return data;
};

getTodos()
  .then((data) => {
    console.log("resolved:", data);
  })
  .catch((err) => {
    console.log("rejected:", err.message);
  });
