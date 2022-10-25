import "./try.css";
const Try = () => {
  return (
    <div className="dropdown">
      <ul class="menu clearfix">
        <li>
          <a href="">Menu item</a>
        </li>
        <li>
          <a href="">Menu item</a>
          <ul class="submenu">
            <li>
              <a href="">Submenu item</a>
            </li>
            <li>
              <a href="">Submenu item</a>
            </li>
            <li>
              <a href="">Submenu item</a>
            </li>
            <li>
              <a href="">Submenu item</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="">Menu item</a>
        </li>
        <li>
          <a href="">Menu item</a>
        </li>
        <li>
          <a href="">Menu item</a>
        </li>
      </ul>
      {/* <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          Dropdown Example
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a href="#">HTML</a>
          </li>
          <li>
            <a href="#">CSS</a>
          </li>
          <li>
            <a href="#">JavaScript</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Try;
