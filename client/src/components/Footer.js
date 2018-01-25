import React from 'react';

const Footer = () => (
  <footer class="page-footer blue-grey darken-4">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="red-text">What is Volunteering@RPI?</h5>
          <p class="grey-text text-lighten-4">
            Volunteering@RPI is a joint project between the Community Relations
            Committee and the Web Technologies Group. It allows students at RPI
            to find volunteering opportunities that interest them and have fun
            while giving back to the community. RPI student groups can get their
            events onto the site by contacting us using the form on the right or
            sending a message to webtech@union.rpi.edu.
          </p>
        </div>
        <div class="col l4 offset-l2 s12">
          {/* <h5 class="white-text">Links</h5>
          <ul>
            <li>
              <a class="grey-text text-lighten-3" href="#!">
                Link 1
              </a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="#!">
                Link 2
              </a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="#!">
                Link 3
              </a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="#!">
                Link 4
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2018 Copyright Text
        <a class="grey-text text-lighten-4 right" href="https://github.com/wtg">
          A project by WebTech @ RPI.
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
