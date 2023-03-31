# Exploration View

## How to use

### Config your own OpenAI API key in `config.json`

### Import `exploration_view` to your code and refere to `example.py` to know how to integrate this component to Sapper. I wrote comments to each piece of the code.

### There are two examples in `example.py`:
1. `exploration_example()` shows how to implement a chatbot and save conversation for design view. Users can chat with the chatbot freely just like ChatGPT website. The conversation is saved in `conversation.json` by calling `exploration.save_conversation()` and the file name can be modified in the code when creating the object. We don't have to consider multiple conversations this time, so we save only one conversation and new conversation will overwrite the content. Typing `!exit` or `!quit` will terminate the conversation and save file. However, you can midify the condition according to your design. For example, you can click a button to trigger that.
2. `pre_design_view_example()` is an example of user requirement analysis, which is expected to be called before design view. This example imports the conversation from exploration view and well designed prompots `exploration_prompt.txt` to make ChatGPt output user requirements. The output of this example can be taken as background knowledge of design view. For example, you can add the output of this example to the prompt of design view when initialize it.
