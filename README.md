# English Tutor App for Mom 👩‍🏫

A personalized, interactive web application built to help my mother master English conversation, grammar, and writing in 100 days.

## 🎯 Why This Was Built
My mother, like many others, understands some English but lacks the confidence to speak it. She struggles with:
*   **Grammar Basics:** Confusion with "is/am/are", articles ("a/an/the"), and tenses.
*   **Spelling:** Phonetic errors (e.g., writing "tebal" instead of "table").
*   **Speaking Confidence:** Hesitation in real-life scenarios like shopping, visiting the doctor, or traveling.

This app was built to bridge that gap—moving her from "understanding a little" to **speaking fluently and confidently**.

## 👤 Who It Is For
*   **Target User:** My 46-year-old mother (and anyone with a similar profile!).
*   **Native Language:** Hindi (Explanations are provided in Hindi for better understanding).
*   **Learning Style:** Audio-visual learner who needs a slow, steady pace.
*   **Goal:** To handle daily conversations independently and confidently.

## 🚀 How It Helps
This isn't just a generic course; it's a tailored learning system:

1.  **100-Day Structured Curriculum:** A day-by-day plan that starts with the absolute basics (articles, greetings) and progresses to complex conversations.
2.  **Hindi-to-English Approach:** Concepts are explained in her mother tongue to ensure 100% comprehension.
3.  **Interactive Practice:**
    *   **🗣️ Speech Recognition:** She speaks, and the app listens to correct her pronunciation.
    *   **🔊 Text-to-Speech:** She can hear exactly how words should sound.
    *   **✍️ Writing Exercises:** Targeted practice to fix common spelling mistakes.
4.  **Gamification:** Points, streaks, and progress tracking to keep her motivated every single day.
5.  **Real-Life Scenarios:** Lessons focus on practical situations: "At the Market," "Talking to Relatives," "Travel," etc.

## 🛠️ How It Was Built
This project followed a user-centric development process:

1.  **Assessment & Profiling:**
    *   I started by assessing her current level (Reading: 3/5, Speaking: 1/5).
    *   Identified specific weak points (e.g., "You great" instead of "You *are* great").
    *   Created a `mom_profile.js` to map out her learning needs.

2.  **Curriculum Design:**
    *   Designed a custom 100-day syllabus.
    *   Prioritized high-urgency topics like "is/am/are" and "articles" for the first week.

3.  **Technology Stack:**
    *   **Frontend:** React + Vite (for a fast, responsive mobile-friendly UI).
    *   **Routing:** React Router (for easy navigation between lessons).
    *   **Styling:** Vanilla CSS (custom-designed for a clean, "premium" look).
    *   **Speech API:** Web Speech API for text-to-speech and voice recognition.

4.  **Deployment:**
    *   **Version Control:** Git & GitHub.
    *   **Hosting:** Render (Static Site) for instant, reliable access on her smartphone.

## 💻 Running Locally

1.  Clone the repository:
    ```bash
    git clone https://github.com/the2phoenix/english-tutor-app.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
