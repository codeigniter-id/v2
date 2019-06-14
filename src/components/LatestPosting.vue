<template>
  <div>
    <div class="card has-margin-bottom-10" v-for="edge in $static.posts.edges" :key="edge.node.id">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4 has-margin-bottom-5">
              <g-link :to="edge.node.path">{{edge.node.title}}</g-link>
            </p>
            <p class="is-size-7 has-text-weight-bold has-text-grey-light">{{edge.node.date}}</p>
          </div>
        </div>

        <div class="content">{{edge.node.description}}</div>
        <social-sharing :url="edge.node.path" inline-template>
          <div>
            <network network="facebook" class="has-margin-right-20">
              <i class="fab fa-facebook"></i> Facebook
            </network>
            <network network="linkedin">
              <i class="fab fa-linkedin"></i> LinkedIn
            </network>
            <network network="twitter">
              <i class="fab  fa-twitter"></i> Twitter
            </network>
            <network network="whatsapp">
              <i class="fab fa-whatsapp"></i> Whatsapp
            </network>
          </div>
        </social-sharing>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<static-query>

query Posts {
  posts: allPost(sortBy: "date",  limit: 5, order: DESC)  {
    edges {
      node { 
        id
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