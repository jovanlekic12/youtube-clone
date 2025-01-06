import links from "../assets/links";
import Button from "../UI/Button";
function SideBar({ setIndex, setPage, index, setSearchValue }) {
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
              setIndex(itemIndex), setPage(link.name), setSearchValue("");
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
