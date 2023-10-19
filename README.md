### Requirements
1. NodeJS
2. TypeScript
3. Docker

### Setup
1. **Clone the Repository**: Clone the repository to your local machine.  
2. **Set Up Docker**: Run `docker-compose up -d` to start the development and test databases. If the specified ports (`5433`, and `5434`) are already in use, feel free to adjust the `docker-compose.yml` file.  
   If you encounter any Docker-related issues, [refer to Docker documentation](https://docs.docker.com/).
3. **Install Dependencies**: Run `npm install` to install all required packages and libraries.  
4. **Run Migrations for Development Database**: Run `npm run prisma:migrate:dev` to apply the migrations to the development database. Hint: There might be one task to complete before it works.
5. **Start the Development Server**: Run `npm run dev` to start the development server.  

### Testing
1. **Ensure Test Database is Running**: Make sure the test database, started in Setup step 2, is running.
2. **Run Migrations for Test Database**: Run `npm run prisma:migrate:test` to apply the migrations to the test database. Hint: There might be one task to complete before it works.
3. **Run Tests**: Run `npm run test`.

### Tasks
Search for `TODO:` comments in the code to find tasks that need completion. There are X number of tasks, varying in complexity.  
**Hint**: Start with the tasks defined in `.env` and `.env.test`. These are foundational tasks that will help you in subsequent steps. 

### Submission Instructions
You can either:
1. Send us a .zip file of the completed challenge, or
2. Send us a link to a public repo containing the completed challenge, or
3. Send us a link to a private repo containing the completed challenge, making sure we have access to it.

**Important**: Do not create pull requests on the original repository for your submissions.  


