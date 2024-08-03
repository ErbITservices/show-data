function NavBar() {
  return (
    <nav class="navbar mb-3">
      <form class="container-fluid justify-content-start">
        <a href="/">
          <button class="btn btn-outline-success me-2" type="button">
            Home
          </button>
        </a>
        <a href="/Dataintable">
          <button class="btn btn-outline-success me-2" type="button">
            Show By Category
          </button>
        </a>
        <a href="/SingleData">
          <button class="btn btn-outline-success me-2" type="button">
            Show Single Data
          </button>
        </a>
      </form>
    </nav>
  );
}
export default NavBar;
