import openai
from langchain.llms import OpenAI
from langchain.chains.qa_with_sources import load_qa_with_sources_chain
from langchain.docstore.document import Document
import requests
openai.api_key = "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"

# def get_wiki_data(title, first_paragraph_only):
#     url = "https://blog.csdn.net/fei347795790/article/details/127615798"
#     # if first_paragraph_only:
#     #     url += "&exintro=1"
#     data = requests.get(url)
#     print(data.text)
# get_wiki_data("Microsoft_Windows", True)
# # sources = [
# #     # get_wiki_data("Unix", True),
# #
# #     # get_wiki_data("Linux", True),
# #     # get_wiki_data("Seinfeld", True),
# # ]
# # chain = load_qa_with_sources_chain(OpenAI(temperature=0))
# #
# # def print_answer(question):
# #     print(
# #         chain(
# #             {
#                 "input_documents": sources,
#                 "question": question,
#             },
#             return_only_outputs=True,
#         )["output_text"]
#     )
#
#
# print_answer("computer")
#
#










response = openai.Completion.create(
	engine="text-davinci-003",
	prompt= "print(\"Hello world\")",
	temperature= 0.7,
	max_tokens=225,
	top_p=1,
	frequency_penalty=0,
	presence_penalty=0,
	stop=""
)
print(response)
