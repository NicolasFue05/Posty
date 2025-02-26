    ██████╗  ██████╗ ███████╗████████╗██╗   ██╗
    ██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝╚██╗ ██╔╝
    ██████╔╝██║   ██║███████╗   ██║    ╚████╔╝ 
    ██╔═══╝ ██║   ██║╚════██║   ██║     ╚██╔╝  
    ██║     ╚██████╔╝███████║   ██║      ██║   
    ╚═╝      ╚═════╝ ╚══════╝   ╚═╝      ╚═╝  

Posty is a terminal application designed to fetch data from an API and store it in a JSON file.

## 📌 Features
- Fetch data from a given API URL.
- Save data to a local JSON file.
- Store default API URLs and JSON paths for future use.
- Intereactive Terminal-based interface

## ⚙️ Installation
1. **Clone the repository**
```bash
  git clone https://github.com/NicolasFue05/posty.git
  cd Posty
```
2. **Install dependencies**
```bash
  npm install
```
3. **Run the application**
```bash
  npm run dev
```

## 💡Instructions
### First Steps
- You can save a **default JSON file path** in the settings menu.
- You can also save a **default API URL** with its endpoint.

### 🔹How to Start
1. Run the program and select the **"Start"** option.

### 🔹Program Requirements
When starting, the program will ask for the following:

📦 **An API URL** (Required):
- You can enter the **full API URL**
- Or just enter the base URL and specify the **endpoint** separately.

📌**An Endpoint** (Optional):
- If you provided the full API URL, you can skip this step.
- If you only provided the base URL, you must specify an endpoint.

📝 **A JSON File Path for Saving Fetched Data:**
- You can use the **saved JSON path.**
- Create a new **local JSON file** (saved in the ```/data``` folder)
- Enter a **custom path** where the JSON file should be saved.

📂 **If Choosing a Custom Path:**
- The program will prompt you to enter the full path to the JSON file.

## 🔹Settings Menu Options
- Save a **default JSON file path** (stored in ```jsonPath.txt```).
- Save a **default API URL (stored in ```api.txt```)

## 🚀 Usage Example

![image](https://github.com/user-attachments/assets/5c93800a-0e92-4dbb-94f9-15c8d0c8795e)

1. **Start Posty** and enter the required API details.
2. **Fetch Data** from the API.
3. **Store the results** in the specified JSON file.
4. **Reuse stored settings** for future API requests.

## 🛠 Troubleshooting
- If the API URL is invalid, you may get an error message: ```THE GIVEN API IS NOT AVAILABLE.```
- Ensure ```jsonPath.txt``` and ```api.txt``` exist or provide new paths.

## 📄 License 
This project is licensed under the MIT License.

🎯 Follow these steps to configure your program correctly and start fetching API data efficiently!
Created with love by: [NicolasFue05](https://github.com/NicolasFue05)
