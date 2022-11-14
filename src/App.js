import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const handleFile = (e) => {
    let arr = [];
    let x = e.target.files;
    if (x.length <= 2) {
      for (let i in x) {
        if (x[i].name === undefined || x[i].name === "item") {
        } else {
          arr.push(x[i].name);
        }
      }
      let temp = [];
      arr.forEach((e) => {
        temp.push({ name: value, filename: e });
      });
      setList([...temp, ...list]);
      setValue("");
    } else {
      alert("You can select maximum 2 file");
      return;
    }
  };

  return (
    <div className="App">
      <div className="section_1">
        <span>
          <input
            className="input"
            type="text"
            placeholder="Enter name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </span>
        <span>
          <input type="file" multiple onChange={handleFile} />
        </span>
      </div>
      <div className="section_2">
        <h2>Feed</h2>
        <table border={1} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <td style={{ fontWeight: "bold", padding: "5px" }}>Name</td>
              <td style={{ fontWeight: "bold", padding: "5px" }}>File</td>
            </tr>
          </thead>
          <tbody>
            {list.map((ele, idx) => {
              return (
                <tr key={idx}>
                  <td style={{ padding: "5px" }}>{ele.name}</td>
                  <td style={{ padding: "5px" }}>{ele.filename}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
