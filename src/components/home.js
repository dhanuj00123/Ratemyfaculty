import "../css/home.css";
import Navbar from "./navbar";
import Searchbar from "./search";

export default function home() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="searchbar-wrapper"><Searchbar /></div>
      </div>
    </div>
  );
}
