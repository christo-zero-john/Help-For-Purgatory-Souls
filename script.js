var headerText = `
<header class="site-header sticky-top py-1 english">
<nav class="navbar navbar-expand-lg navbar-light bg-light text-danger">
  <a href="/index.html" class="d-md-none  text-secondary navHead">Help For Purgatory</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto">

        <li class="nav-item">
            <a class="nav-link navLink" href="~/index.html">Home</a>
        </li>

      <li class="nav-item">
        <a class="nav-link navLink" href="#">Prayer Room</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="~sitepages/main/aboutThem.html">Purgatory Souls</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="~sitepages/main/aboutThem.html/#howToAndWhyToPray">How to and Why to Pray</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#"></a>
      </li>
    </ul>
  </div>
</nav>
</header>

`
onload = function(){
var header = document.getElementById("header").innerHTML = headerText;
}