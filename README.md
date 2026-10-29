# Home Nest — Frontend Demo

A static HTML, CSS and JavaScript property discovery prototype. No backend, database, API server, authentication service or payment integration is included.

## Run
Open `index.html` directly, or run `python -m http.server 5500` in this folder and visit `http://127.0.0.1:5500`.

## Pages
- `index.html` — landing page and property discovery
- `property.html` — property detail UI
- `login.html` — frontend-only login/signup form demo
- `booking.html` — booking estimate UI
- `bookings.html` — sample bookings dashboard and profile preview

All property listings and booking records are sample frontend content. Login/signup do not authenticate a real user, and booking/payment actions are not connected to a service. Responsive CSS includes desktop, tablet and mobile breakpoints plus horizontal-overflow safeguards. The preloader is decorative and dismisses automatically.


## Demo login behavior
The login form is intentionally permissive for frontend demonstrations: it proceeds with any values entered (and also tolerates blank fields). Signup switches modes, accepts a demo name, and navigates to the dashboard. This is not real authentication; do not use real passwords or sensitive information.
