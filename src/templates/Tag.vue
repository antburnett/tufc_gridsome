<template>
  <Layout>
    <h1>#{{ $page.tag.title }}</h1>
    <div class="grid">
      <article v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
        <g-image :src="edge.node.cover_image"></g-image>
        <h2>{{ edge.node.title }}</h2>
        <p>{{ edge.node.excerpt }}</p>
        <p class="posted">Posted {{ edge.node.date }} - {{ edge.node.timeToRead }} min read</p>
        <div>
          <g-link class="tag" v-for="tag in edge.node.tags" :key="tag.id" :to="tag.path">#{{ tag.id }}</g-link>
        </div>
        <g-link :to="edge.node.path">Read More</g-link>
      </article>
    </div>
  </Layout>
</template>

<page-query>
    query ($id: String){
        tag(id:$id){
          title
          belongsTo{
            edges{
              node{
                ... on Article{
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
                    cover_image (width: 250, height: 250, fit:cover, quality: 90, blur: 100)
                }
              }
            }
          }
        }
      }
</page-query>
<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
h2 {
  min-height: 5rem;
}
.posted {
  font-style: italic;
  color: silver;
}
</style>
