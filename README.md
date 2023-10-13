### Requirements
1. NodeJS
2. TypeScript
3. Docker

### Setup
1. For the repository, and clone it to your local machine.
2. Run `docker-compose up -d` to start development and tests databases. Feel free to adjust the `docker-compose.yml` file to your needs if the specified ports (`5433`, and `5434`) are already in use.
3. Run `npm install` to install all the dependencies.
4. Run `npm run prisma:migrate:dev` to apply the migrations to the development database.
5. Run `npm run dev` to start the development server.

### Testing
1. Make sure you have the test database running (see Setup#2).
2. Run `npm run prisma:migrate:test` to apply the migrations to the test database.
3. Run `npm run test` to run the tests.

### Tasks
Search for `TODO:` in the code to find the tasks that need to be completed.
Start from the ones defined in `.env` and `.env.test`

### Submission Instructions
1. **Clone the Repository**: Clone this repository to your local machine.
2. **Create New Repository**: Create a new repository on GitHub and push your changes there.
3. **Collaborator Invitation**:
   - **If your repository is public**, simply share the repository URL with us.
   - **If your repository is private**, please invite us as a collaborator to grant access for review.

**Important**: Do not create pull requests on the original repository for your submissions.