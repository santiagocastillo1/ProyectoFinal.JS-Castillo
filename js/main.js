const fetchinServices = async (url) => {
  const response = await fetch(url);
  const services = await response.json();
};
