import "./Searcher.css";

const Searcher = ({ placeholder, onChange }) => {
  return <input type="text" placeholder={placeholder} onChange={onChange} />;
};

export default Searcher;
