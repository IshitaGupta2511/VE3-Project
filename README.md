1- DEPLOY A WEB APPLICATION ON ECS

#Automated Code Checkout:
Retrieves the latest code from the GitHub repository.

#Optimized Docker Image Build: 
Uses multi-stage Docker builds with Nginx as a reverse proxy.

#Push to Amazon ECR:
Uploads the Docker image to Amazon Elastic Container Registry.

#Deploy to AWS ECS:
Deploys the Docker image to an AWS ECS cluster.

#Integration Testing:
Runs tests to verify the deployment.

#Automatic Rollback: 
Reverts to the previous stable version if tests fail.

2. AWS Configuration

#Create an Amazon ECR Repository:
Note the repository URI for use in the workflow.

#Set Up AWS ECS:
Create an ECS cluster and service.

#Configure IAM Permissions:
Create an IAM user with permissions for ECR and ECS.
Obtain the AWS Access Key ID and Secret Access Key.

#Add GitHub Secrets
