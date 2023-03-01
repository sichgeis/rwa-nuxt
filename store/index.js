import { FETCH_ARTICLES } from './action-types'
import { SET_ARTICLES } from './mutation-types'

export const state = () => ({
  articles: {},
})

export const getters = {
  favoritedArticles(state) {
    return state.articles.articles.filter((article) => article.favorited)
  },
  favoritedArticlesCount(_, getters) {
    return getters.favoritedArticles.length
  },
  articlesAboveFavoritesCount: (state) => (count) => {
    return state.articles.articles.find((article) => article.count > count)
  },
}

export const mutations = {
  [SET_ARTICLES](state, articles) {
    state.articles = articles
  },
}

export const actions = {
  async [FETCH_ARTICLES]({ commit }) {
    const articles = await this.$axios.$get(
      'https://api.realworld.io/api/articles'
    )
    commit(SET_ARTICLES, articles)
  },
}
