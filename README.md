CI/CD PIPELINE WITH GITHUB ACTIONS FOR AUTOMATED DEPLOYMENT AND ROLLBACK

OVERVIEW

This repository contains a web application with a fully automated CI/CD pipeline configured using GitHub Actions. The pipeline is designed to build, deploy, test, and roll back the application seamlessly. The deployment target is AWS Elastic Container Service (ECS), and the Docker image is stored in Amazon Elastic Container Registry (ECR).

PRE-REQUISITE

Before running this pipeline, ensure you have the following:

1- AWS Account:  Access to an AWS account with permissions to create and manage ECS clusters, ECR repositories, and IAM roles.
2- GitHub Repository:  A GitHub repository where the web application code and pipeline configuration are stored.
3- AWS Credentials:  AWS Access Key and Secret Key stored as GitHub Secrets (AWS_ACCESS_KEY, AWS_SECRET_KEY).
4- Docker:  A Dockerfile configured for a multi-stage build to optimize the image.
5- Nginx:  Nginx configured as a reverse proxy in the Dockerfile.

SETUP INSTRUCTION

1- Clone the Repository
2- Configure AWS Credentials
3- Dockerfile Configuration:  Ensure that your Dockerfile is properly configured for a multi-stage build.
4- Create ECR Repository: Manually create an ECR repository in AWS or allow the pipeline to push to an existing one.
5- Set Up ECS Cluster: Create an ECS cluster and configure the pipeline to deploy to it.

CI/CD PIPELINE WORKFLOW FOR DEPLOYMENT AND ROLLBACK ON ECS

The CI/CD pipeline is defined in the .github/workflows/main.yml file and includes the following steps:

1- Checkout Code: The pipeline begins by checking out the code from the GitHub repository using the actions/checkout action.
2- Build Docker Image: A multi-stage Docker build is performed to create an optimized image. Nginx is set up as a reverse proxy to serve the application.
       "In code you can check Dockerfile"
3- Push Image to ECR:  The built Docker image is tagged and pushed to an AWS ECR (Elastic Container Registry) repository.
4- Deploy on ECS: The pipeline updates the ECS task definition with the new Docker image and deploys it to an ECS cluster.
       "To deploy application create Cluster , Task-definition & Service "
       and to create TASK-DEFINITION we create a file named  **.json
5- Integration Tests:  pipeline performs integration tests by making a curl request to the application URL. If the application does not respond successfully, the pipeline triggers a rollback.
6- The rollback step is conditionally executed if the integration tests fail. This will only run if the previous step fails 
        Rollback:  In case of test failure, the ECS service is rolled back to the previous stable version to ensure continuous availability.

To MONITOR EXECUTION

IN "Actions" tab in your GitHub repository to monitor the pipeline execution. You can view logs for each step in the pipeline.        

Conclusion

This CI/CD pipeline efficiently automates the deployment process, ensuring that only stable versions of the application are deployed to production. The integration of rollback functionality provides an additional layer of reliability, allowing for quick recovery in case of failures        





