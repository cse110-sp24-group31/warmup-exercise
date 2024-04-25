# Project Overview

## Development cycle of the project

We chose to develop a Task List widget, designed to manage entries in a journal via a web interface.

1. **Planning and Design**: We started by defining the structure of our JSON data and sketching the basic UI layout. We also decided on the functionalities our widget would support, such as inserting tasks.
2. **Implementation**: We coded the main functionalities using JavaScript, ensuring that the interaction with the HTML was responsive. CSS was used to provide a user-friendly interface.
3. **Testing**: We conducted different kinds of tests of the widget using selenium. We also conducted integration testing to ensure that all parts of the widget worked well together.
4. **Documentation**: Throughout the development process, we maintained detailed documentation, which included code comments, usage instructions, and a description of our testing strategy.
5. **Review and Refinement**: The final phase involved reviewing pull requests as a group. 

## Issues Encountered

- **JSON**: We initially faced challenges in managing data loading from hardcoded JSON files, which was resolved by refining our data fetching and state management logic.
- **UI**: Making the UI responsive required additional work in refining our CSS, ensuring that the widget remained aesthetically pleasing.

## Feature additions

1. **New feature**: We implemented a reset button which will clear the json file of all its values.
2. **Popups for Task Details**: Implemented popups that provide more detailed information and editing options for each task, improving user interaction without cluttering the main interface.

## Summary of Learnings
- **Technical Skills**: Gained deeper understanding of JavaScript, particularly in DOM manipulation and asynchronous operations. Improved CSS skills, especially in creating responsive designs.
- **Problem Solving**: Learned to address unexpected issues like browser compatibility and data handling robustly and creatively.
- **Team Collaboration**: Enhanced our ability to work effectively as a team, distributing tasks based on individual strengths and collaborating closely to integrate different parts of the project seamlessly.

# SWOT Analysis
Strengths: Flexible, streamlined visualization, customizable, user friendly <br/>
Weakness: Can only represent 1 week up to 512 tasks at a time. <br/>
Opportunity: Could become a competitive app on the market and popularize these features in task managers <br/>
Threat: People could try to spam too many tasks and crash the app. To resolve this, we set a limit on the number of tasks to 512. <br/>

