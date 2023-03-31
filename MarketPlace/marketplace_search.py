import faiss
import glob
import pickle
from sentence_transformers import SentenceTransformer

class marketplace_search:
    def __init__(self, top_k=5):
        self.model = SentenceTransformer('distiluse-base-multilingual-cased')
        self.k = top_k
        self.embedding_file = 'embeddings.pkl'

    def sentence_embedding(self, file_path):
        print("Sentence embedding...")
        prompts = self._get_data(file_path)
        sentence_embeddings = self.model.encode(prompts)
        with open(self.embedding_file, "wb") as fOut:
            pickle.dump({'sentences': prompts, 'embeddings': sentence_embeddings}, fOut, protocol=pickle.HIGHEST_PROTOCOL)
        print("Save embedding to", self.embedding_file)

    def similar_search(self, query):
        with open(self.embedding_file, "rb") as fIn:
            stored_data = pickle.load(fIn)
            stored_sentences = stored_data['sentences']
            stored_embeddings = stored_data['embeddings']
        index = faiss.IndexFlatL2(stored_embeddings.shape[1])
        print("index is trained:", index.is_trained, stored_embeddings.shape)
        index.add(stored_embeddings)
        xq = self.model.encode([query])
        D, I = index.search(xq, self.k)
        for i in I[0]:
            print (i, stored_sentences[i], "\n")

    def _get_data(self, file_path):
        prompt_files = glob.glob(file_path)
        prompts = []
        for prompt_file in prompt_files:
            with open(prompt_file, 'r') as pfile:
                prompt = pfile.read()
                prompts.append(prompt)
        return prompts
        
