# 🌐 Networking Basics

## 📖 Overview
Networking is the foundation of how systems communicate — locally and across the internet.  
As a DevOps engineer, understanding core networking concepts helps you design, troubleshoot, and secure cloud and on-premises infrastructure.  
This module introduces essential networking principles, tools, and commands used daily in DevOps environments.

## 🧱 Topics to Learn

### 1. Networking Fundamentals
- What is a network? LAN vs WAN vs Internet.
- OSI Model (7 layers) vs TCP/IP Model.
- IP addressing (IPv4, IPv6) and subnetting basics.
- Public vs Private IPs.
- DNS and name resolution process.
- MAC addresses and ARP.

### 2. IP Configuration & Tools
- View and configure interfaces:
  ```bash
  ip addr, ip link, ifconfig
  ```
- Routing tables:
  ```bash
  ip route, route -n
  ```
- Display hostname and DNS info:
  ```bash
  hostname, resolvectl, nslookup, dig
  ```

### 3. Network Troubleshooting
- Checking connectivity:
  ```bash
  ping, traceroute, curl, wget
  ```
- Analyzing open ports:
  ```bash
  netstat, ss, lsof -i
  ```
- Capturing packets:
  ```bash
  tcpdump, tshark
  ```
- Testing name resolution:
  ```bash
  dig, nslookup, host
  ```

### 4. Firewalls & Security
- Basics of `iptables` and `ufw`.
- Allowing or blocking ports:
  ```bash
  sudo ufw allow 22/tcp
  sudo ufw enable
  ```
- Understanding security groups in cloud (AWS, Azure, GCP).

### 5. Network Services & Protocols
- HTTP, HTTPS, FTP, SSH, DNS, DHCP, NTP
- Understanding ports and services mapping (`/etc/services`)
- How to test ports:
  ```bash
  nc -zv <host> <port>
  ```

### 6. Load Balancing & DNS Concepts
- Basics of load balancing (Round-robin, Least Connections, etc.)
- Reverse proxy vs load balancer.
- DNS records (A, CNAME, MX, TXT, PTR).

### 7. Cloud Networking Basics
- VPCs, Subnets, and Route Tables.
- Internet Gateways and NAT Gateways.
- Security Groups vs Network ACLs.
- Private vs Public Endpoints.

## 📚 Recommended Resources
- [Network Fundamentals – Cisco Networking Academy](https://www.netacad.com/)
- [Computer Networking: A Top-Down Approach (Book)](https://gaia.cs.umass.edu/kurose_ross/)
- [DigitalOcean: Networking Concepts Explained](https://www.digitalocean.com/community/tutorials/tag/networking)

