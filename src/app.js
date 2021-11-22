// Target id root di index.html
const root = document.querySelector("#root");

function App() {
  // Set state with useState buat nampung data yang diinputkan user
  const [todos, setTodos] = React.useState("");
  // Set state dengan useState buat generate list yang diinputkan user
  const [lists, setLists] = React.useState([]);

  // Function button click menggunakan event handler
  function handleOnClick(e) {
    // e.preventDefault() untuk menghindari default behaviour dari button
    e.preventDefault();

    // Set lists dengan menggunakan spread operator untuk menambahkan data yang diinputkan user dan tidak mereplace data yang lama.
    setLists([...lists, todos]);

    // Set todos untuk mengosongkan inputan user
    setTodos("");
  }

  return (
    <>
      <form onSubmit={handleOnClick}>
        <h1>Simple ToDoList</h1>
        <input
          type="text"
          placeholder="Masukkan aktifitas"
          value={todos}
          // onChange digunakan untuk mengupdate state
          onChange={(e) => setTodos(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <ul>
        {/* Map untuk mengambil data dari state lists dan menampilkan ke dalam list */}
        {lists.map((list) => (
          <li key={list}>{list}</li>
        ))}
      </ul>
    </>
  );
}

// Render ke DOM
ReactDOM.render(<App />, root);
