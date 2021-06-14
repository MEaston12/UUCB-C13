# UUCB-C13

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Description

This project demonstrates capability in using the Sequelize package to create an Object Relational Model to interact with a database.  For a demonstration of the api in use, see the following video.

## Table of Contents

1. [Description](#description)
2. [Table of Contents](#table-of-contents)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [Testing](#testing)
7. [License](#license)
8. [Questions](#questions)

## Installation

`npm install`

Fill out .env in main folder with database login information:

```
DB_NAME=
DB_USER=
DB_PW=
```

Initialize the table in your database by running script in `./db/schema.sql`.

Use `npm run seed` to populate the database with sample data.

## Usage

`npm start`


## Testing

Testing is done using the Insomnia REST client which can be installed with `choco install insomnia-rest-api-client` if the user has Chocolatey set up, which they should because Chocolatey is great.

## License

The Unlicense

## Questions

If you have any additional questions, contact me at:  
Github: [MEaston12](https://github.com/MEaston12)  
Email: eastonmalcolm@gmail.com
