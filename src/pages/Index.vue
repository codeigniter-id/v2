<template>
  <Layout>
    <div class="columns">
      <div class="column is-6">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->

        <h1 class="title is-1 has-margin-bottom-30">Codeigniter Indonesia</h1>

        <p
          class="subtitle is-6"
        >CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications.</p>

        <div class="buttons">
          <a
            href="https://github.com/bcit-ci/CodeIgniter/archive/3.1.10.zip"
            class="button is-info"
          >
            <span class="icon">
              <font-awesome :icon="download"/>
            </span>
            <span>Codeigniter Terbaru</span>
          </a>

          <a class="button is-primary" href="https://www.codeigniter.com/docs" target="_blank">
            <span>Dokumentasi</span>
          </a>
        </div>

        <h1 class="title is-4 has-margin-bottom-10">Contributors</h1> 
        <Contributors/>
      </div>
      <div class="column is-6">
        <github-feed login="codeigniter-id"></github-feed>
      </div>
    </div>
  </Layout>
</template>

<script>
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Contributors from "~/components/Contributors.vue";
export default {
  data() {
    return {
      download: faDownload
    };
  },
  metaInfo: {
    title: "Codeigniter Indonesia Community",
    siteName: ""
  },
  components:{
    Contributors
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
