import data from "../../Utility/tokenList.json";

const TokenList = () => {
  return data.map((item, key) => (
    <div
      key={key}
      style={{
        whiteSpace: "pre-line",
        border: "1px solid grey",
        padding: "2px",
        margin: "2px",
      }}
    >
      {Object.entries(item).map(([key, value], index) => (
        <div key={index}>
          <b>{key}</b>:<span>{value}</span>
        </div>
      ))}
    </div>
  ));
};

export default TokenList;
