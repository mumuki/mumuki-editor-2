angular
  .module('editor')
  .factory('Exercise', function(CurrentGuide,
                                Layouts,
                                Editor) {

    class Exercise {

      constructor(exercise) {
        _.defaultsDeep(this, exercise);
      }

      guide() {
        return CurrentGuide.get();
      }

      icon() {
        return `da-${this.getLanguage()}`;
      }

      getLanguage() {
        return this.language || this.guide().language;
      }

      getLayout() {
        return Layouts.from(this.layout);
      }

      getEditor() {
        return Editor.from(this.editor);
      }

      setLanguage(language) {
        this.language = language;
        if (this.language === this.guide().language) {
          delete this.language;
        }
      }

      setEditor(editor) {
        this.editor = editor;
      }

      number() {
        return _.indexOf(this.guide().exercises, this) + 1;
      }

      toggleLayout() {
        this.layout = this.getLayout().next().type();
      }

      static from(exercise = {}) {
        return new Exercise(exercise);
      }

    }

    return Exercise;

  });
