# Cloudflare Pages Deployment

This project is a React/Next-style source project and should be deployed by building it first rather than uploading the source ZIP as static files.

## Recommended method: Git integration

1. Put this project in a GitHub repository.
2. In Cloudflare Dashboard, open **Workers & Pages**.
3. Create a Pages project and connect the GitHub repository.
4. Use the build settings appropriate to the framework used by this project.
5. Deploy.

## Important

Do not upload this source ZIP as a static folder expecting Cloudflare to find `index.html`. The source contains React/TSX files such as `app/page.tsx`, which need to be processed by the project's build system.

If your Cloudflare Pages setup is configured for a static output directory, use the project's generated build/output directory after running its build command. The exact directory depends on the framework and configuration.

## Quick local check

Install dependencies:

    npm install

Then run the project's build command:

    npm run build

If the build succeeds, deploy using the framework's documented output/deployment method.

