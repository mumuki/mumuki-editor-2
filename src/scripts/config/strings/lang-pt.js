angular
  .module('editor')
  .constant('LANG_PT', {

    absolute_solution_directive: 'Solução de exercícios anteriores (referência absoluta)',
    accept: 'Aceitar',
    add_choice: 'Adicionar escolha',
    add_exercise: 'Adicionar exercício',
    add_expectation: 'Adicionar expectativa',
    add_smell: 'Ignorar o cheiro',
    appendix: 'Apêndice',
    authors: 'Autores',
    binding: 'Escopo',
    blockquote: 'Bloco de citação',
    book_saved_successfully: 'Livro salvo com sucesso',
    book: 'Livro',
    books: 'Livros',
    cancel: 'Cancelar',
    chapter: 'Capítulo',
    choices: 'Escolhas',
    code_smell: 'Code Smell',
    code_smells: 'Code Smells',
    code: 'Código',
    collaborators: 'Créditos',
    complements: 'Complementos',
    content_directive: 'Solução atual',
    content: 'Conteúdo',
    copy_guide_text: 'Selecione a organização para copiar o guia',
    copy_guide: 'Copie o guia para ...',
    corollary: 'Corolário',
    default_content: 'Código padrão',
    description: 'Descrição',
    details: 'Ver detalhes',
    editor_type: 'Tipo de editor',
    editor: 'editor',
    english: 'Inglês (Reino Unido)',
    error_choices_empty_validation: '{{fullName}}: deve ter pelo menos duas opções',
    error_choices_incomplete_validation: '{{fullName}}: Tem escolhas incompletas',
    error_editor_code_validation: '{{fullName}}: deve ter pelo menos um teste, uma expectativa ou avaliação deve ser manual',
    error_editor_hidden_validation: '{{fullName}}: deve ter corolário e pelo menos um teste',
    error_editor_multiple_choice_validation: '{{fullName}}: deve ter pelo menos uma escolha selecionada',
    error_editor_single_choice_validation_no_selected: '{{fullName}}: Não deve ter escolhas selecionadas',
    error_editor_single_choice_validation_only_one: '{{nome completo}}: deve ter apenas uma escolha selecionada',
    error_expectations_incomplete_validation: '{{fullName}}: Tem expectativas incompletas',
    error_mandatory_field: '{{fullName}}: Campo {{campo}} é obrigatório',
    error_queriable_language_validation: '{{exercise}}: Language {{language}} não suporta exercícios do campo de jogos',
    error_triable_language_validation: '{{exercise}}: Language {{language}} não suporta exercícios interativos',
    errored: 'Ops, sua solução não funciona',
    evaluation: 'Avaliação',
    exercise_done: 'Todos os nossos testes foram aprovados!',
    exercise_type: 'Tipo de exercício',
    exercise: 'Exercício',
    expectation: 'Expectativa',
    expectations: 'Expectativas',
    extra_code: 'Código extra',
    extra_directive: 'Código extra',
    extra_visible: 'Mostrar código extra',
    extra: 'Código extra',
    failed: 'Opa, algo deu errado',
    goal_last_query_equals: 'A última consulta é igual a ...',
    goal_last_query_fails: 'A última consulta falha',
    goal_last_query_matches: 'A última consulta combina ...',
    goal_last_query_outputs: 'Últimas saídas de consulta ...',
    goal_last_query_output_includes: 'O último resultado da consulta inclui ...',
    goal_last_query_output_like: 'Última saída da consulta como ...',
    goal_last_query_passes: 'A última consulta passa',
    goal_placeholder_kind: 'Escolha o tipo de objetivo',
    goal_placeholder_output: 'Saída esperada',
    goal_placeholder_query: 'Consulta esperada',
    goal_placeholder_regexp: 'Expressão regular',
    goal_placeholder_value: 'Valor esperado',
    goal_query_fails: 'A consulta falha',
    goal_query_outputs: 'Saídas de consulta ...',
    goal_query_passes: 'Passagem de consulta',
    goal: 'Objetivo',
    guide_already_exists: 'O guia {{fullName}} já existe',
    guide_fork_fails: 'Algo errado acontece ao copiar',
    guide_forked_successfully: 'Guia {{fullName}} copiado com sucesso',
    guide_saved_successfully: 'Guia salvo com sucesso',
    guide_type: 'Tipo de guia',
    guide: 'Guia',
    guides: 'Guias',
    here: 'Aqui',
    hidden: 'Escondido',
    hint: 'Dica',
    ignore_content_directive: 'Ignorar conteúdo na consulta',
    ignored_code_smells: 'Obo de código ignorado',
    import_guide_from_github: 'Insira a organização e o repositório do github para importar o guia',
    import: 'Importar',
    insert_interpolation: 'Inserir interpolação',
    inspection: 'Inspeção',
    inspections: 'Inspeções',
    interactive: 'Interativo',
    item: 'Item',
    language: 'Língua',
    layout: 'Layout do editor',
    learning: 'Aprendendo',
    leave_current_item_with_changes: 'Você tem certeza? todas as mudanças serão perdidas',
    lesson: 'Lição',
    license_disclaimer: 'Este guia será publicado em <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">Creative Commons Attribution-ShareAlike 4.0 International Public License</a>.To learn more about Creative Commons Licenses visit <a href="https://creativecommons.org/share-your-work">https://creativecommons.org/share-your-work</a>.',
    link: 'Ligação',
    locale: 'Localidade',
    login: 'Entrar',
    logout: 'Sair',
    manual_evaluation: 'Avaliação manual',
    multiple_choice: 'Múltipla escolha',
    name: 'Nome',
    negated: 'Negado',
    new_book: 'Livro novo',
    new_exercise: 'Novo exercício',
    new_guide: 'Novo guia',
    new_topic: 'Novo topico',
    no: 'Não',
    object: 'Objeto',
    organization: 'Organização',
    passed_with_warnings: 'Funcionou, mas você pode fazer melhor',
    passed: 'Tudo bem',
    placeholder_add_chapter: 'Adicionar capítulo',
    placeholder_add_complement: 'Adicionar complemento',
    placeholder_add_lesson: 'Adicionar aula',
    placeholder_appendix: '... Insira o apêndice ...',
    placeholder_authors: '...Nome completo...',
    placeholder_book_name: '... Nome do livro ...',
    placeholder_collaborators: '... Digite créditos ...',
    placeholder_corollary: '... Entre corolário ...',
    placeholder_default_content: '... Digite o conteúdo padrão ...',
    placeholder_description: '... Digite a descrição ...',
    placeholder_exercise_name: '... Nome do exercício ...',
    placeholder_extra_code: '... Digite o código extra ...',
    placeholder_goal: '... Digite o objetivo ...',
    placeholder_guide_name: '... Nome do guia ...',
    placeholder_hint: '... Digite sugestão ...',
    placeholder_solution: '... Digite a solução para testar ...',
    placeholder_teacher_info: '... Insira a informação do professor ...',
    placeholder_test: '... Digite testes ...',
    placeholder_topic_name: '...Nome do tópico...',
    placeholder_undefined: '',
    playground: 'Parque infantil',
    portuguese: 'Português (Br)',
    practice: 'Prática',
    previous_solution_directive: 'Solução anterior',
    problem: 'Problema',
    reading: 'Leitura',
    relative_solution_directive: 'Solução de exercícios anteriores (referência relativa)',
    remove: 'Remover',
    repository: 'Repositório',
    save: 'Salve ',
    saving: 'Salvando ...',
    search: 'Pesquisa',
    single_choice: 'Escolha única',
    solution: 'Solução',
    spanish: 'Espanhol (Arg)',
    subject: 'Sujeito',
    submit: 'Enviar',
    target: 'Sujeito',
    teacher_info: 'Informação do professor',
    test_directive: 'Testes',
    test_results: 'Resultados dos testes',
    test_template_group_description: 'Descrição do grupo',
    test_template_sample_description: 'Descrição da amostra',
    test_template_suite_description: 'Descrição da Suite',
    test: 'Testes',
    text: 'Texto',
    tooltip_bold: 'Negrito (ctrl + b)',
    tooltip_code: 'Código',
    tooltip_emojis: 'Emojis',
    tooltip_image: 'Imagem',
    tooltip_inline_code: 'Código Inline',
    tooltip_italic: 'Itálico (ctrl + i)',
    tooltip_link: 'Link (ctrl + k)',
    tooltip_mumuki: 'Mumuki (ctrl + m)',
    tooltip_ol: 'Lista ordenada',
    tooltip_quote: 'Citar',
    tooltip_ul: 'Lista não ordenada',
    topic_saved_successfully: 'Tópico salvo com sucesso',
    topic: 'Tema',
    topics: 'Tópicos',
    transitive: 'Transitivo',
    type: 'Tipo',
    unmeet_expectations: 'Objetivos que não foram atendidos',
    upload_image_failed: 'Você não selecionou nenhuma imagem ou excedeu 256 KB',
    upload_image_placeholder: 'Inserir URL da imagem',
    upload_text: 'Selecione uma imagem do seu computador clicando',
    upload_text_note: '* Lembre-se: o tamanho da imagem deve ser inferior a 256 KB.',
    upload: 'Subir arquivo',
    verb: 'Verbo',
    yes: 'sim'

  });
