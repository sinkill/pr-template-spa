# Program Code Project Template
**Шаблон проекта для быстрого старта SPA.**

## Старт проекта

* Склонируй репозиторий и перейди в папку проекта:

```
git clone git@github.com:sinkill/pr-project-template.git new-project && cd new-project
```

* Установи модули:

```
npm i
```

* Запусти шаблон:

```
npm start
```

* Открой в браузере [`http://localhost:3000/`](http://localhost:3000/).

## Команды для запуска с Gulp.js

* Запуск с отслеживанием изменений:

```
npm start
```

* Сборка в папку `dist`:

```
npm run build
```

* Сборка в папку `dist` с добавлением файла `robots.txt` для запрета индексации:

```
npm start --robots
```

* Локальный сервер на другом порте:

```
npm start --port=9000
```

* Собирать скрипты и стили без минификации:

```
npm start --debug
```

* Воспроизводить звук при ошибках:

```
npm start --beep
```

* Расшарить локальный сервер:

```
npm start --tunnel
```

* Открыть ссылку в браузере по умолчанию:

```
npm start --open
```

* Собрать архив из папки `dist`:

```
npm run zip
```

* Деплой всего содержимого папки `dist` в ветку `dist`:

```
npm run deploy
```

## Структура папок и файлов

```
├── app/                         # Исходники
│   ├── blocks/                  # Блоки
│   │   └── block/               # Блок
│   │       ├── block.jade       # Разметка блока
│   │       └── block.styl       # Стили блока
│   ├── data/                    # Данные в формате JSON
│   ├── pages/                   # Страницы
│   │   └── index.jade           # Разметка страницы
│   ├── icons/                   # SVG иконки для генерации векторного спрайта
│   ├── sprite/                  # PNG иконки для генерации растрового спрайта
│   ├── resources/               # Статические файлы для копирования в public
│   ├── scripts/                 # Скрипты
│   │   └── application.js       # Главный скрипт приложения 
│   ├── styles/                  # Стили
│   │    ├── base/               # Базовые стили
│   │    │   ├── base.styl       # Базовый стилевой файл
│   │    │   ├── fonts.styl      # Подключение шрифтов
│   │    │   └── optimize.styl   # Сброс стилей и фиксы
│   │    ├── helpers/            # Помощники
│   │    │   ├── mixins.styl     # Примеси
│   │    │   ├── sprite.styl     # Переменные с данными PNG спрайта (автогенерация)
│   │    │   ├── svg.styl        # Переменные с данными SVG иконок (автогенерация)
│   │    │   └── variables.styl  # Переменные
│   │    ├── base.styl           # Главный базовый стилевой файл
│   │    └── common.styl         # Главный стилевой файл
│   └── views/                   # Шаблоны подключаемые через ng-view 
│        └── view/               # Шаблон
│            ├── view.jade       # Разметка шаблона
│            └── view.js         # Скрипт шаблона
├── public/                      # Сборка (автогенерация)
│   ├── build/                   # Конкатенация скриптов и стилей
│   ├── fonts/                   # Шрифты
│   ├── images/                  # Изображения
│   ├── scripts/                 # Скрипты
│   ├── styles/                  # Стили + стили из bower_components 
│   ├── vendors/                 # Скрипты из bower_components
│   ├── views/                   # Шаблоны
│   └── index.html               # Страница
├── gulp/                        # Подключаемые скрипты для gulpfile.coffee
│   ├── helpers/                 # Хелперы
│   ├── tasks/                   # Скрипты с задачами для Gulp.js
│   └── config.js                # Список путей для генерации файлов
├── .bowerrc                     # Путь к папки в которую будут загружаться bower модули
├── .csscomb.json                # Конфигурация форматирования CSS
├── .editorconfig                # Конфигурация настроек редактора кода
├── .eslintrc                    # Конфигурация проверки JavaScript в ESLint
├── .gitignore                   # Список исключённых файлов из Git
├── bower.json                   # Bower модули
├── browserlist                  # Список версий браузеров для Autoprefixer
├── gulpfile.js                  # Файл для запуска Gulp.js
├── package.json                 # Список модулей и прочей информации
└── readme.md                    # Документация шаблона
```
