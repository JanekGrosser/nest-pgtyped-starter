/* @name GetBooksCount */
SELECT
    COUNT(id)::INT AS "count!"
FROM "books";

/* @name GetBooksPage */
SELECT
    b."id" AS "id!",
    b."rank" AS "rank",
    b."name" AS "name",
    b."author_id" AS "authorId",
    b."categories" AS "categories"
FROM "books" b
ORDER BY b."rank" DESC
OFFSET :skip::INT
LIMIT :take::INT;

/* @name GetAuthorById */
SELECT
	a."id" AS "id!",
	a."first_name" AS "firstName",
	a."last_name" AS "lastName"
FROM "authors" a
WHERE a."id" = :authorId::INT;
