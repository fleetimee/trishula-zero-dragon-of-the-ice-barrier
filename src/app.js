const root = document.querySelector("#root");

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );

      const response = await request.json();

      setNews(response);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Data Fetch</h1>
      {loading ? (
        <i>Fetching data ...</i>
      ) : (
        <ul>
          {news.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}

ReactDOM.render(<App />, root);
