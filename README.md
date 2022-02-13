# User Directory

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Node/npm
- mongoDB

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/officialYogesh/node-user-directory.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start MongoDB server locally on your machine and update url in env file

### Usage

1. Start Node Server
   ```sh
   npm start
   ```
2. You can send Http Post request to below api:
   ```sh
   http://localhost:3000/auth/login
   ```

### Note

- Please see output folder for screenshots of test and demo

### Live Api

```sh
https://node-user-directory.herokuapp.com
```

##### 1. Generate JWT Token

- Login to get jwt token
- Please send Http Post request to below api to generate your JWT token
  ```sh
  https://node-user-directory.herokuapp.com/auth/login
  ```

##### 2. Append generated token to header

- Set new key in header as: "x-auth-token" and add token generated in above step as it's value.

##### 3. Now let's try to create one new user:

```sh
https://node-user-directory.herokuapp.com/auth/login
```

- Http method: Post
- Body Type: Json
- Body:

```sh
     {
         "name": "Yogesh S. Patil",
         "address": "Mumbai",
         "dob": "28-09-1998",
         "state": "Maharashtra"
     }
```

- Header: "x-auth-token" : "token value"

### Testing

- Please update Mongo DB uri in your envirement variable before running tests.
- Test Command:
  ```sh
  npm run test
  ```
- Please find screenshots of tests in Output folder
