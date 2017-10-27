angular
  .module('editor')
  .constant('LANG_ES', {

    absolute_solution_directive: 'Solución de ejercicio anterior (referencia absoluta)',
    accept: 'Aceptar',
    add_choice: 'Agregar opción',
    add_exercise: 'Agregar ejercicio',
    add_expectation: 'Agregar expectativa',
    add_smell: 'Ignorar mala práctica',
    appendix: 'Apéndice',
    authors: 'Autores',
    binding: 'Contexto',
    blockquote: 'Cita',
    book: 'Libro',
    book_saved_successfully: 'Libro guardado satisfactoriamente',
    books: 'Libros',
    cancel: 'Cancelar',
    chapter: 'Capítulo',
    choices: 'Opciones',
    code: 'Código',
    code_smell: 'Mala Práctica',
    code_smells: 'Malas Prácticas',
    collaborators: 'Créditos',
    complements: 'Complementos',
    content: 'Contenido',
    content_directive: 'Solución actual',
    corollary: 'Corolario',
    default_content: 'Código por defecto',
    description: 'Descripción',
    details: 'Ver detalles',
    editor: 'Editor',
    editor_type: 'Tipo de editor',
    english: 'Inglés (UK)',
    error_choices_empty_validation: '{{fullName}}: Tiene que ofrecer al menos dos opción',
    error_choices_incomplete_validation: '{{fullName}}: Tiene opción incompletas',
    error_editor_code_validation: '{{fullName}}: Debe tener al menos una prueba, una expectativa o su evaluación debe ser manual',
    error_editor_hidden_validation: '{{fullName}}: Debe tener corolario y al menos una prueba',
    error_editor_multiple_choice_validation: '{{fullName}}: Debe seleccionar al menos una opción',
    error_editor_single_choice_validation_no_selected: '{{fullName}}: No debe seleccionar ninguna opción',
    error_editor_single_choice_validation_only_one: '{{fullName}}: Debe seleccionar solamente una opción',
    error_expectations_incomplete_validation: '{{fullName}}: Tiene expectativas incompletas',
    error_mandatory_field: '{{fullName}}: El campo "{{ field }}" no puede estar vacío',
    error_queriable_language_validation: '{{ exercise }}: El lenguage "{{ language }}" no soporta ejercicios de tipo juego',
    error_triable_language_validation: '{{ exercise }}: El lenguage "{{ language }}" no soporta ejercicios interactivos',
    errored: 'Ups, tu solución no funcionó',
    evaluation: 'Evaluación',
    exercise: 'Ejercicio',
    exercise_done: '¡Tu solución pasó todas nuestras pruebas!',
    exercise_type: 'Tipo de ejercicio',
    expectation: 'Expectativa',
    expectations: 'Expectativas',
    extra: 'Código extra',
    extra_code: 'Código extra',
    extra_directive: 'Código extra',
    extra_visible: 'Mostrar código extra',
    failed: 'Ups, algo no anduvo bien',
    goal: 'Objetivo',
    goal_last_query_equals: 'La última consulta es igual a...',
    goal_last_query_fails: 'La última consulta es inválida',
    goal_last_query_matches: 'La última consulta es encaja con...',
    goal_last_query_outputs: 'La última consulta devuelve...',
    goal_last_query_passes: 'La última consulta es válida',
    goal_placeholder_kind: 'Elija el tipo del objetivo',
    goal_placeholder_output: 'Resultado esperado',
    goal_placeholder_query: 'Consulta ingresada esperada',
    goal_placeholder_regexp: 'Expresión regular',
    goal_placeholder_value: 'Valor ingresado esperado',
    goal_query_fails: 'La consulta es inválida',
    goal_query_outputs: 'La consulta devuelve...',
    goal_query_passes: 'La consulta es válida',
    guide: 'Guía',
    guide_saved_successfully: 'Guía guardada satisfactoriamente',
    guide_type: 'Tipo de guía',
    guides: 'Guías',
    here: 'acá',
    hidden: 'Oculto',
    hint: 'Pista',
    ignore_content_directive: 'Ignorar solución en la consola',
    ignored_code_smells: 'Malas prácticas ignoradas',
    import: 'Importar',
    import_guide_from_github: 'Ingresá la organización y el repositorio para importar la guía',
    insert_interpolation: 'Insertar interpolación',
    inspection: 'Inspección',
    inspections: 'Inspecciones',
    interactive: 'Interactivo',
    item: 'Item',
    language: 'Lenguaje',
    layout: 'Disposición del editor',
    learning: 'Aprendizaje',
    leave_current_item_with_changes: 'Tenés cambios sin publicar, que se perderán si abandonás esta pantalla. ¿Querés continuar?',
    lesson: 'Lección',
    license_disclaimer: 'Esta guía será publicada bajo los términos de la <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">Licencia Creative Commons Compartir-Igual, 4.0</a>. Para aprender más sobre las Licencias Creative Commons visitá <a href="https://creativecommons.org/share-your-work">https://creativecommons.org/share-your-work</a>.',
    link: 'Link',
    locale: 'Idioma',
    login: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    manual_evaluation: 'Evaluación Manual',
    multiple_choice: 'Selección múltiple',
    name: 'Nombre',
    negated: 'Negado',
    new_book: 'Nuevo libro',
    new_exercise: 'Nuevo ejercicio',
    new_guide: 'Nueva guía',
    new_topic: 'Nuevo Tema',
    no: 'No',
    object: 'Objeto',
    organization: 'Organización',
    passed: 'Todo en orden',
    passed_with_warnings: 'Funcionó, pero hay cosas para mejorar',
    placeholder_add_chapter: 'Agregar capítulo',
    placeholder_add_complement: 'Agregar complemento',
    placeholder_add_lesson: 'Agregar lección',
    placeholder_appendix: '...Ingrese el apéndice...',
    placeholder_authors: '...Ingrese los autores...',
    placeholder_book_name: '...Nombre del libro...',
    placeholder_collaborators: '...Ingrese los créditos...',
    placeholder_corollary: '...Ingrese el corolario...',
    placeholder_default_content: '...Ingrese el código por defecto...',
    placeholder_description: '...Ingrese la descripción...',
    placeholder_exercise_name: '...Nombre del ejercicio...',
    placeholder_extra_code: '...Ingrese el código extra...',
    placeholder_goal: '...Ingrese el objetivo...',
    placeholder_guide_name: '...Nombre de la guía...',
    placeholder_hint: '...Ingrese la pista...',
    placeholder_solution: '...Ingrese la solución a probar...',
    placeholder_teacher_info: '...Ingrese la información del docente...',
    placeholder_test: '...Ingrese las pruebas...',
    placeholder_topic_name: '...Nombre del tema...',
    placeholder_undefined: '',
    playground: 'Juego',
    practice: 'Práctica',
    previous_solution_directive: 'Solucion del ejericio anterior',
    problem: 'Problema',
    reading: 'Lectura',
    relative_solution_directive: 'Solución de ejercicio anterior (referencia relativa)',
    remove: 'Remover',
    repository: 'Repositorio',
    save: 'Guardar',
    saving: 'Guardando...',
    search: 'Buscar',
    single_choice: 'Selección única',
    solution: 'Solución',
    spanish: 'Español (Arg)',
    subject: 'Sujeto',
    submit: 'Enviar',
    target: 'Sujeto',
    teacher_info: 'Información del docente',
    test: 'Pruebas',
    test_directive: 'Pruebas',
    test_results: 'Resultado de las pruebas',
    test_template_group_description: 'Descripción del grupo',
    test_template_sample_description: 'Descripción del ejemplo',
    test_template_suite_description: 'Descripción de la suite',
    text: 'Texto',
    tooltip_bold: 'Negrita (ctrl+b)',
    tooltip_code: 'Código',
    tooltip_emojis: 'Emoticones',
    tooltip_image: 'Imagen',
    tooltip_inline_code: 'Código en línea',
    tooltip_italic: 'Cursiva (ctrl+i)',
    tooltip_link: 'Link (ctrl+k)',
    tooltip_mumuki: 'Mumuki (ctrl+m)',
    tooltip_ol: 'Lista ordenada',
    tooltip_quote: 'Cita',
    tooltip_ul: 'Lista desordenada',
    topic: 'Tema',
    topic_saved_successfully: 'Tema guardado satisfactoriamente',
    topics: 'Temas',
    transitive: 'Transitivo',
    type: 'Tipo',
    unmeet_expectations: 'Objetivos que no se cumplieron',
    upload: 'Subir archivo',
    upload_image_failed: 'No seleccionaste ninguna imágen o la misma supera los 256 KB',
    upload_image_placeholder: 'Insertá la URL de una imagen',
    upload_text: 'Buscá una imagen en tu computadora haciendo click',
    upload_text_note: '* Recordá que no puede superar los 256 KB.',
    verb: 'Verbo',
    yes: 'Sí',

  });
