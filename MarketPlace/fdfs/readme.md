# This is example of using python to connect FastDFS to manipulate files and mysql database.

## How to use

```
pip install fdfs-client-py3
pip install pymysql
```

`client.conf` is the configure file of client, in which the `tracker_server` is the FastDFS server.
I have made it done and you can use this file directly when creating client.

`fdfs_client_example.py` shows how to upload and delete file. There are some bugs for downloading file because of the library.
It outputs an exception but you can download the file successfully.
Maybe upload and delete file are enough for you.

`mysql_client_example.py` shows how to create a table. 
I have fill the mysql host information in the code and you can reuse it.

More FastDFS examples see [https://pypi.org/project/py-fdfs-client/](https://pypi.org/project/py-fdfs-client/)
More pymysql examples see [https://github.com/PyMySQL/PyMySQL](https://github.com/PyMySQL/PyMySQL)
