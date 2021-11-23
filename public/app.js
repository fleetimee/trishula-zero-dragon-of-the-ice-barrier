// Target id root di index.html
const root = document.querySelector("#root");

function App() {
  // Set state with useState buat nampung data yang diinputkan user
  const [todos, setTodos] = React.useState(""); // Set state dengan useState buat generate list yang diinputkan user

  const [lists, setLists] = React.useState([]); // Function untuk membuat id yang unik

  function generateId() {
    return Date.now();
  } // Function button click menggunakan event handler


  function handleOnClick(e) {
    // e.preventDefault() untuk menghindari default behaviour dari button
    e.preventDefault(); // Set lists dengan menggunakan spread operator untuk menambahkan data yang diinputkan user dan tidak mereplace data yang lama.

    setLists([...lists, {
      id: generateId(),
      todos: todos
    }]); // Set todos untuk mengosongkan inputan user

    setTodos("");
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleOnClick
  }, /*#__PURE__*/React.createElement("h1", null, "Simple ToDoList"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Masukkan aktifitas",
    value: todos // onChange digunakan untuk mengupdate state
    ,
    onChange: e => setTodos(e.target.value)
  }), /*#__PURE__*/React.createElement("button", null, "Submit")), /*#__PURE__*/React.createElement("ul", null, lists.map(list => /*#__PURE__*/React.createElement("li", {
    key: list.id
  }, list.todos))));
} // Render ke DOM


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);