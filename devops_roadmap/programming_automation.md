
# 🧠 Programming Languages

## 📖 Overview
As a DevOps engineer, your role involves automating repetitive and time-consuming tasks such as deployments, configuration management, backups, and system monitoring.
This module focuses on building strong programming and scripting fundamentals to help you automate infrastructure and operational workflows using **Bash**, **Python**, **Go**, and **Ruby**.
While all these languages are widely used in DevOps ecosystems, Python is highly recommended for its simplicity, rich ecosystem of libraries, and cross-platform flexibility.

## 🧱 Topics to Learn

### 1. Bash
- Bash Scripting Basics

Writing and running shell scripts:
  ```bash
  #!/bin/bash
  echo "Hello, DevOps!"


* Variables, conditionals, and loops:

  ```bash
  if [ -f /etc/hosts ]; then
    echo "Hosts file exists"
  fi

  for file in *.log; do
    echo "Found $file"
  done
  ```
* Exit codes and error handling (`$?`).
* Using arguments and environment variables.
* File redirection and piping.

- Advanced Bash Techniques

1. Working with functions in scripts.
2. Using `cron` for scheduling jobs.
3. Parsing command-line arguments using `getopts`.
4. Logging and debugging with `set -x`.

### 2. Python for Automation


* Python syntax and data structures (lists, dictionaries, sets, tuples)
* Variables, operators, and expressions
* Conditional statements (`if`, `elif`, `else`)
* Loops (`for`, `while`) and loop control (`break`, `continue`)
* Functions and modular programming
* Modules and packages (importing and using libraries)
* Writing and executing Python scripts
* File handling (reading from and writing to files)
* Error handling (`try`, `except`, `finally`)
* Working with environment variables
* Automation scripts (using libraries like `subprocess`, `os`, `sys`)
* Basic web scraping (using libraries like `BeautifulSoup`, `requests`)




4. Automating with APIs

* Basics of REST APIs (GET, POST, PUT, DELETE).
* Sending API requests using Python `requests` library:

  ```python
  import requests

  response = requests.get("https://api.github.com")
  print(response.status_code)
  ```
* Parsing API responses (JSON).
* Automating cloud resource management using AWS/GCP SDKs.

### 5. File & Log Automation

* Compressing and rotating log files.
* Parsing log data and extracting patterns.
* Automating backups using Bash/Python scripts.

### 6. Integrating Automation in DevOps

* Using scripts inside CI/CD pipelines (GitHub Actions, Jenkins).
* Automating system monitoring or health checks.
* Writing scripts for server provisioning (Ansible/Terraform helpers).



## 🧩 Hands-on Exercises

1. Write a Bash script that checks disk usage and sends an alert if it exceeds 80%.
2. Create a Python script to fetch EC2 instance details from AWS using `boto3`.
3. Automate a daily log rotation using a cron job.
4. Write a Python script to monitor a website’s uptime and log the response.
5. Use Bash to automate installing and starting Nginx.


## 📚 Recommended Resources

* [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/)
* [Bash Scripting Guide – GNU](https://www.gnu.org/software/bash/manual/bash.html)
* [Python Docs – subprocess module](https://docs.python.org/3/library/subprocess.html)
* [DevOps Automation with Python – Real Python](https://realpython.com/devops-automation-python/)

