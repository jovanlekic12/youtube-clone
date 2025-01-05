import links from "../assets/links";
import Button from "../UI/Button";
function SideBar() {
  return (
    <aside className="sidebar">
      {links.map((link) => {
        return (
          <Button className="sidebar__btn" key={link.name}>
            {link.svg}
            <p>{link.name}</p>
          </Button>
        );
      })}
    </aside>
  );
}

export default SideBar;
