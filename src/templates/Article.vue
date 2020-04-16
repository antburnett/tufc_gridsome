<template>
  <Layout>
    <h1>{{ $page.article.title }}</h1>
    <div v-html="$page.article.content"></div>
    <vue-disqus shortname="turramurraunited" :identifier="$page.article.id"></vue-disqus>
  </Layout>
</template>

<page-query>
    query($path: String!) {
        article(path: $path) {
            id
            title
            content
        }
    }
</page-query>
