# Netlify Auth Demo (Gatsby Version)

## This repo is currently in progress -- all notes below are scratch :)

---

(talk a bit about 2-sided routing and protection with _redirects and client-side routing with PWAs)

Admin will be an example of a fully protected route, such that the content presumes you're logged in and will redirect you back to index if you're not

Members will be an example of a non-protected route that just well-handles when the user isn't logged in

Both are useful in different cases.


NOTE - app_metadata is not editable by end-user, only admin auth (serverless probably)
user_metadata _is_ editable by end user

both are _visible_ by end user

```json
{
  "api": {
    "apiURL": "https://gatsby-auth.demo.jon.fm/.netlify/identity",
    "_sameOrigin": true,
    "defaultHeaders": {}
  },
  "url": "https://gatsby-auth.demo.jon.fm/.netlify/identity",
  "token": {
    "access_token": "xyzxyzxyzxyzxyzxyzxyz",
    "token_type": "bearer",
    "expires_in": 3600,
    "refresh_token": "xyz",
    "expires_at": 1596984429000
  },
  "id": "xyzxyzxyzxyzxyzxyzxyzxyz",
  "aud": "",
  "role": "",
  "email": "gatsby-auth.demo.jon.fm.admin@jon.fm",
  "confirmed_at": "2020-08-09T13:46:00Z",
  "invited_at": "2020-08-09T13:45:00Z",
  "app_metadata": {
    "provider": "email",
    "roles": [
      "admin"
    ]
  },
  "user_metadata": {
    "full_name": "Admin"
  },
  "created_at": "2020-08-09T13:45:00Z",
  "updated_at": "2020-08-09T13:45:00Z",
  "_fromStorage": true
}
```



gatsby-auth.demo.jon.fm.admin@jon.fm
Passw0rd!


protected client routes are different than client-only routes
