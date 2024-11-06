**SNAKE SPECIES IDENTIFICATION APPLICATION**
---
Overview
---
                
                The snake image recognition application provides users with the ability to identify snakes and determine their toxicity through images. It helps users identify accurate information about snakes when encountered in reality, helping users quickly identify snakes in case of bites and when users want to identify any type of snake in the world, thereby saving emergency time, providing information to doctors and coordinating serum in a timely manner.
                
                Our project uses a machine learning model to classify venomous and non-venomous snakes. Snake images are trained on a dataset of 23,000 records so that the model can distinguish the biological characteristics of each species and classify toxicity. The application has the ability to scan images from the camera or upload from the library, put them into the application and return results by snake species name and toxicity. Along with that, it stores data about search history to help users easily check information again.
              
               The snake recognition application based on machine learning provides a useful solution for improving understanding of snakes and supporting quick handling in emergency cases. This is an effective application to reduce the risk of death from venomous snakebites, contribute to the effort to reduce neglected tropical diseases in areas prone to snakebite accidents as well as help people gain more understanding about snake species in the world. 
              
**Dataset**
---
  Image of 135 different species of snakes

**Directory**
Csv - Contains csv file with details about training and test set , information regarding the binomial name , country where they are found and etc.
train - Contains folder differentiated by the class_id(check csv) , around 24k images.
test - Contains folder differentiated by the class_id(check csv) ,around 3k images.
Link
https://www.kaggle.com/datasets/goelyash/165-different-snakes-species 

**Design application interface**
---
Design link: https://www.figma.com/design/od7N8QVA8m9RTh8VLthOMH/Snake-app?node-id=18-233&t=aK6g6jNgoXvQMV6C-1 

Experience hi-fi prototype: https://www.figma.com/proto/od7N8QVA8m9RTh8VLthOMH/Snake-app?page-id=2%3A2&node-id=18-233&node-type=frame&viewport=439%2C254%2C0.17&t=kWo2BxgOJq0rULHY-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18%3A220  

**Content**
---
* **[snake-app-final-1-new]** (https://github.com/Iris52/Snake-N6-TI001-4-10-24/tree/main/Snake-app-final-1-new) - The folder that contains the files while the team is working on the project. Includes the files and structures needed to run the Expo mobile app such as backend, frontend, model, and data

* **[final_app]** (https://github.com/Iris52/Snake-N6-TI001-4-10-24/tree/main/final_app) - The folder that contains the complete application. This is the final version of the project with all the features and bug fixes.

* **[frontend]** (https://github.com/Iris52/Snake-N6-TI001-4-10-24/tree/main/frontend) - The folder that contains the user interface files of the application. Includes the source code for the interface using React Native, which interacts directly with the backend and Expo to recognize snakes.

* **[gitattributes]** (https://github.com/Iris52/Snake-N6-TI001-4-10-24/blob/main/.gitattributes) - Configuration file for Git LFS. Contains large file types (such as images, models) that are tracked by Git LFS to optimize storage.

* **[README.md]** (https://github.com/Iris52/Snake-N6-TI001-4-10-24/blob/main/README.md) - The main README file of the project. Detailed instructions on how to install, use, and deploy the snake recognition application, as well as system requirements and contact information.

* **[SnakeClassification.ipynb]** (https://github.com/Iris52/Snake-N6-TI001-4-10-24/blob/main/SnakeClassification.ipynb) - Jupyter Notebook for training and evaluating snake recognition models. Contains the source code and training process for the snake classification model, including preprocessing, training, and accuracy evaluation steps.

* **[database_snake.sql]** (https://github.com/Iris52/Snake-N6-TI001-4-10-24/blob/main/database_snake.sql) - The project's SQL database file. Contains the basic structure and data for the database used in the application, including tables and relations needed to store information about snake species and their venom. This is a future direction and the team plans to implement it in the near future.
* **[app.py]** (https://github.com/Iris52/Snake-N6-TI001-4-10-24/blob/main/app.py) - File app.py trong dự án nhận diện loài rắn sẽ là phần backend chính, cung cấp API để xử lý các yêu cầu từ frontend hoặc các ứng dụng khác.
* **[static/uploads]** (https://github.com/Iris52/Snake-N6-TI001-4-10-24/tree/main/static/uploads) - Folder containing project images
* **[templates]** (https://github.com/Iris52/Snake-N6-TI001-4-10-24/tree/main/templates) - Test interface when testing models and APIs
* **[venv]** (https://github.com/Iris52/Snake-N6-TI001-4-10-24/tree/main/venv) - This is the root directory of the virtual environment. It contains all the files and directories needed to create a standalone Python environment including Scripts, Lib and some other items.
* **[search_history.json]** (https://github.com/Iris52/Snake-N6-TI001-4-10-24/blob/main/search_history.json) - Historical data archive of snake species searches
