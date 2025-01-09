import { Link } from "react-router";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { IoIosSearch } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { useSearchParams } from "react-router";
function Navbar({ setIndex }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();
    setIndex(0);
    setSearchParams(searchParams);
  }
  return (
    <nav className="navbar">
      <Link
        to="/"
        className="home__link"
        onClick={() => {
          setIndex(0), setPage("Home"), setSearchValue("");
        }}
      >
        <div className="logo__div">
          <FaYoutube></FaYoutube>
          <p>YouTube</p>
        </div>
      </Link>
      <form onSubmit={(event) => handleSubmit(event)} className="search__form">
        <Input
          type="text"
          placeholder="Search..."
          className="search__input"
          onChange={(event) => {
            searchParams.set("search", event.target.value);
          }}
        ></Input>
        <Button type="button" className="search__form__btn">
          <IoIosSearch />
        </Button>
      </form>
    </nav>
  );
}

export default Navbar;
