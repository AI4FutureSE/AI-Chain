## This is similar search of marketplace, which can search similar prompts from database.

## How to use

### Requirements:

```
pip install faiss-cpu
pip install sentence-transformers
```

### Example:

Check `marketplace.py` for a simple example.
1. Save prompt files into `prompt` directory as `txt` format.
2. Import `marketplace_search` and assign top k results by `top_k=x`
3. Call `marketplace.sentence_embedding('prompt/*.txt')` to embed prompts into dense vector and save as `pkl` file for further usage.
4. Call `marketplace.similar_search('query')` to search similar prompts from database.

### Note:
The model supports both English and Chinese.
