<template>
  <div class="columns is-multiline">
    <div class="column is-6" v-for="member in members" :key="member.id">
      <article class="box media">
        <div class="media-left">
          <figure class="image is-64x64 ">
            <img class="is-rounded" :src="member.avatar_url" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ member.login }}</strong>
              <br>
              <small>
                <a :href="member.html_url">
                  <font-awesome :icon="github"/> &nbsp;github
                </a>
              </small>
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" aria-label="reply">
                <span class="icon is-small">
                  <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="retweet">
                <span class="icon is-small">
                  <i class="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="like">
                <span class="icon is-small">
                  <i class="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
</template>


<script>
import {
  faTelegram,
  faGithub,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

import axios from "axios";

export default {
  data() {
    return {
      members: null,
      github: faGithub
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/orgs/codeigniter-id/members")
      .then(response => (this.members = response.data));
  }
};
</script>
