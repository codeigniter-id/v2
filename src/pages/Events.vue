<template>
  <Layout>
    <div>
      <h1 class="title is-4">Event</h1>

      <div class="columns is-multiline">
        <div
          class="column is-4"
          v-for="edge in $page.events.edges"
          :key="edge.node.id"
          :post="edge.node"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-3by4">
                <img :src="edge.node.cover_image" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">
                    <g-link class :to="edge.node.path">{{ edge.node.title }}</g-link>
                  </p>
                  <p class="subtitle is-6">{{ edge.node.author }}</p>
                </div>
              </div>

              <div class="content">
                <p class="has-text-grey-lighter" v-html="edge.node.description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<script>
export default {};
</script>




<page-query>

query Events {
  events: allPost (filter: {category: { eq:"event"} ,published: {eq:true}}sortBy : "date"){
    edges {
      node { 
        id
        title
        author
        description
        cover_image
        path
      }
    }
  }
}

</page-query>
