# DexterAI

> Robotic Dexterity Evaluation and Benchmarking Platform

DexterAI is a comprehensive platform for evaluating robotic hand dexterity, featuring 3D hand model visualization, grasp taxonomy classification, force analysis, and teleoperation interfaces for manipulation research.

## Features

- **3D Hand Model** -- Interactive WebGL visualization of robotic hand kinematics
- **Grasp Taxonomy** -- Categorize and explore grasp types with visual references
- **Object Database** -- Catalog of test objects with shape, weight, and friction properties
- **Task Scoring** -- Quantitative evaluation of manipulation task performance
- **Teleoperation Panel** -- Remote control interface for robotic hand operation
- **Force Visualization** -- Real-time force and torque sensor data display
- **Benchmark Leaderboard** -- Compare dexterity scores across robotic systems

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Rendering:** Three.js, React Three Fiber, React Three Drei
- **Database:** Supabase (PostgreSQL)
- **Charts:** Recharts
- **State Management:** Zustand
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your SUPABASE_URL and SUPABASE_ANON_KEY

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  page.tsx                  # Main application with tabbed navigation
components/
  HandModel.tsx             # 3D robotic hand renderer
  GraspTaxonomy.tsx         # Grasp type explorer
  ObjectDatabase.tsx        # Test object catalog
  TaskScoring.tsx           # Manipulation scoring
  TeleoperationPanel.tsx    # Remote control interface
  ForceVisualization.tsx    # Force sensor display
  BenchmarkLeaderboard.tsx  # Rankings and comparisons
lib/
  store.ts                  # Zustand state management
  mock-data.ts              # Sample evaluation data
```

