# Debate Visualizer
The Debate Visualizer is an Angular application that converts debate audio and transcripts into dynamic, interactable argument flowcharts.
## How it works
Debate Visualizer is built using D3.js.
- Debate transcripts are converted to JSON objects containing relevant information (e.g. timestamps, argument summary, response to) using an LLM.
- Parsed JSON objects are formatted into a hierarchy structure that is then passed to a D3.js flextree which creates the visual represenation.  
