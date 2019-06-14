<template>
  <div class="columns is-multiline">
    <div class="column is-6" v-for="edge in $static.posts.edges" :key="edge.node.id">
      <div class="card has-equal-height is-marginless">
        <div class="card-content is-marginless is-paddingless">
          <div class="media has-margin-bottom-10">
            <div class="media-content">
              <p class="title is-4 has-margin-bottom-5">
                <g-link :to="edge.node.path">{{edge.node.title}}</g-link>
              </p>
              <p class="is-size-7 has-text-grey-light">{{edge.node.author}} // {{edge.node.date}}</p>
            </div>
          </div>

          <div class="content has-text-grey">{{edge.node.description}}</div>

          <span class="has-padding-top-15 is-size-7">
            <i class="fas fa-share"></i>
            Share:
          </span>

          <social-sharing :url="url+edge.node.path" inline-template>
            <div>
              <network network="facebook" class="button is-white is-marginless has-padding-left-5">
                <i class="fab fa-facebook"></i>
              </network>
              <network network="linkedin" class="button is-white">
                <i class="fab fa-linkedin"></i>
              </network>
              <network network="twitter" class="button is-white">
                <i class="fab fa-twitter"></i>
              </network>
              <network network="whatsapp" class="button is-white">
                <i class="fab fa-whatsapp"></i>
              </network>
              <network network="telegram" class="button is-white">
                <i class="fab fa-telegram"></i>
              </network>
            </div>
          </social-sharing>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      url: ""
    };
  },
  mounted() {
    this.url = window.location.origin + "/v2";
  }
};
</script>


<static-query>

query Posts {
  posts: allPost( filter: { published: { eq: true }}, sortBy: "date",  limit: 5, order: DESC)  {
    edges {
      node { 
        id
        author
        date
        title
        description
        content
        path
      }
    }
  }
}

</static-query>

<style lang="scss" scoped>
.card {
  border: none !important;
  box-shadow: none !important;
}
</style>
