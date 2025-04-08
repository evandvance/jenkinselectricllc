# Jenkins Electric LLC Website

## Developers

To run the site run `npm run dev:docker`
This command will generate the docker images and create
the structure required for the website to operate.
The command is dependent on a .env file that has the
Environment Variables listed below.

To connect to the website goto: http://localhost:${NEXT_PORT}

### Environment Variables

- POSTGRES_PASSWORD - The password to your local postgres container/server
- DATABASE_PORT - If youre using the docker compose, this is to tell docker what host port to map the database connection to
- NEXT_PORT - The port next_js is running on (3000 by default)
- DATABASE_URL - the database_url for your dev database
- AWS_PUBLIC_KEY - The public key for the AWS IAM user
- AWS_SECRET_KEY - The secret key for the AWS IAM user
- NEXTAUTH_URL - The URL for nextauth
- NEXTAUTH_SECRET - The random bits for signing for next auth (generate with openssl rand -base64 32)
