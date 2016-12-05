angular
  .module('editor')
  .service('Api', function ($http,
                            Auth,
                            Guide,
                            Book,
                            CONFIG) {

    const API = CONFIG.bibliotheca.url;
    const HTTP = Promise.resolve($http);

    const defaultConfig = (requestOptions = {}) => _.defaultsDeep(requestOptions, {
      headers: { Authorization: `Bearer ${Auth.token()}` }
    })

    this.getGuides = () => {
      return HTTP
        .call('get',`${API}/guides/writable`, defaultConfig())
        .then((res) => res.data.guides)
        .map((guide) => Guide.from(guide));
    };

    this.getAllTopics = () => {
      return HTTP
        .call('get',`${API}/topics`, defaultConfig())
        .then((res) => res.data.topics);
    };

    this.getBooks = () => {
      return HTTP
        .call('get',`${API}/books/writable`, defaultConfig())
        .then((res) => res.data.books)
        .map((book) => Book.from(book));
    };

    this.getGuide = ({ org, repo }) => {
      return HTTP
        .call('get',`${API}/guides/${org}/${repo}`, defaultConfig())
        .then((res) => Guide.from(res.data));
    };

    this.getBook = ({ org, repo }) => {
      return HTTP
        .call('get',`${API}/books/${org}/${repo}`, defaultConfig())
        .then((res) => Book.from(res.data));
    };

    this.getTopic = ({ org, repo }) => {
      return HTTP
        .call('get',`${API}/topics/${org}/${repo}`, defaultConfig())
        .then((res) => res.data);
    };

    this.saveGuide = (guide) => {
      return HTTP
        .call('post',`${API}/guides`, guide, defaultConfig());
    }

    this.saveBook = (book) => {
      return HTTP
        .call('post',`${API}/books`, book, defaultConfig());
    }

    this.getLanguages = () => {
      return HTTP
        .call('get',`${API}/languages`, defaultConfig())
        .then((res) => res.data.languages);
    };

    this.renderMarkdown = (markdown) => {
      return HTTP
        .call('post',`${API}/markdown`, { markdown }, defaultConfig())
        .then((res) => res.data.markdown);
    };

  });
