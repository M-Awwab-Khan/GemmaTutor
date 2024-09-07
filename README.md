# GemmaTutor

GemmaTutor is an AI-powered tutor application designed to assist users in learning complex topics through interactive question-answer sessions. Leveraging the power of modern natural language processing, it provides insightful responses tailored to the user’s age group and level of understanding.

## Features

- **AI Tutor**: Provides personalized learning experiences by answering questions on a variety of topics.
- **Real-time Chat Interface**: Allows users to interact with the tutor through a clean, responsive chat interface.
- **Topic Selection**: Users can input their desired topic, and the tutor will provide insights and knowledge accordingly.
- **Age Group Customization**: Choose between different education levels (Middle School, High School, College) to receive age-appropriate explanations.
- **Sources Section**: Displays relevant sources for the topic being discussed, allowing users to dive deeper into the subject matter.

## Technologies Used

- **Next.js**: For building a responsive and dynamic frontend.
- **React.js**: Component-based architecture for UI.
- **Serper API**: Used to fetch relevant search results from Google.
- **Mozilla Readability**: Extracts clean, readable content from web pages.
- **Tailwind CSS**: For creating a modern and sleek UI.
- **Zod**: For schema validation (optional as of recent refactoring).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/M-Awwab-Khan/GemmaTutor.git
   ```
2. Navigate to the project directory:
   ```bash
   cd GemmaTutor
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Add your Serper API key in the environment variables.
5. Run the development server:
   ```bash
   npm run dev
   ```

## How to Use

1. **Input a Topic**: Start by entering the topic you wish to learn about in the input field.
2. **Select Age Group**: Choose the appropriate age group (Middle School, High School, College) for the level of explanation.
3. **Interact with the Tutor**: Ask questions, and GemmaTutor will provide answers based on your selected topic.
4. **View Sources**: Explore additional learning resources recommended by the tutor.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
