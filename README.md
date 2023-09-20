# Task Local Env Run Instructions

## Description
This document provides instructions for running the Task app locally on your development environment.

## Prerequisites
Before running the app locally, ensure you have the following prerequisites installed:
- Node.js: [Download and install Node.js](https://nodejs.org/)
- NPM (Node Package Manager): Included with Node.js installation

## Getting Started

### 1. Clone the Repository [Both Frontend and Backend]
Clone the [App Name] repository to your local machine using the following command:
```bash
git clone https://github.com/JaykishanChaudhary/front_app.git

git clone https://github.com/JaykishanChaudhary/Back_app.git
```

### 2. Start the Backend

Open your preferred code editor and navigate to the project folder. In the terminal, run the following command to start the backend server:
```bash
node app.js
```

### 3. Start the Frontend

Before starting frontend, You need to change the remote backend apis base url : http://52.90.211.46:5000 to http://localhost:5000 in each component where we trying to intercat with backend server, i.e., updateDetail.js and tablebox.js files.

With the backend running, open a new terminal window and navigate to the project's frontend directory. Use the following command to start the frontend application:
```bash
npm start
```

### 4. Access the App

Once both the backend and frontend are up and running, you can access the app by opening your web browser and navigating to the following URL:
```
http://localhost:3000
```

### 5. Using the App

- Home Page:
  - The app's home page includes a header, sidebar, and a table displaying task details.

- Creating a New Task:
  1. Click the "Create Task" button on the home page.
  2. You will be directed to the "Create Task" page.
  3. Fill out the task details in the provided form.
  4. Click the "Create Task" button to submit the new task.

- Updating a Task:
  1. Click the "View Details" button next to the task you want to update on the home page.
  2. On the "View Details" page, you'll find a form pre-filled with existing task details.
  3. Make your updates to the task details.
  4. Click the "Save" button to save the changes.

- Viewing Tasks:
  - After creating or updating tasks, you can return to the home page to see the updated task list in the table.
  - You can select various filters to fetch the required tasks.

- Deleting Tasks:
  - Click on Delete icon to delete a task.

## Conclusion
You have successfully set up and run the Task app locally on your development environment. Feel free to explore the app, create new tasks, and update existing ones as needed.




# Step-by-Step Guide: Creating an EC2 Instance on AWS

This document provides a step-by-step guide for creating an EC2 (Elastic Compute Cloud) instance on Amazon Web Services (AWS). EC2 instances are virtual servers in the cloud that you can use to run applications, host websites, or perform various computing tasks.

## Prerequisites
Before you begin, make sure you have the following prerequisites:
- An AWS account: If you don't have one, sign up for an AWS account at [https://aws.amazon.com/](https://aws.amazon.com/).
- AWS Access Key ID and Secret Access Key: You'll need these credentials to access AWS programmatically. Create them in the AWS IAM (Identity and Access Management) console.

## Step 1: Sign in to the AWS Console
1. Go to [AWS Management Console](https://aws.amazon.com/console/).
2. Sign in with your AWS account credentials.

## Step 2: Access the EC2 Dashboard
1. Once signed in, click on the "Services" menu at the top left.
2. Under "Compute," select "EC2" to access the EC2 Dashboard.

## Step 3: Launch an EC2 Instance
1. On the EC2 Dashboard, click the "Instances" link in the left sidebar.
2. Click the "Launch Instance" button to start the EC2 instance creation process.

## Step 4: Choose an Amazon Machine Image (AMI)
1. In the "Step 1: Choose an Amazon Machine Image (AMI)" section:
   - Select an AMI that suits your needs (e.g., Amazon Linux, Ubuntu, Windows Server).
   - Choose an AMI by clicking the "Select" button.

## Step 5: Choose an Instance Type
1. In the "Step 2: Choose an Instance Type" section:
   - Select an instance type based on your requirements (e.g., t2.micro, t3.medium).
   - Click the "Next: Configure Instance Details" button.

## Step 6: Configure Instance Details (Optional)
1. In the "Step 3: Configure Instance Details" section:
   - Configure advanced settings like VPC, subnet, IAM role, and user data (if needed).
   - Click the "Next: Add Storage" button.

## Step 7: Add Storage
1. In the "Step 4: Add Storage" section:
   - Specify the size and type of storage for your instance.
   - Click the "Next: Add Tags" button.

## Step 8: Add Tags (Optional)
1. In the "Step 5: Add Tags" section:
   - Add tags to your instance for easy identification (e.g., Name: MyEC2Instance).
   - Click the "Next: Configure Security Group" button.

## Step 9: Configure Security Group
1. In the "Step 6: Configure Security Group" section:
   - Configure the security group to control inbound and outbound traffic.
   - Click the "Review and Launch" button.

## Step 10: Review and Launch
1. Review your instance configuration.
2. Click the "Launch" button to proceed.

## Step 11: Choose or Create a Key Pair
1. In the "Select an existing key pair or create a new key pair" dialog:
   - Choose an existing key pair or create a new one.
   - Download the key pair (`.pem` file) and keep it in a secure location.
   - Click the "Launch Instances" button.

## Step 12: Launch Status
1. You will be redirected to the "Instances" page, where you can monitor the launch status of your instance.
2. Once the instance state changes to "running," your EC2 instance is up and running.

## Step 13: Connect to Your EC2 Instance
1. To connect to your EC2 instance, use SSH (for Linux) or RDP (for Windows) with the key pair you downloaded.
2. The connection details, including the public IP address or DNS name, can be found on the "Instances" page.




# Deploying Backend Repository on AWS EC2 Instance

This guide provides step-by-step instructions for deploying your backend repository on an AWS EC2 (Elastic Compute Cloud) instance. By following these steps, you can host your backend application on a cloud server and make it accessible to the internet.

**Prerequisites:**
1. An AWS EC2 instance created as per the above mentioned (#step-by-step-guide-creating-an-ec2-instance-on-aws).
2. Your backend code repository hosted on a platform like GitHub or GitLab.

## Step 1: Connect to Your EC2 Instance

Connect to your EC2 instance using SSH for Linux or RDP for Windows, using the key pair you created during the instance setup. Replace `your-instance-ip` with your EC2 instance's public IP address or DNS name.

```bash
ssh -i /path/to/your-key-pair.pem ec2-user@your-instance-ip
```

## Step 2: Update and Upgrade System Packages

Update the package list and upgrade installed packages on your EC2 instance. Run the following commands:

```bash
sudo yum update -y # For Amazon Linux
```

## Step 3: Install Required Software

Install any necessary software dependencies for your backend application. This may include Node.js, Python, database clients, etc. Use the package manager relevant to your instance's operating system:

```bash
# For example, to install Node.js and npm (Node Package Manager)
sudo yum install nodejs npm -y # For Amazon Linux
```

## Step 4: Clone Your Backend Repository

Clone your backend code repository from your Git hosting platform.

```bash
git clone https://github.com/JaykishanChaudhary/Back_app.git
```

## Step 5: Configure Your Backend Application

Navigate to the cloned repository and configure your backend application. This may involve setting environment variables, database connections, or other application-specific settings.

```bash
cd your-backend-repo
# Edit configuration files, if necessary
```

## Step 6: Install Dependencies and Build

Install the required Node.js packages or any other language-specific dependencies your backend uses. Run the following commands from your repository's root directory:

```bash
npm install # For Node.js projects
```

If your backend requires a build step (e.g., compiling TypeScript or bundling assets), execute that process as well.

## Step 7: Start Your Backend Application

Start your backend application. You may use process managers like `pm2` or `systemd` to keep your application running in the background and restart it on system reboots.

```bash
# Example using pm2 for a Node.js app
npm install -g pm2
pm2 start app.js # Replace app.js with your entry point
```

## Step 8: Configure Firewall (Security Group)

Ensure that your EC2 instance's security group allows incoming traffic on the port your backend application is listening to (e.g., port 80 for HTTP, port 443 for HTTPS). Configure the security group rules in the AWS console.

## Step 9: Test Your Backend Application

Test your backend application by accessing it using your EC2 instance's public IP address or DNS name. Open a web browser or use a tool like `curl` or `wget`.

```bash
curl http://your-instance-ip:port
```

Your backend application should now be accessible over the internet through your EC2 instance.

## Step 10: Monitor and Maintain

Monitor your EC2 instance for performance, security, and updates. Regularly apply security updates and perform backups as needed to keep your backend application running smoothly.




# MERN Stack Application with AWS Deployment - Design Choices and Challenges

## Design Choices

### Backend
1. **Node.js and Express.js**: We leveraged Node.js and Express.js for the backend to create a fast and scalable server that can handle API requests efficiently.

2. **MongoDB**: MongoDB was chosen as the database to store tasks because of its flexibility and ability to handle unstructured data, which suits our task management system.

3. **RESTful API**: We implemented RESTful API endpoints for CRUD operations, following industry best practices to ensure a consistent and intuitive API design.

### DevOps and AWS
1. **AWS Deployment**: We deployed the application on AWS using the AWS Free Tier to make it accessible to a wider audience without incurring costs during the initial phase.

2. **EC2 Instance**: We set up an EC2 instance to host the Node.js backend, allowing us to control the server environment and scalability.

## Challenges Faced

1. **AWS Configuration**: Configuring AWS services and setting up the EC2 instance required careful planning and understanding of AWS's infrastructure, which was initially challenging.

2. **Database Integration**: Integrating MongoDB with our Node.js backend and managing database operations, such as connecting and querying data, presented some complexities.

3. **Deployment Automation**: Initially, deploying the application manually was time-consuming. However, we overcame this challenge by automating deployment processes using AWS services like Elastic Beanstalk or CI/CD pipelines.

Overall, this project allowed us to gain valuable experience in building a MERN stack application with AWS infrastructure. We continuously improved our design choices and problem-solving skills throughout the development process.

For a more detailed understanding of the project and its components, please refer to the source code and deployment instructions provided in this repository.