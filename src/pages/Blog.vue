<template>
  <Layout>
    <h1>Blog</h1>
    <hr>

    <div class v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node">
      <g-link class="nav__link" :to="edge.node.path">
        <h3 class="title is-4">{{ edge.node.title }}</h3>
      </g-link>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>


<page-query>

query Posts {
  posts: allPost {
    edges {
      node { 
        id
        title
        content
        path
      }
    }
  }
}

</page-query>