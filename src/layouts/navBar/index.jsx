import { useState } from "react";
import Modal from "components/modal/Modal";
import Notification from "components/tasks/notification";

import handleModal from "helpers/handleModal";
import { CLOSE_MODAL, SHOW_NOTIFICATION } from "helpers/handleModal";

import "./styles.css";
import user1 from "images/user1.png";
import search from "images/search.png";
import notifications from "images/notifications.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(CLOSE_MODAL);
  const { handleClose, handleNotification } = handleModal(setIsOpen);
  return (
    <nav className="navbar">
      <main>
        <button className="navbar-icon-search">
          <img src={search} alt="" />
        </button>
        <input
          type="text"
          className="navbar-search"
          placeholder="Search for any training you want "
        />
      </main>
      <span>
        <button className="navbar-alert" onClick={handleNotification}>
          <img src={notifications} alt="" />
        </button>
        <button className="navbar-user">
          <img src={user1} alt="" />
        </button>
      </span>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        {isOpen === SHOW_NOTIFICATION && <Notification />}
      </Modal>
    </nav>
  );
}

export default NavBar;
