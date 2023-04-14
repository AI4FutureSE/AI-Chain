import pymysql

connection = pymysql.connect(host='***',
                             user='***',
                             password='***',
                             database='***',
                             cursorclass=pymysql.cursors.DictCursor) 

cursor = connection.cursor()

sql = """CREATE TABLE EMPLOYEE (
         FIRST_NAME  CHAR(20) NOT NULL,
         LAST_NAME  CHAR(20),
         AGE INT,
         SEX CHAR(1),
         INCOME FLOAT )"""

cursor.execute(sql)

connection.commit()
connection.close()

