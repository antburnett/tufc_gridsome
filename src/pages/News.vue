<template>
  <Layout>
    <h1>News</h1>
    <article v-for="edge in $page.allArticle.edges" :key="edge.node.id">
      <div v-if="edge.node.cover_image">
        <g-image :src="edge.node.cover_image"></g-image>
      </div>
      <h2>{{ edge.node.title }}</h2>
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted {{ edge.node.date }} - {{ edge.node.timeToRead }} min read</p>
      <div>
        <g-link class="tag" v-for="tag in edge.node.tags" :key="tag.id" :to="tag.path">#{{ tag.id }}</g-link>
      </div>
      <g-link :to="edge.node.path">Read More</g-link>
    </article>
    <Pager :info="$page.allArticle.pageInfo" linkClass="pager" />
  </Layout>
</template>

<page-query>
 query ($page: Int) {
    allArticle (perPage: 5, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges{
        node{
          id
          title
          excerpt
          date (format: "MMMM Do, YYYY")
          tags {
            id
            path
          }
          timeToRead
          path
          cover_image (width: 1000, height: 300, fit:cover, quality: 50, blur: 100)
        }
      }
    }
  }
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  components: { Pager }
};
</script>
<style>
.tag {
  padding-right: 1rem;
}
article img {
  width: 100%;
}
article {
  margin-bottom: 2rem;
}
</style>
