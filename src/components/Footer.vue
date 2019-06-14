<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <h1 class="title is-2">Codeigniter Indonesia</h1>
          <p class="subtitle is-6 has-margin-top-10 has-text-grey">
            CodeIgniter is a powerful PHP framework with a very small footprint,
            <br>built for developers who need a simple and elegant toolkit to create full-featured web applications.
          </p>

          <nav class="level">
            <div class="level-left">
              <span class="level-item">
                <a
                  target="_blank"
                  class="button facebook is-marginless"
                  href="https://www.facebook.com/groups/codeigniter.id/"
                >
                  <font-awesome :icon="facebook" class="has-margin-right-5"/>Facebook
                </a>
              </span>
              <span class="level-item">
                <a
                  target="_blank"
                  class="button is-marginless telegram"
                  href="https://t.me/codeigniterindonesia"
                >
                  <font-awesome :icon="telegram" class="has-margin-right-5"/>Telegram
                </a>
              </span>
              <span class="level-item">
                <a
                  target="_blank"
                  class="button is-marginless github"
                  href="https://github.com/codeigniter-id"
                >
                  <font-awesome :icon="github" class="has-margin-right-5"/>Github
                </a>
              </span>
            </div>
          </nav>

          <p class="text-center is-size-7">
            CodeIgniter was created by
            <a href="https://www.ellislab.com/">EllisLab</a>
            and is now a project of the
            <a
              href="http://www.bcit.ca/cas/computing/"
            >British Columbia Institute of Technology</a>
          </p>
        </div>
        <div class="column is-4">
          <h1 class="title is-5">Community Support</h1>

          <div class="is-inline-flex">
            <figure class="image is-64x64">
              <img src="https://image.flaticon.com/icons/png/128/25/25231.png">
            </figure>
            <figure class="image is-128x128 has-margin-left-20 has-margin-top-20">
              <img src="https://www.rumahkomunitas.com/img/logo/logorklonghitam2.png">
            </figure>

            <figure class="image is-64x64 has-margin-left-20">
              <img src="https://blog.dika.web.id/wp-content/uploads/2014/12/codeigniter.png">
            </figure>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

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
  }
};
</script>