angular
  .module('editor')
  .service('Languages', function(Language) {

    let _languages;
    const _default = {
      name: undefined,
      icon() {
        return 'fa fa-language'
      }
    };

    this.get = () => {
      return _languages;
    }

    this.set = (languages = []) => {
      _languages = [_default, ...languages.map(Language.from)];
    }

    this.default = () => {
      return _default.name;
    }

    this.fromName = (name) => {
      return Language.from(_.find(this.get(), { name }));
    }

  });
