<ID int, timestamp int, migrationName varchar>

-- Get me the last migration ran on the system
SELECT * FROM "migrations" ORDER BY "timestamp" DESC LIMIT 1;