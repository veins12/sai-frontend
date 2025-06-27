Overview

- This project demonstrates dynamic rendering with scroll-based flow:
- 1–20: Vertical scroll
- 21–30: Horizontal scroll
- 31–50: Vertical scroll
- 500ms delay per item

Tech Stack

- React (Next.js App Router)
- Zustand (state)
- TailwindCSS + ShadCN UI
- JavaScript
  
How to Run

- git clone https://github.com/YOUR_USERNAME/frontend-scroll-task.git
- cd frontend-scroll-task
- npm install
- npm run dev


Features Implemented
- Dynamic element rendering using scroll events
- Timed rendering (500ms interval)
- Horizontal and vertical scroll transitions
- Responsive layout with Tailwind CSS
-Zustand for simple and scalable state handling

Authentication
-Not applicable for this project (no login functionality was required).
-However, experience with JWT, OAuth2, and Refresh Tokens is available.

Assumptions
- User will scroll naturally, triggering lazy rendering of elements
- Only one item appears at a time (strict 500ms delay)
- No backend integration is required

  
Known Limitations
- There is no scroll throttle/debounce optimization yet
- Items are unmounted after rendering new ones (could be extended to reuse/memoize)
- Currently only supports element numbers from 1 to 50

Collaborators
As per submission guideline, GitHub collaborator added:
- saiavenue-it
