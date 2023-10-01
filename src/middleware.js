import { withAuth } from "next-auth/middleware"

// middleware is applied to all routes, use conditionals to select

export default withAuth(
  function middleware (req) {
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (
          req.nextUrl.pathname.startsWith('/login') &&
          token === null
        ) {
          return true
        }
        return true
      }
    }
  }
)