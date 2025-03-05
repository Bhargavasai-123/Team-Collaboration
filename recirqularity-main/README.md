# Recirqularity

This is a Next.js project.

## Environment Variables

The following environment variables are used in this project:

- `PROJECTID`: The project ID for container name.
- `HOST_PORT`: The port on which the server will run.
- `RESEND_API_KEY`: The API key for the email service.
- `RESEND_TO_EMAIL`: The email address to which the emails will be sent.

Make sure to create a `.env` file in the root of your project and add these keys with appropriate values.

Example `.env` file:

```env
PROJECTID=recirqularity
HOST_PORT=80
RESEND_API_KEY=
RESEND_TO_EMAIL=
```

### Local Development

To run the project locally using Docker Compose, use the following command:

```bash
docker-compose up
```

This will start the development server on [http://localhost](http://localhost).

### Production

For production, use the `docker-compose.prod.yml` file:

```bash
docker-compose -f docker-compose.prod.yml up
```

This will start the production server.

