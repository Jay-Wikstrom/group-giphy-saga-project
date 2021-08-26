

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);
-- Favorite table
CREATE TABLE "favorite" (
    "id" SERIAL PRIMARY KEY,
    "categoryid" INT REFERENCES "category",
    "url" VARCHAR (1000) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('animal'), ('sports'), ('cartoon'), ('meme');

DROP TABLE "category", "favorite";
