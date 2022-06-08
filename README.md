# Overview

The daopanel web application.

# Tech Stack

Implemented on top of TypeScript, React, and Next.

With special thanks to the authors of:

- next-auth
- styled-components

# Documentation

We make extensive use of README.md files colocated in the same directory as the
source files they document. Ideally our READMEs contain mostly references to
official documentation with additional details and/or
peculiarities about our specific implementation. In addition to references to
official documentation, our READMEs should be heavily interlinked for easy
navigation. A developer should be able to start in a directory and navigate from
README to README until they find what they're looking for.

# Build and Configuration

Our project is a standard [Nextjs project](https://nextjs.org/docs/getting-started) written in TypeScript.

# ./src

Application code.

# ./public

Public assets.

# ./next.config.js

We deploy this project to both `app.daopanel.com` and `www.daopanel.com`. At
`app.daopanel.com` we serve the application and at `www.daopanel.com` we serve the
landing page. To accomplish this we use redirects and rewrites conditioned on an
environment variable that is only present in the landing page deployment. See
the `redirects` and the `rewrites` blocks in `next.config.js`.
