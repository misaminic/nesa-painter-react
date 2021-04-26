import Links from '../links';
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <button className="close-btn" onClick={() => toggleSidebar()}>
        Click
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
      </div>
      <style jsx>{`
        .sidebar {
          background: var(--clr-grey-10);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 999;
          display: grid;
          place-items: center;
          opacity: 0;
          transition: var(--transition);
          transform: translateX(-100%);
        }
        .show-sidebar {
          opacity: 1;
          transform: translateX(0);
        }
        .sidebar-links li {
          opacity: 0;
        }
        .sidebar-links li a {
          display: block;
          text-align: center;
          text-transform: capitalize;
          color: var(--clr-grey-5);
          letter-spacing: var(--spacing);
          margin-bottom: 0.5rem;
          font-size: 2rem;
          transition: var(--transition);
          border-radius: var(--radius);
        }
        .sidebar-links li a:hover {
          background: var(--clr-primary-9);
          color: var(--clr-primary-5);
        }

        .sidebar-icons {
          margin-left: 0.7rem;
          justify-content: center;
        }

        .close-btn {
          position: absolute;
          right: 4.75%;
          top: 2.75%;
          font-size: 2.5rem;
          background: transparent;
          border-color: transparent;
          color: var(--clr-red-dark);
          cursor: pointer;
        }
        @media screen and (min-width: 992px) {
          .sidebar {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
