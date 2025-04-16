import "./style.css";

document.querySelector("#header").innerHTML = `
  <header class="container-fluid">
      <nav>
        <ul>
          <li>
            <img src="/src/assets/NEM.jpg" class="header-logo" alt="Logo" />
          </li>
          <li>
            <strong>New England Melee</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" class="contrast"> About </a>
          </li>
          <li>
            <a href="#" class="contrast"> Services </a>
          </li>
          <li>
            <details class="dropdown">
              <summary>Tournaments</summary>
              <ul dir="rtl">
                <li>
                  <a href="#">Tournament Calendar</a>
                </li>
                <li>
                  <a href="#">Locals</a>
                </li>
                <li>
                  <a href="#">Regionals</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </header>
`;
