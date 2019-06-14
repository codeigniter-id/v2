<template>
  <Layout>
    <h1>Blog</h1>
    <hr>

    <div class="columns is-multiline">
      <div
        class="column is-6"
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      >
        <g-link class="nav__link" :to="edge.node.path">
          <h3 class="title is-4 has-margin-bottom-5">{{ edge.node.title }}</h3>
          <h5 class="title is-7 has-text-grey">{{ edge.node.author }}</h5>
        </g-link>
        <p class="has-text-grey-lighter" v-html="edge.node.description"></p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>


<page-query>

query Posts {
  posts: allPost (sortBy : "date"){
    edges {
      node { 
        id
        title
        author
        description
        content
        path
      }
    }
  }
}

</page-query>