# Twitter Clone

Experimenting with [Dolt](https://www.dolthub.com/) a version controlled database.

## Links

- [original hacker news post](https://news.ycombinator.com/item?id=22731928)
- [twitter-db dolt repo](https://www.dolthub.com/repositories/buwilliams/twitter-db)

## Getting Started

- Install dolt `sudo curl -L https://github.com/dolthub/dolt/releases/latest/download/install.sh | sudo bash`
- Clone dolt repo `dolt clone buwilliams/twitter-db`
- Start mysql server `dolt sql-server`
- Clone twitter-clone repo `https://github.com/buwilliams/twitter-clone.git`
- Install deps `yarn install`
- Start express server `yarn run dev:server`

## Why do I find dolt interesting?

- Managing SQL databases is always a pain. Dolt provides a better UX.
- Therefore, prototyping ideas becomes easier, especially since Dolt supports CSV import. This allows me to gradually add features to the database.
- For smaller projects, performance isn't the most important thing.
- I love the idea that I have access to many data sources through Dolt's dolthub.