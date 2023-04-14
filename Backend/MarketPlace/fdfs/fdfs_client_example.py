import traceback
from fdfs_client.client import *

class FDFS():
    def __init__(self, client_file):
        self.client_file = client_file
        self.client = self.create_client()

    def create_client(self):
        try:
            client = Fdfs_client(self.client_file)
            return client
        except Exception as e:
            print("FastDFS Create file fail, {0}, {1}".format(e, traceback.print_exc()))
            return None

    def upload(self, file_name):
        try:
            ret_upload = self.client.upload_by_filename(file_name)
            print(ret_upload)
            return True
        except Exception as e:
            print("FastDFS upload file fail, {0}, {1}".format(e, traceback.print_exc()))
            return False

    def download(self, file_name, file_id):
        try:
            ret_download = self.client.download_to_file(file_name, file_id)
            print(ret_download)
            return True
        except Exception as e:
            print("FastDFS download file fail, {0}, {1}".format(e, traceback.print_exc()))
            return False

    def delete(self, file_id):
        try:
            ret_delete = self.client.delete_file(file_id)
            print(ret_delete)
            return True
        except Exception as e:
            print("FastDFS delete file fail, {0}, {1}".format(e, traceback.print_exc()))
            return False

if __name__ == "__main__":
    client_file = "client.conf"
    upload_file = "cat.jpg"
    download_file = "cat1.jpg"
    file_id = "group1/M00/00/00/I1uZGmQ2OMOAbKc0AAD_-kNtw-E083.jpg" 

    fdfs = FDFS(client_file)
    #fdfs.delete(file_id.encode(encoding='utf-8'))
    #fdfs.upload("cat.jpg")
    fdfs.download(download_file, file_id.encode(encoding='utf-8'))
