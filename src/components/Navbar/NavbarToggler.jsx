import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import {toggleMenu} from "../../../state/menuSlice.js";
/*import { toggleMenu } from "./../../../state/menuSlice.js";*/

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
      className="text-2xl p-3 border border-darkCream rounded-full"
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
