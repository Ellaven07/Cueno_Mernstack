import Navbar from "./components/Navbar";
import { useState } from "react";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [information, setInformation] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInformation = {
      name: name,
      email: email,
    };

    setInformation([...information, newInformation]);

    setName("");
    setEmail("");
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="p-5">
              <h1 className="text-2xl font-bold mb-4">My App</h1>

              <p className="mb-3">Counter: {counter}</p>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
                onClick={() => setCounter(counter + 1)}
              >
                Increase Counter
              </button>

              <br />
              <br />

              <form onSubmit={handleSubmit}>
                <input
                  className="border border-gray-300 p-2 m-1"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                />

                <input
                  className="border border-gray-300 p-2 m-1"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />

                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </form>

              {information.map((info, index) => (
                <div
                  className="border border-gray-300 p-2 m-2 flex w-64 flex-col"
                  key={index}
                >
                  <p>Name: {info.name}</p>
                  <p>Email: {info.email}</p>
                </div>
              ))}
            </div>
          }
        />

        <Route path="/students" element={<Students />} />

        <Route path="/students/:id" element={<StudentDetails />} />
      </Routes>
    </>
  );
}

export default App;