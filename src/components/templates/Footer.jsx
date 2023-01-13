import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  return (
    <div id="footer-wrap">
      <div id="footer">
        <div class="page-container">
          <p className="footer-text-heading">Footer Placeholder Text</p>
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pulvinar eget mauris sed consequat. Cras imperdiet luctus
            consectetur. Sed eget quam ac augue lacinia dictum nec vitae metus.
            Aenean commodo, leo et hendrerit cursus, leo nisl vehicula nunc, non
            dictum augue justo eu ante. Sed convallis mi et convallis viverra.
            Aliquam finibus libero quis ligula interdum, in imperdiet nulla
            semper. Quisque at eleifend ante, et gravida est.
          </p>
        </div>
      </div>

      <p className="footer-copyright">
        Copyright © Husain Bismil, 2023. All rights reserved to their respective
        owners.
      </p>
    </div>
  );
};

export default Footer;
