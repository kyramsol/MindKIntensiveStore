export default function getData(url) {
  return fetch(process.env.REACT_APP_API_HOST + url).then(response =>
    response.json()
  );
}
