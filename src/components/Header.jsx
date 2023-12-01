export const Header = ({ title }) => {
  return (
    <header>
      <a href="#">{title}</a>
      <nav>
        <ul>
          <li>Home page</li>
          <li>Todo</li>
          <li>Users</li>
        </ul>
      </nav>
    </header>
  );
};
