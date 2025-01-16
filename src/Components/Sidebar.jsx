import links from "../assets/links";
import Button from "../UI/Button";
import { useSearchParams } from "react-router";

function SideBar({ setIndex, index }) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <aside className="sidebar">
      {links.map((link, itemIndex) => {
        return (
          <Button
            className={
              index === itemIndex
                ? "sidebar__btn sidebar__btn__active"
                : "sidebar__btn"
            }
            key={link.name}
            onClick={() => {
              setIndex(itemIndex);
              searchParams.delete("search");
              searchParams.set("page", link.name);
              setSearchParams(searchParams);
            }}
          >
            {link.svg}
            <p>{link.name}</p>
          </Button>
        );
      })}
    </aside>
  );
}

export default SideBar;
