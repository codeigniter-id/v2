<template>
  <section class>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item is-paddingless has-text-weight-bold	" href="/">{{ $static.metaData.siteName }}</a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <g-link class="nav__link" to="/content/group-rules">Group Rules</g-link>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a
                target="_blank"
                class="button is-white is-marginless"
                href="https://www.facebook.com/groups/codeigniter.id/"
              >
                <font-awesome :icon="facebook"/>
              </a>

              <a target="_blank" class="button is-white is-marginless" href="https://t.me/codeigniterindonesia">
                <font-awesome :icon="telegram"/>
              </a>

              <a target="_blank" class="button is-white is-marginless" href="https://github.com/codeigniter-id">
                <font-awesome :icon="github"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>



<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import {
  faTelegram,
  faGithub,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

export default {
  data() {
    return {
      github: faGithub,
      telegram: faTelegram,
      facebook: faFacebook
    };
  },
  mounted() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }
};
</script>
