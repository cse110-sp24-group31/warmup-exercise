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
- **UI**: Making the UI responsive required additional work refining our CSS, ensuring that the widget remained aesthetically pleasing.

## Feature additions

1. **New feature**: We implemented a reset button that will clear the JSON file of all its values.
2. **Feature for Task Input**: Implemented a feature that enabled users to add more tasks, improving user interaction.

## Summary of Learnings
- **Technical Skills**: Gained a deeper understanding of JavaScript and improved CSS skills, especially in creating responsive designs.
- **Problem Solving**: Learned to address unexpected issues creatively.
- **Team Collaboration**: Enhanced our ability to work effectively as a team, distributing tasks based on individual strengths.

# SWOT Analysis
Strengths: The widget is extremely user friendly, as it utilizes primarily basic functions. It is also very flexible and streamlined, utilizing a more minimalistic view to not overwhelm the user.  <br/>
Weakness: The drawback is that it can only represent 1 week worth of tasks and must be within  512 tasks to simultaneously all tasks for the week. Another drawback is that the task categories were limited to the 3 given categories, and is unavailable for user-input. <br/>
Opportunity: This could become a competitive app on the market due to its ease of use and avoidance of bloatware features. The introduction and potential popularity of this app can also popularize the features implemented in this task list for all competitive task lists. <br/>
Threat: A potential threat we came across while development was that people could add too many tasks and eventually crash the app. <br/>

