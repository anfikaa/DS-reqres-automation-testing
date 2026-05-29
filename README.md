# Reqres API Automation Testing

API Automation Testing project for https://reqres.in using:

* Mocha
* Chai
* Supertest

## Test Scenarios

* GET User List
* POST Create User
* PATCH Update User
* DELETE User

## Installation

```bash id="2w2d9d"
npm install
```

## Run Automation Test

```bash id="4djlwm"
npm test
```

## Assertions

| Endpoint | Assertion         |
| -------- | ----------------- |
| GET      | Status code = 200 |
| POST     | Status code = 201 |
| PATCH    | Status code = 200 |
| DELETE   | Status code = 204 |

## Tech Stack

* Node.js
* Mocha
* Chai
* Supertest
