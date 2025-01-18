import { Link, useParams } from "react-router";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { IoIosSearch } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { useSearchParams } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
function Navbar({ setIndex, setSearchTerms }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();
    setIndex(0);
    navigate("/");
    setSearchTerms(searchInput);
  }
  return (
    <nav className="navbar">
      <Link
        to="/"
        className="home__link"
        onClick={() => {
          setIndex(0);
          searchParams.set("page", "Home");
          setSearchParams(searchParams);
        }}
      >
        <div className="logo__div">
          <FaYoutube></FaYoutube>
          <p>YouTube</p>
        </div>
      </Link>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
        className="search__form"
      >
        <Input
          type="text"
          placeholder="Search..."
          className="search__input"
          onChange={(event) => {
            setSearchInput(event.target.value);
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
