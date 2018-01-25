import React from 'react';

const Header = () => (
  <nav>
    <div class="nav-wrapper blue-grey darken-4">
      <a href="/" class="brand-logo">
        Volunteering@RPI
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a href="/submit">Submit an Event</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
