async function fetchUtility(endpoint, method, data = {}) {
  const token = localStorage.getItem("token");
  let response;

  // login is here

  const fetchData = await fetch(`${process.env.HOST_BACKEND}/${endpoint}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method,
    body: JSON.stringify(data)
  });

  if (fetchData.status !== 200 || fetchData.status !== 201) {
    // error is here
  }

  return await fetchData.json();
}

export { fetchUtility };
