<template>
  <Layout>
    <h1>Products</h1>
    <div class="grid">
      <div v-for="edge in $page.allContentfulProduct.edges" :key="edge.node.id">
        <h2>{{ edge.node.name }}</h2>
        <button
          class="snipcart-add-item cart-button"
          :data-item-id="edge.node.id"
          :data-item-name="edge.node.name"
          :data-item-image="edge.node.image.file.url"
          :data-item-price="edge.node.price"
          :data-item-url="edge.node.id"
        >Buy for A${{ edge.node.price }}</button>

        <g-image
          :src="edge.node.image.file.url"
          style="width:100%; height: 300px;object-fit:cover;"
          :alt="edge.node.image.title"
        />
        <p>{{ edge.node.description }}</p>
      </div>
    </div>
    <Pager :info="$page.allContentfulProduct.pageInfo" linkClass="pager" />
  </Layout>
</template>

<page-query>
    query($page: Int) {
    allContentfulProduct(perPage: 2, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          name
          price
          description
          image {
            title
            file {
              url
              fileName
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: { Pager },
  metaInfo: {
    title: "Products",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "author",
        content: " Turramurra United Football Club"
      },
      { name: "description", content: "Discover our range of merchandise" },
      {
        name: "keywords",
        content: "Football, Bannockburn Rovers, Pymble, Wahroonga"
      }
    ]
  }
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
.cart-button {
  background: forestgreen;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 8px 16px;
  margin-bottom: 10px;
  text-decoration: none;
  font-size: 1rem;
}
</style>
