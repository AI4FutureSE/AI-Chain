import json
import os
import exploration_view

def exploration_example():
    # Initialize chatbot, assign the file to save conversation.
    exploration = exploration_view.exploration("conversation.json")
    print("Welcome to the Sapper chatbot! I am ready to help you with your requirement.")
    response = exploration.chatbot()
    exploration.prompt.append({"role": response["role"], "content": response["content"]})
    # Start chat
    while True:
        question = input("Sapper> ")

        # Save file when exit. You can define a new exit condition and call "exploration.save_conversation()" to save file.
        if question == "!quit" or question == "!exit":
            exploration.save_conversation()
            break
        #clear screen
        if question == "!clear":
            os.system("cls")
            continue
        # Add history conversations
        question = [
                {"role": "user", "content": question},
              ]
        exploration.prompt = exploration.prompt + question
        # Call chatbot
        response = exploration.chatbot()
        exploration.prompt.append({"role": response["role"], "content": response["content"]})
        print(response["content"])

def pre_design_view_example():
    # Initialize chatbot, assign the file to save conversation.
    exploration = exploration_view.exploration("conversation.json")
    # Load conversation
    with open(exploration.conversation_file, "r") as f:
        history = json.load(f)
    # Load exploration prompt
    with open("exploration_prompt.txt", "r") as f:
        prompt = f.read()
    # Assemble prompt
    exploration.prompt = history + [
         {"role": "system", "content": prompt},
         ]
    # Summarize conversation and extract user requirements
    response = exploration.chatbot()
    print (response["content"])


if __name__ == "__main__":
    # exploration_example()
    pre_design_view_example()




