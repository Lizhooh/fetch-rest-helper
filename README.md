
### fetch-rest-helper
fetch-rest-helper is a secondary routing tool used to define REST API.

### install

```bash
npm install --save fetch-rest-helper
```

Method | Path |	Route Function
:--- | :--- | :---
GET	 | /users | index
GET	 | /users/:id | show
POST | /users | create
PUT	 | /users/:id | update
DELETE | /users/:id | remove
GET	 | /users/:id/edit | edit
GET	 | /users/new | new

### usage

```js
const Helper = require('fetch-rest-helper');
const user = new Helper('/users', { host: 'http://127.0.0.1:3000' });

// GET http://127.0.0.1:3000/users
user.index().then(jsondata => console.log(jsondata));
// GET http://127.0.0.1:3000/users/:id
user.show(id);
// POST http://127.0.0.1:3000/users
user.create();
// PUT http://127.0.0.1:3000/users/:id
user.update(id);
// DELETE http://127.0.0.1:3000/users/:id
user.del(id);
// GET http://127.0.0.1:3000/users/:id/edit
user.edit(id);
// GET http://127.0.0.1:3000/users/new
user.new();

// GET http://127.0.0.1:3000/users?limit=20&offset=20
user.index({
    query: { limit: 20, offset: 20 },
    body: { name: 'abc' },
});
```

The json mode is used by default. When json is set to false, the fetch primitive is returned.

```js
const Helper = require('fetch-rest-helper');
const user = new Helper('/users', { host: 'http://127.0.0.1:3000', json: false });

user.index().then(res => res.text()).then(res => console.log(res));
```

### options
> Helper(prefix, options);

options:
- host: host address.
- json?: automatically convert to json data format.
- headers?: fetch http headers.

> user.index(id, options);

options:
- host?: host address.
- json?: automatically convert to json data format.
- headers?: http headers.
- body?: http body.
- query?: url query object.

