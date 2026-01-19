Область хранения данных:

-   база данных на json-server
-   BFF
-   редакс стор

Сущности приложения:

-   Пользователь: БД (весь список), BFF (сессия текущего), Redux Store (отображение в браузере)
-   Роль пользователя: БД (весь список), BFF (сессия текущего пользователя), Redux Store (отображение в браузере)
-   Статья: БД (весь список), Redux Store (отображение в браузере)
-   Комментарий: БД (весь список), Redux Store (отображение в браузере)

Таблица БД
Пользователи (users): id / login / password / registere_dat / role_id
Роли (roles): id / name  
 Статьи (posts): id / title / image_url / content / published_at
Комментарии (comments): id / author_id / post_id / content

-   Определить схему состояния на BFF.

    -   сессия текущего пользователя: login / password / role

-   Определить схему для Redux Store.
    -   user:/ id/ login / role_Id
    -   posts: массив post: id/ title/ image_Url/ publishedAt/ commentsCount
    -   post:/ id/ title/ imageUrl/ content/ publishedAt/ comments: массив comment: / id / author / content / publishedAt
    -   users: массив user:/ id/ login/ registeredAt/ role
