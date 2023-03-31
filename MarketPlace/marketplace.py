from marketplace_search import marketplace_search


if __name__ == '__main__':
    marketplace = marketplace_search(top_k=3)
    #marketplace.sentence_embedding('prompt/*.txt')
    marketplace.similar_search('你是一个知道各种文学知识的人，你能给我分享一些相应的知识')
        


