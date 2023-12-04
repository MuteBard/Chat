# Chat GPT Integration

Allows users to communicate to communicate with chat gpt

* Incoming changes: Redis integration to replace express-session

### Routes
POST route 
/ai/chat  
* required body input
```
{
    "context": "you are a game developer that only knows programming and is planning to make a game on your own without a team",
    "question": "what is the first thing you do to make your game?"
    "key":"username-id-abc"
}
```

expected response

```
{
    "key":"username-id-abc",
    "context": "you are a game developer that only knows programming and is planning to make a game on your own without a team",
    "question": "what is the first thing you do to make your game?",
    "response": "As a game developer working alone, the first thing you should do is properly plan and design your game. This will help you stay organized throughout the development process. Here's a suggested step-by-step approach:\n\n1. Define your game idea: Determine the concept, genre, and main mechanics of your game. Consider what kind of experience you want to create for players.\n\n2. Create a game design document: This document outlines the overall structure of your game, including the story, characters, levels, gameplay mechanics, and all the necessary details. This will serve as a roadmap for your development process.\n\n3. Develop a prototype: After designing your game, create a small-scale prototype to test your core mechanics. This will help you validate your ideas and make necessary adjustments before diving into full-scale development.\n\n4. Choose your target platform(s): Determine the platforms you want to release your game on. This could be PC, console, mobile, or web. Consider the hardware limitations, target audience, and distribution methods for each platform.\n\n5. Select your programming language/engine: Decide which programming language or game engine you want to use. Popular game engines such as Unity or Unreal Engine provide comprehensive tools and resources for solo developers.\n\n6. Break down tasks and set milestones: Divide your game development process into manageable tasks. Set specific milestones and deadlines to keep yourself motivated and track your progress.\n\n7. Prioritize building core gameplay mechanics: Focus on developing the critical gameplay elements first, such as player controls, interactions, and core systems. This will allow you to get a playable version of your game as early as possible.\n\n8. Create assets or source them: Depending on your game, you'll need artwork, sound effects, music, and possibly 3D models. Decide whether you'll create these assets yourself or find suitable resources on platforms like Unity Asset Store or other online marketplaces.\n\n9. Implement and refine: Continuously develop and refine your game, adding features, improving gameplay, and addressing bugs and issues. Regularly playtest your game to get feedback and make necessary adjustments.\n\n10. Polish and optimize: Pay attention to the user interface, game controls, audiovisuals, and performance optimization. These aspects contribute to the overall player experience.\n\n11. Test, debug, and iterate: Thoroughly test your game for bugs and glitches. Collect feedback from players or peers, and iterate on your game to address any issues or improve its overall quality.\n\n12. Publish and promote: Once your game is ready, choose an appropriate platform to publish it on, whether it's an app store, game distribution platform, or your own website. Develop a marketing strategy to promote your game, including social media presence, trailers, and community engagement.\n\nRemember, developing a game alone can be challenging, so stay organized, set realistic goals, and prioritize tasks effectively throughout the process.",
    "history": [
        {
            "role": "system",
            "content": "you are a game developer that only knows programming and is planning to make a game on your own without a team"
        },
        {
            "role": "user",
            "content": "what is the first thing you do to make your game?"
        },
        {
            "role": "assistant",
            "content": "As a game developer working alone, the first thing you should do is properly plan and design your game. This will help you stay organized throughout the development process. Here's a suggested step-by-step approach:\n\n1. Define your game idea: Determine the concept, genre, and main mechanics of your game. Consider what kind of experience you want to create for players.\n\n2. Create a game design document: This document outlines the overall structure of your game, including the story, characters, levels, gameplay mechanics, and all the necessary details. This will serve as a roadmap for your development process.\n\n3. Develop a prototype: After designing your game, create a small-scale prototype to test your core mechanics. This will help you validate your ideas and make necessary adjustments before diving into full-scale development.\n\n4. Choose your target platform(s): Determine the platforms you want to release your game on. This could be PC, console, mobile, or web. Consider the hardware limitations, target audience, and distribution methods for each platform.\n\n5. Select your programming language/engine: Decide which programming language or game engine you want to use. Popular game engines such as Unity or Unreal Engine provide comprehensive tools and resources for solo developers.\n\n6. Break down tasks and set milestones: Divide your game development process into manageable tasks. Set specific milestones and deadlines to keep yourself motivated and track your progress.\n\n7. Prioritize building core gameplay mechanics: Focus on developing the critical gameplay elements first, such as player controls, interactions, and core systems. This will allow you to get a playable version of your game as early as possible.\n\n8. Create assets or source them: Depending on your game, you'll need artwork, sound effects, music, and possibly 3D models. Decide whether you'll create these assets yourself or find suitable resources on platforms like Unity Asset Store or other online marketplaces.\n\n9. Implement and refine: Continuously develop and refine your game, adding features, improving gameplay, and addressing bugs and issues. Regularly playtest your game to get feedback and make necessary adjustments.\n\n10. Polish and optimize: Pay attention to the user interface, game controls, audiovisuals, and performance optimization. These aspects contribute to the overall player experience.\n\n11. Test, debug, and iterate: Thoroughly test your game for bugs and glitches. Collect feedback from players or peers, and iterate on your game to address any issues or improve its overall quality.\n\n12. Publish and promote: Once your game is ready, choose an appropriate platform to publish it on, whether it's an app store, game distribution platform, or your own website. Develop a marketing strategy to promote your game, including social media presence, trailers, and community engagement.\n\nRemember, developing a game alone can be challenging, so stay organized, set realistic goals, and prioritize tasks effectively throughout the process."
        }
    ]
}
```

You can also provide additional statements while maintaining the context, continuing the conversation

POST route
/ai/chat  
* required body input
```
{
    "key":"username-id-abc",
    "context": "you are a game developer that only knows programming and is planning to make a game on your own without a team",
    "question": "what is the second thing you should do?"
}
```

expected 2nd response

```
{
    "key":"username-id-abc",
    "context": "you are a game developer that only knows programming and is planning to make a game on your own without a team",
    "question": "what is the second thing you should do?",
    "response": "After planning and designing your game, the second thing you should do as a solo game developer is to set up your development environment. Here's how you can proceed:\n\n1. Install the necessary software: Depending on your choice of programming language and game engine, download and install the required software tools. This may include an Integrated Development Environment (IDE) or text editor, a compiler or interpreter, and any additional libraries or frameworks for game development.\n\n2. Set up the game engine: If you're using a game engine like Unity or Unreal Engine, follow the installation instructions and set up your project within the engine. Familiarize yourself with its interface, features, and workflow.\n\n3. Configure version control: It's essential to use version control to manage your project files and allow for easy collaboration if you decide to work with others in the future. Set up a version control system like Git, and create a repository to track changes and manage your codebase.\n\n4. Create project folders and structure: Organize your project files into appropriate folders, such as \"Scripts\" for your programming code, \"Art\" for artwork assets, \"Audio\" for sound effects and music, and so on. Having a well-organized structure from the start will save you time and effort later on.\n\n5. Set up a development schedule: Establish a regular development schedule to ensure steady progress and avoid burnout. Determine how many hours per day or week you can dedicate to game development, and create a schedule that suits your availability and productivity.\n\n6. Gather learning resources: As a solo developer, you may need to learn and acquire new skills along the way. Utilize online tutorials, documentation, forums, and communities related to your chosen game engine or programming language. These resources will help you gain knowledge and troubleshoot issues as they arise.\n\n7. Familiarize yourself with the development workflow: Take time to understand the typical workflow for developing games using your chosen tools. This includes how to create and organize scripts, integrate assets, debug code, and build and test your game.\n\nSetting up your development environment properly in the early stages will save you time and frustration later on. It will allow you to focus on coding and developing your game without unnecessary delays or technical difficulties.",
    "history": [
        {
            "role": "system",
            "content": "you are a game developer that only knows programming and is planning to make a game on your own without a team"
        },
        {
            "role": "user",
            "content": "what is the first thing you do to make your game?"
        },
        {
            "role": "assistant",
            "content": "As a game developer working alone, the first thing you should do is properly plan and design your game. This will help you stay organized throughout the development process. Here's a suggested step-by-step approach:\n\n1. Define your game idea: Determine the concept, genre, and main mechanics of your game. Consider what kind of experience you want to create for players.\n\n2. Create a game design document: This document outlines the overall structure of your game, including the story, characters, levels, gameplay mechanics, and all the necessary details. This will serve as a roadmap for your development process.\n\n3. Develop a prototype: After designing your game, create a small-scale prototype to test your core mechanics. This will help you validate your ideas and make necessary adjustments before diving into full-scale development.\n\n4. Choose your target platform(s): Determine the platforms you want to release your game on. This could be PC, console, mobile, or web. Consider the hardware limitations, target audience, and distribution methods for each platform.\n\n5. Select your programming language/engine: Decide which programming language or game engine you want to use. Popular game engines such as Unity or Unreal Engine provide comprehensive tools and resources for solo developers.\n\n6. Break down tasks and set milestones: Divide your game development process into manageable tasks. Set specific milestones and deadlines to keep yourself motivated and track your progress.\n\n7. Prioritize building core gameplay mechanics: Focus on developing the critical gameplay elements first, such as player controls, interactions, and core systems. This will allow you to get a playable version of your game as early as possible.\n\n8. Create assets or source them: Depending on your game, you'll need artwork, sound effects, music, and possibly 3D models. Decide whether you'll create these assets yourself or find suitable resources on platforms like Unity Asset Store or other online marketplaces.\n\n9. Implement and refine: Continuously develop and refine your game, adding features, improving gameplay, and addressing bugs and issues. Regularly playtest your game to get feedback and make necessary adjustments.\n\n10. Polish and optimize: Pay attention to the user interface, game controls, audiovisuals, and performance optimization. These aspects contribute to the overall player experience.\n\n11. Test, debug, and iterate: Thoroughly test your game for bugs and glitches. Collect feedback from players or peers, and iterate on your game to address any issues or improve its overall quality.\n\n12. Publish and promote: Once your game is ready, choose an appropriate platform to publish it on, whether it's an app store, game distribution platform, or your own website. Develop a marketing strategy to promote your game, including social media presence, trailers, and community engagement.\n\nRemember, developing a game alone can be challenging, so stay organized, set realistic goals, and prioritize tasks effectively throughout the process."
        },
        {
            "role": "user",
            "content": "what is the second thing you should do?"
        },
        {
            "role": "assistant",
            "content": "After planning and designing your game, the second thing you should do as a solo game developer is to set up your development environment. Here's how you can proceed:\n\n1. Install the necessary software: Depending on your choice of programming language and game engine, download and install the required software tools. This may include an Integrated Development Environment (IDE) or text editor, a compiler or interpreter, and any additional libraries or frameworks for game development.\n\n2. Set up the game engine: If you're using a game engine like Unity or Unreal Engine, follow the installation instructions and set up your project within the engine. Familiarize yourself with its interface, features, and workflow.\n\n3. Configure version control: It's essential to use version control to manage your project files and allow for easy collaboration if you decide to work with others in the future. Set up a version control system like Git, and create a repository to track changes and manage your codebase.\n\n4. Create project folders and structure: Organize your project files into appropriate folders, such as \"Scripts\" for your programming code, \"Art\" for artwork assets, \"Audio\" for sound effects and music, and so on. Having a well-organized structure from the start will save you time and effort later on.\n\n5. Set up a development schedule: Establish a regular development schedule to ensure steady progress and avoid burnout. Determine how many hours per day or week you can dedicate to game development, and create a schedule that suits your availability and productivity.\n\n6. Gather learning resources: As a solo developer, you may need to learn and acquire new skills along the way. Utilize online tutorials, documentation, forums, and communities related to your chosen game engine or programming language. These resources will help you gain knowledge and troubleshoot issues as they arise.\n\n7. Familiarize yourself with the development workflow: Take time to understand the typical workflow for developing games using your chosen tools. This includes how to create and organize scripts, integrate assets, debug code, and build and test your game.\n\nSetting up your development environment properly in the early stages will save you time and frustration later on. It will allow you to focus on coding and developing your game without unnecessary delays or technical difficulties."
        }
    ]
}
```

### ENV Management

Code is dependant on either dev.env and prod.env

examples envs are:
example-dev.env
example-prod.env

DEV_OPEN_AI_TOKEN / PROD_OPEN_AI_TOKEN
Need to have an account and create and use a token from https://platform.openai.com/account/api-keys

OPEN_AI_ORG
OpenAI-Organization can be found here https://platform.openai.com/docs/api-reference/authentication?lang=node.js

MODEL_TYPE
Select model type, look in setting.js to see available models

DEBUG
Prevent use of the token and OpenAI by using gibberish in its place


