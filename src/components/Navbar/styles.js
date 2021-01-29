import { css } from "@emotion/react";

export const navbar = css`
  background-color: white;
  box-shadow: 0 0 10px 0 #ccc;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 0.8;
  font-family: Cabin, sans-serif;
  z-index: 999;

  header {
    width: 1024px;
    margin: 0 auto;

    .logo a {
      font-size: 1.2rem;
      line-height: 1.25;
      font-weight: 400;
      cursor: pointer;
      text-decoration: none;
      color: black;
    }


    * {
      display: inline;
    }

    li {
      margin: 20px;
    }

    li a {
      color: black;
      text-decoration: none;
    }

    li a:hover,
    li a.active {
      color: #7a97e8;
      text-decoration: none;
    }
  }
`;
