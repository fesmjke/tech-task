# Tech task project

## Stack

- TypeScript
- Node.js + Express.js + MongoDB
- Loggers - morgan + winston
- Test framework - jest
- Validation - joi
- Code style,and error checker - eslint

## Usage

Setup mongo database using Docker 
```
docker run --rm -p 27017:27017 --name mongo-db -d mongo
```

Download
```
git clone https://github.com/fesmjke/tech-task.git
```
Install dependencies
```
npm install
```
Build project
```
npm run build
```
Run application
```
npm run start
```

## Tasks 
1. Create routes 
2. User Schema / Interface
3. Pre-save User fields manipulations
4. Required fields
5. Validation
6. Logger
7. Tests
8. Docker
---

### Routes

List of created routes:
``` 
- GET /api/users
- GET /api/users/:id
- POST /api/users
- DELETE /api/users:id
```

Create new user using cURL

```
curl -X POST localhost:3000/api/users -H 'Content-Type: application/json' -d '{"firstName":"Andrew","lastName":"Barton","email":"b_andrew@gmail.com","homePhone":"1234567891","interests":["Buyer"]}'
```

Get all users 

```
curl localhost:3000/api/users
```

Get user by id

```
curl localhost:3000/api/users/custom_id
```

Delete user by id

```
curl -X DELETE localhost:3000/api/users/custom_id
```

---