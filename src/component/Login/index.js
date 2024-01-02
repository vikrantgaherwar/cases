import { useEffect, useRef, useState } from "react";
import "./login.css";
import Home from "../Home";

export const arr = [
  {
    name: "India",
    cities: ["Delhi", "Mumbai", "Punjab", "Kolkata", "Nagpur"],
  },
  { name: "Australia", cities: ["Brisbane", "Sydney"] },
  {
    name: "New Zealand",
    cities: ["Aukland"],
  },
];

const Login = () => {
  const [state, setState] = useState("");
  const [bol, setBol] = useState(0);
  const childRef = useRef(null);
  const [country, setCountry] = useState(arr[0]["name"]);
  const [desc, setDesc] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
    console.log(childRef);
    childRef.current.style.color = "red";
    setDesc(e.target.value);
  };

  useEffect(() => {
    console.count("rendering");
    // for (var i = 0; i < 10; i++) {
    //   setTimeout(() => {
    //     console.log(i);
    //   }, 1000);
    // }
    // const arr = Object.entries(["1", "2", "4"]);
    // let ob = {};
    // for (const [ke, val] of arr) {
    //   ob[val] = ke;
    // }
    const arr = [
      { id: 1, name: "v" },
      { id: 2, name: "i" },
      { id: 3, name: "k" },
      { id: 4, name: "r" },
      { id: 5, name: "a" },
      { id: 6, name: "n" },
      { id: 7, name: "t" },
    ];
    const arr1 = [
      { id: 1, add: "vns" },
      { id: 2, add: "dn" },
      { id: 3, add: "kn" },
      { id: 4, add: "rj" },
      { id: 5, add: "abd" },
      { id: 6, add: "ngp" },
      { id: 7, add: "tnd" },
    ];
    const newAr = arr.map((e) => ({
      ...e,
      ...arr1.find((f) => f.id === e.id),
    }));
    console.log({ newAr });
    // var a = 20;
    // let a = 10;
    // console.log({ a });

    // const nterval = setInterval(() => {
    //   setBol((prev) => prev + 1);
    // }, 1000);
    // return () => {
    //   clearInterval(nterval);
    // };
  }, []);

  console.log(country);

  return (
    <>
      {/* {bol}cleaning time
      <details>
        <summary>Travelling Guide</summary>
        <p>
          only problem is that the paragraph comes out as one very long line of
          text as opposed to several lines in the text editor. Is there a
          setting I can change so that it automatically generates my lorem
        </p>
      </details>
      <div className="grid-container">
        {new Array(9).fill().map((_, index) => {
          return (
            <div key={index} className="grid-item">
              {parseFloat(Math.random() * 100).toFixed()}
            </div>
          );
        })}
      </div>
      <select
        style={{ padding: "5px", margin: "5px" }}
        value={country}
        onChange={(e) => {
          e.preventDefault();
          setCountry(e.target.value);
        }}
      >
        {arr.map((item, k) => (
          <option key={k}>{item.name}</option>
        ))}
      </select>
      <select style={{ padding: "5px", margin: "5px" }}>
        {arr
          .filter((f) => f.name === country)[0]
          ["cities"].map((city, c) => (
            <option key={c}>{city}</option>
          ))}
      </select> */}
      <Home ref={childRef} handleChange={handleChange} desc={desc} />
    </>
  );
};
export default Login;
