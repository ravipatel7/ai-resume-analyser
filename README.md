# AI Resume Analyzer

An intelligent web application that analyzes resumes using AI to provide detailed insights, ATS compatibility checks, and scoring to help job seekers optimize their resumes.

## Features

- � PDF Resume Analysis
- 🤖 AI-Powered Resume Scanning
- 📊 ATS (Applicant Tracking System) Compatibility Check
- 🎯 Resume Scoring and Feedback
- 📈 Detailed Resume Insights
- 🔄 Real-time PDF to Image Conversion
- � Responsive Design

## Technologies Used

### Frontend
- ⚛️ React
- 🛣️ React Router for navigation
- � TypeScript for type safety
- ⚡ Vite for fast development and building
- � Tailwind CSS for styling
- � Custom UI components (ScoreGauge, ScoreCircle, etc.)

### Core Features
- 📄 PDF.js for PDF processing
- 🖼️ PDF to Image conversion utilities
- 🔒 Authentication system
- 🗄️ File upload and management
- 📊 Resume scoring algorithms

### Development & Deployment
- 🐳 Docker support
- 🔧 TypeScript configuration
- 📦 npm package management

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ravipatel7/ai-resume-analyser.git
cd ai-resume-analyser
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Create a production build:

```bash
npm run build
```

## Docker Deployment

Build and run using Docker:

```bash
docker build -t ai-resume-analyser .
docker run -p 3000:3000 ai-resume-analyser
```

## Project Structure

```
├── app/
│   ├── components/    # React components
│   ├── constants/     # Application constants
│   ├── lib/          # Utility functions
│   ├── routes/       # Application routes
│   └── types/        # TypeScript definitions
├── public/           # Static assets
└── docker/          # Docker configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with 💻 by Ravi Patel
